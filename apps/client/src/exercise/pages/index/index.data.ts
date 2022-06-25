import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom'
import { json, redirect } from 'react-router-dom'

export async function loader(args: LoaderFunctionArgs) {
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}`, {
    method: 'get',
    mode: 'cors',
    signal: args.signal,
  }).then(res => res.json())

  return json(data)
}

export async function action(args: ActionFunctionArgs) {
  // 🌀 action function handles all the non-GET requests
  /**
   *
   * ✨ get the form data from the request passed as an argument to the action function
   * 💡 The form data is an instance of [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
   * 🛠 We need to covert the form data to a JSON object, we can do that by extracting the `entreis` property from the form data
   * and convert the `entries` Iterable to an object using `Object.fromEntries`
   *
   * ```
   * Object.fromEntries((await args.request.formData()).entries())
   * ```
   *
   * ✨ send a POST request to the server with the extracted object as the body
   */
  // await fetch(`${import.meta.env.VITE_BASE_URL}`, {
  //   method: 'post',
  //   mode: 'cors',
  //   signal: args.signal,
  //   body: JSON.stringify(formData),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  /**
   * 🌀 redirect the user to the todo list page
   */
}
