import { LoaderFunction } from 'react-router-dom'

export let loader: LoaderFunction = async ({ params, trpc }) => {
  let noteId = params.noteId!

  await trpc.fetchQuery(['note.note', noteId])

  return noteId
}
