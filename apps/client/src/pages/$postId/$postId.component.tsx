import { useLoaderData } from 'react-router-dom'
import { Post as PostImpl } from '../../components/post'

export default function Post() {
  const post = useLoaderData() as Post

  return (
    <PostImpl post={post} className='sticky top-1/2 h-max -translate-y-1/2' />
  )
}
