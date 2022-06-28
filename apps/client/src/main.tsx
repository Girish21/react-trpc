import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { DataBrowserRouter, redirect, Route } from 'react-router-dom'

import './index.css'
import Note, { noteLoader } from './pages/note'
import Notes, { notesLoader } from './pages/notes'
import Nav, { navLoader } from './pages/__nav'
import { buildDataFunction } from './utils/build-data-function'
import { queryClient } from './utils/query'
import { trpc, trpcClient } from './utils/trpc'

function RoutesWithtRPC() {
  let trpcContext = trpc.useContext()

  return (
    <DataBrowserRouter>
      <Route path='/' loader={() => redirect('notes')} />
      <Route
        path='/notes'
        loader={buildDataFunction(navLoader, trpcContext)}
        element={
          <React.Suspense>
            <Nav />
          </React.Suspense>
        }
      >
        <Route
          loader={buildDataFunction(notesLoader, trpcContext)}
          path=':tagId'
          element={
            <React.Suspense>
              <Notes />
            </React.Suspense>
          }
        >
          <Route
            path=':noteId'
            loader={buildDataFunction(noteLoader, trpcContext)}
            element={
              <React.Suspense>
                <Note />
              </React.Suspense>
            }
          />
        </Route>
      </Route>
    </DataBrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <RoutesWithtRPC />
      </trpc.Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
