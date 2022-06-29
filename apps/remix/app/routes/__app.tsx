import { Outlet } from '@remix-run/react'

export default function Layout() {
  return (
    <main className='flex h-full flex-col'>
      <Outlet />
    </main>
  )
}
