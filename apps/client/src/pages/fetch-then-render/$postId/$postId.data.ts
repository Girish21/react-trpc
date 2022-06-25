import { json, LoaderFunctionArgs } from 'react-router-dom'

export async function loader({ params, signal }: LoaderFunctionArgs) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    {
      mode: 'cors',
      signal: signal,
      method: 'get',
    },
  ).then(res => res.json())

  return json(response)
}
