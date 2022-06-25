import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataBrowserRouter, Navigate, redirect, Route } from 'react-router-dom'

import { Loader } from './components/loader'
import { PageLayout } from './components/page-layout'
import './index.css'
import Post, { $postIdLoader } from './pages/$postId'
import Index, { indexLoader } from './pages/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route element={<PageLayout />}>
        <Route index loader={() => redirect('/posts')} />
        <Route
          path='posts'
          loader={indexLoader}
          element={
            <React.Suspense fallback={<Loader />}>
              <Index />
            </React.Suspense>
          }
        >
          <Route
            path=':postId'
            loader={$postIdLoader}
            element={
              <React.Suspense fallback={<Loader />}>
                <Post />
              </React.Suspense>
            }
          />
        </Route>
      </Route>
    </DataBrowserRouter>
  </React.StrictMode>,
)
