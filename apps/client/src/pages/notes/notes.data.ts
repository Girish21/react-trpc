import { LoaderFunction, redirect } from 'react-router-dom'

export let loader: LoaderFunction = async ({ trpc, params }) => {
  let tagId = params.tagId

  // if (!tagId) {
  //   return redirect('/')
  // }

  await trpc.fetchQuery(['note.notes', tagId!])

  return tagId
}
