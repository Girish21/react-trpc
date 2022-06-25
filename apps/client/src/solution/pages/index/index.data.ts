import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom'

export async function loader(args: LoaderFunctionArgs) {
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}`, {
    method: 'get',
    mode: 'cors',
    signal: args.signal,
  }).then(res => res.json())

  return json(data)
}

export async function action(args: ActionFunctionArgs) {
  const formData = Object.fromEntries((await args.request.formData()).entries())

  await fetch(`${import.meta.env.VITE_BASE_URL}`, {
    method: 'post',
    mode: 'cors',
    signal: args.signal,
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/')
}
