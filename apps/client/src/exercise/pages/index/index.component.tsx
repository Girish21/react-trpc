import { useLoaderData } from 'react-router-dom'
import { FormContainer } from '../../../components/form-container'
import { TodoList } from '../../../components/todo-list'
import { Wrapper } from '../../../components/wrapper'

export default function Index() {
  const todos = useLoaderData() as Array<Todo>

  return (
    <Wrapper>
      <FormContainer>
        {/**
         * 🛠 Create a `Form` with the method as `post`
         * 🚨 import the `Form` component from `react-router-dom`
         *
         * 🛠 Create a `Input` with the `name` as `todo` and the input field should be `required`
         * 🚨 import the `Input` component from `components`
         *
         */}
      </FormContainer>
      <TodoList todos={todos} />
    </Wrapper>
  )
}
