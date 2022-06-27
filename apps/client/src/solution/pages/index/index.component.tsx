import { trpc } from '../../../utils/trpc'

export default function App() {
  let data = trpc.useQuery(['hello'])

  return (
    <main className='grid h-full place-content-center'>
      <h1 className='font-mono text-4xl font-bold'>React + ?</h1>
      <pre>
        <code>{data.data}</code>
      </pre>
    </main>
  )
}
