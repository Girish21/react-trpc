import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataBrowserRouter, Route } from 'react-router-dom'

import { Loader } from './components/loader'
import { PageLayout } from './components/page-layout'
import Index, { indexAction, indexLoader } from './exercise/pages/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route element={<PageLayout />}>
        <Route
          index
          loader={indexLoader}
          // 🛠 import the `indexAction` and pass it as the `action` prop
          element={
            <React.Suspense fallback={<Loader />}>
              <Index />
            </React.Suspense>
          }
        />
      </Route>
    </DataBrowserRouter>
  </React.StrictMode>,
)
