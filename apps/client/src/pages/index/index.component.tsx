import { trpc } from '../../utils/trpc'

export default function App() {
  let data = trpc.useQuery(['world'])

  return (
    <main className='grid h-full place-content-center'>
      <h1 className='font-mono text-4xl font-bold'>React + tRPC</h1>
      <h2 className='font-mono text-lg'>Data from tRPC</h2>
      <pre>
        <code>{data?.data}</code>
      </pre>
    </main>
  )
}
