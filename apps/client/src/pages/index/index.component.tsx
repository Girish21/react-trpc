import { trpc } from '../../utils/trpc'

export default function App() {
  let data = trpc.useQuery(['note.categories'])

  return (
    <main className='grid h-full place-content-center'>
      <h1 className='font-mono text-4xl font-bold'>React + ?</h1>
      <pre>
        <code>{JSON.stringify(data.data, null, 2)}</code>
      </pre>
    </main>
  )
}
