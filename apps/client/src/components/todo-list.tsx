export function TodoList({ todos }: { todos: Array<Todo> }) {
  return (
    <ul className='flex flex-col gap-3 pt-12'>
      {todos.map(todo => (
        <li key={todo.id} className='rounded p-3 shadow-md'>
          <p className='font-mono text-xl text-gray-900'>{todo.title}</p>
        </li>
      ))}
    </ul>
  )
}
