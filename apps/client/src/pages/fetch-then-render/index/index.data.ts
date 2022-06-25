import { json, LoaderFunctionArgs } from 'react-router-dom'

export async function loader(args: LoaderFunctionArgs) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    mode: 'cors',
    signal: args.signal,
    method: 'get',
  }).then(res => res.json())

  return json(data)
}
