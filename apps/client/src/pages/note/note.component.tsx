import { useLoaderData } from 'react-router-dom'
import { trpc } from '../../utils/trpc'

export default function Note() {
  let noteId = useLoaderData() as string
  let data = trpc.useQuery(['note.note', noteId])

  return (
    <div className='sticky top-6 col-span-5 col-start-8 h-max'>
      <div className='rounded-lg bg-white p-4'>
        <h1 className='text-3xl font-bold text-gray-900'>{data.data?.title}</h1>
        <p className='text-gray-700'>{data.data?.content}</p>
      </div>
    </div>
  )
}
