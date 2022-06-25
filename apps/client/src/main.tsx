import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DataBrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'
import { trpc, trpcClient } from './utils/trpc'

let queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <QueryClientProvider client={queryClient}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <App />
        </trpc.Provider>
      </QueryClientProvider>
    </DataBrowserRouter>
  </React.StrictMode>,
)
