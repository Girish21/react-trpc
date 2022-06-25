import * as React from 'react'
import { Link } from 'react-router-dom'
import { Post as PostImpl } from './post'

const Post: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <li>
      <Link to={String(post.id)} resetScroll={false}>
        <PostImpl post={post} />
      </Link>
    </li>
  )
}

export const PostList: React.FC<{ posts: Array<Post> }> = ({ posts }) => {
  return (
    <ol className='flex flex-col gap-4 pt-16'>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ol>
  )
}
