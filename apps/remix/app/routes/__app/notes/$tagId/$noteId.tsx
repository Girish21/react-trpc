import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { db } from '~/db'

export let loader: LoaderFunction = async ({ params }) => {
  let noteId = params.noteId
  let note = await db.note.findUnique({
    where: { id: noteId! },
    select: {
      id: true,
      updatedAt: true,
      content: true,
      createdAt: true,
      title: true,
      Tag: { select: { tag: true } },
    },
  })

  return json(note)
}

export default function Note() {
  let data = useLoaderData() as NoteData

  return (
    <div className='sticky top-6 col-span-5 col-start-8 h-max'>
      <div className='rounded-lg bg-white p-4'>
        <h1 className='text-3xl font-bold text-gray-900'>{data?.title}</h1>
        <p className='text-gray-700'>{data?.content}</p>
      </div>
    </div>
  )
}

type NoteData = {
  id: string
  title: string
  content: string
}
