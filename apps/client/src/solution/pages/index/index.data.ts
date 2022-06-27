import { LoaderFunction } from 'react-router-dom'

export let loader: LoaderFunction = async ({ trpc }) => {
  return await trpc.prefetchQuery(['hello'])
}
