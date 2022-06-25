import React from 'react'
import {
  NavLink as NavLinkImpl,
  NavLinkProps,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom'

function NavLink(props: Omit<NavLinkProps, 'className'>) {
  return (
    <NavLinkImpl
      {...props}
      className={({ isActive }) =>
        `rounded py-2 px-1 font-mono text-lg font-bold transition-colors duration-150 ease-out hover:bg-gray-200 ${
          isActive && 'bg-gray-200'
        }`
      }
    />
  )
}

export function PageLayout() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className='flex h-full flex-col'>
      <header
        className={`sticky top-0 mx-auto w-[min(77ch,100vw-2rem)] rounded-b-md bg-white bg-opacity-60 py-3 px-1 backdrop-blur-lg transition-shadow duration-300 ease-out ${
          scrolled && 'shadow-[0px_3px_2px_0px_rgba(0,0,0,0.1)]'
        }`}
      >
        <nav className='flex gap-4'>
          <NavLink to='/fetch-then-render'>Data Router</NavLink>
          <NavLink to='/fetch-on-render'>Component Fetching</NavLink>
        </nav>
      </header>
      <Outlet />
      <ScrollRestoration />
    </main>
  )
}
