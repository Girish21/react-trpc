import { createReactQueryHooks } from '@trpc/react'
import type { AppRouter } from 'backend'

export let trpc = createReactQueryHooks<AppRouter>()
