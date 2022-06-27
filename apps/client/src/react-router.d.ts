import { trpccontext } from './utils/trpc'

declare module 'react-router-dom' {
  import type {
    LoaderFunctionArgs as RRLoaderFunctionArgs,
    ActionFunctionArgs as RRActionFunctionArgs,
  } from 'react-router-dom'
  export * from 'react-router-dom/dist'

  export interface LoaderFunctionArgs extends RRLoaderFunctionArgs {
    trpc: trpccontext
  }

  export interface ActionFunctionArgs extends RRActionFunctionArgs {
    trpc: trpccontext
  }
}
