import { Outlet } from 'react-router-dom'

export function PageLayout() {
  return (
    <main className='flex h-full flex-col'>
      <Outlet />
    </main>
  )
}
