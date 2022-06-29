import type { MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react'
import styles from './styles/app.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang='en' className='h-full bg-orange-100'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='h-full'>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
