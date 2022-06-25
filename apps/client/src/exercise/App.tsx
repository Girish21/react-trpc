/**
 * 🛠 import `trpc` from `../utils/trpc`
 */
export default function Aoo() {
  /**
   * ✨ call `trpc.useQuery` with the `['hello']` argument
   * and assign the result to `data`
   *
   * 💡 `data` is a `trpc.QueryResult`
   * 💡 `data.data` is the data
   * 💡 `data.error` is the error
   * 💡 `data.isLoading` is the loading state
   * 💡 `data.isError` is the error state
   */
  return (
    <main className='grid h-full place-content-center'>
      <h1 className='font-mono text-4xl font-bold'>React + tRPC</h1>
      {/**
       * 🛠 render the `data.data`
       */}
    </main>
  )
}
