import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { trpc } from '../../utils/trpc'

export default function App() {
  let tagId = useLoaderData() as string
  let data = trpc.useQuery(['note.notes', tagId])

  return (
    <>
      <div className='col-span-4 col-start-4'>
        <ul className='flex flex-col gap-3'>
          {data.data?.map(({ id, title, content, Tag: { tag }, updatedAt }) => (
            <li key={id}>
              <Link to={id} resetScroll={false}>
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
