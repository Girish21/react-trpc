import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DataBrowserRouter, Route } from 'react-router-dom'

import App from './App'
import './index.css'

let queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataBrowserRouter>
        <Route index element={<App />} />
      </DataBrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
