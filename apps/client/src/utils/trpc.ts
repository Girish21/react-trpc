import { createReactQueryHooks } from '@trpc/react'
import type { AppRouter } from 'server'

export let trpc = createReactQueryHooks<AppRouter>()
export let trpcClient = trpc.createClient({ url: 'http://localhost:8080/trpc' })
export type trpccontext = ReturnType<typeof trpc.useContext>
