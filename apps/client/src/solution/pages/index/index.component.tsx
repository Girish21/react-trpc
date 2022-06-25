import { Form, useLoaderData } from 'react-router-dom'
import { FormContainer } from '../../../components/form-container'
import { Input } from '../../../components/input'
import { TodoList } from '../../../components/todo-list'
import { Wrapper } from '../../../components/wrapper'

export default function Index() {
  const todos = useLoaderData() as Array<Todo>

  return (
    <Wrapper>
      <FormContainer>
        <Form method='post'>
          <Input name='todo' required />
        </Form>
      </FormContainer>
      <TodoList todos={todos} />
    </Wrapper>
  )
}
