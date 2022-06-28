import { LoaderFunction, redirect } from 'react-router-dom'

export let loader: LoaderFunction = async ({ trpc }) => {
  return await trpc.fetchQuery(['note.categories'])
}
