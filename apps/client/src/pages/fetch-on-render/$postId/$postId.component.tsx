import { useParams } from 'react-router-dom'
import { Loader } from '../../../components/loader'
import { Post as PostImpl } from '../../../components/post'
import { useFetch } from '../../../utils/use-fetch'

export default function Post() {
  const { postId } = useParams()
  const post = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )

  if (!post) {
    return <Loader />
  }

  return (
    <PostImpl post={post} className='sticky top-1/2 h-max -translate-y-1/2' />
  )
}
