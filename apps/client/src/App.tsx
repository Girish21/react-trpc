export default function Aoo() {
  return (
    <main className='grid h-full place-content-center'>
      <form
        onSubmit={async e => {
          // await fetch(`${import.meta.env.VITE_BASE_URL}`, {
          //   method: 'post',
          //   body: JSON.stringify({ field }),
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          // })
        }}
        method='post'
      >
        <input
          name='field'
          required
          className='rounded border border-gray-800 px-2 py-px'
        />
        <button className='rounded border border-gray-400 bg-gray-200 px-2 py-px'>
          Submit
        </button>
      </form>
    </main>
  )
}
