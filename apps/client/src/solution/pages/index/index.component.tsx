import { useLoaderData } from 'react-router-dom'

export default function Index() {
  const data = useLoaderData()

  return (
    <div className='flex-1'>
      <pre>
        <code className='whitespace-pre'>{data}</code>
      </pre>
    </div>
  )
}
