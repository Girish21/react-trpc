import { LoaderFunctionArgs } from 'react-router-dom'
import { trpccontext } from './trpc'

export function buildDataFunction(
  func: (args: LoaderFunctionArgs) => Promise<any>,
  trpcContext: trpccontext,
) {
  return async (args: LoaderFunctionArgs) => {
    return await func({ ...args, trpc: trpcContext })
  }
}
