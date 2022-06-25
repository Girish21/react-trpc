import { json, LoaderFunctionArgs } from 'react-router-dom'

export async function loader({ signal }: LoaderFunctionArgs) {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    mode: 'cors',
    signal: signal,
    method: 'get',
  })

  return new Response(response.body)
}
