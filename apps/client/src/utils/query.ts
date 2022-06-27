import { QueryClient } from 'react-query'

export let queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 3000 } },
})
