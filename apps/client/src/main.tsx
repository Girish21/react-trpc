import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataBrowserRouter, redirect, Route } from 'react-router-dom'

import { Loader } from './components/loader'
import { PageLayout } from './components/page-layout'
import './index.css'
import FORPost from './pages/fetch-on-render/$postId'
import FORPostsList from './pages/fetch-on-render/index'
import FTRPost, { $postIdLoader } from './pages/fetch-then-render/$postId'
import FTRPostsList, { indexLoader } from './pages/fetch-then-render/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route element={<PageLayout />}>
        <Route index loader={() => redirect('/fetch-then-render')} />
        <Route
          path='fetch-then-render'
          loader={indexLoader}
          element={
            <React.Suspense fallback={<Loader />}>
              <FTRPostsList />
            </React.Suspense>
          }
        >
          <Route
            path=':postId'
            loader={$postIdLoader}
            element={
              <React.Suspense fallback={<Loader />}>
                <FTRPost />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path='fetch-on-render'
          element={
            <React.Suspense fallback={<Loader />}>
              <FORPostsList />
            </React.Suspense>
          }
        >
          <Route
            path=':postId'
            element={
              <React.Suspense fallback={<Loader />}>
                <FORPost />
              </React.Suspense>
            }
          />
        </Route>
      </Route>
    </DataBrowserRouter>
  </React.StrictMode>,
)
