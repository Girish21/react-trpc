import { json, LoaderFunctionArgs } from 'react-router-dom'

/**
 * ✨ `loader` is a function which can be used to load data for the route.
 *
 * It is called with the `LoaderFunctionArgs` object.
 *
 * 💡 LoaderFunctionArgs.request is the request object for the route.
 * 💡 LoaderFunctionArgs.params is the params object for the route.
 * 💡 LoaderFunctionArgs.signal is the AbortController signal for the route.
 *
 * 💡 The loader function must return a new [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.
 */
export async function loader(args: LoaderFunctionArgs) {
  /**
   * sample fetch request to get data from an endpoint
   *
   * fetch('https://jsonplaceholder.typicode.com/posts', {
   *  mode: 'cors',
   *  signal: args.signal,
   *  method: 'get',
   * })
   *
   * return a new Response
   */
}
