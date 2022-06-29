import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Link, Outlet, useLoaderData } from '@remix-run/react'

import { db } from '~/db'

export let loader: LoaderFunction = async ({ params }) => {
  let tagId = params.tagId
  let notes = await db.note.findMany({
    where: { noteTagId: tagId! },
    select: {
      id: true,
      updatedAt: true,
      content: true,
      createdAt: true,
      title: true,
      Tag: { select: { tag: true } },
    },
  })

  return json(notes)
}

export default function Notes() {
  let data = useLoaderData() as NoteData[]

  return (
    <>
      <div className='col-span-4 col-start-4'>
        <ul className='flex flex-col gap-3'>
          {data?.map(({ id, title, content }) => (
            <li key={id}>
              <Link prefetch='intent' to={id}>
                <div className='flex flex-col gap-3 rounded-lg bg-white p-2'>
                  <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>
                  <p className='text-sm text-slate-700'>{content}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
}

type NoteData = {
  id: string
  title: string
  content: string
}
