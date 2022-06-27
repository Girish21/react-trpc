import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { DataBrowserRouter, Route } from 'react-router-dom'
import Index, { indexLoader } from './pages/index/index'

import './index.css'
import { buildDataFunction } from './utils/build-data-function'
import { queryClient } from './utils/query'
import { trpc, trpcClient } from './utils/trpc'

function RoutesWithtRPC() {
  let trpcContext = trpc.useContext()

  return (
    <DataBrowserRouter>
      <Route
        index
        loader={buildDataFunction(indexLoader, trpcContext)}
        element={
          <React.Suspense>
            <Index />
          </React.Suspense>
        }
      />
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
