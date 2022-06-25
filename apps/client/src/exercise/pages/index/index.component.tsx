/**
 * 🛠 import `useLoaderData` from `react-router-dom`
 */
export default function Index() {
  /**
   * 💰 `useLoaderData` is a hook that returns the data from the route `loader`
   * ✨ use `useLoaderData` to get the data from the route `loader`
   * and assign it to `data`
   */
  return (
    <div className='flex-1'>
      {/**
       * 💣 delete the following `div`
       */}
      <div className='grid h-full place-content-center'>
        <h1 className='font-mono text-4xl font-bold'>Hello 👋</h1>
      </div>
      <pre>
        <code className='whitespace-pre'>
          {/**
           * 🛠 render the `data` and `JSON.stringify` it
           */}
        </code>
      </pre>
    </div>
  )
}
