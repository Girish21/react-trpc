import { createReactQueryHooks } from '@trpc/react'
import type { AppRouter } from 'server'

export let trpc = createReactQueryHooks<AppRouter>()
