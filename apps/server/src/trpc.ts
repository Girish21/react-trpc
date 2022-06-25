import * as trpc from '@trpc/server'
import { z } from 'zod'

const appRouter = trpc.router().query('hello', {
  output: z.string(),
  async resolve() {
    return 'Hello from tRPC'
  },
})

export default appRouter