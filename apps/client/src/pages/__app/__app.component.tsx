import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function AppLayout() {
  return (
    <main className='flex h-full flex-col'>
      <Outlet />
      <ScrollRestoration />
    </main>
  )
}
