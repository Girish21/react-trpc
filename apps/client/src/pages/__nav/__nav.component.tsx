import { Link, Outlet } from 'react-router-dom'
import { trpc } from '../../utils/trpc'

export default function Nav() {
  let data = trpc.useQuery(['note.categories'])

  return (
    <div className='mx-auto grid w-[min(100ch,100vw-2rem)] flex-1 grid-cols-12 gap-x-3 py-6'>
      <aside className='sticky top-6 col-span-3 col-start-1 h-max rounded-2xl bg-white p-6'>
        <nav>
          <ul className='flex flex-col gap-2'>
            {data.data?.map(({ id, tag, _count }) => (
              <li key={id}>
                <Link to={id}>
                  <div className='flex gap-6 rounded px-3 py-1 transition-colors duration-200 ease-out hover:bg-gray-100'>
                    <span>{tag}</span>
                    <span className='rounded-full bg-red-500 p-1 text-sm text-white'>
                      {_count.Note}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}
