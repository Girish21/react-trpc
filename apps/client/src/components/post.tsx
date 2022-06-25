import React from 'react'

export const Post: React.FC<{
  className?: string
  post: Post
}> = ({ className, post }) => {
  return (
    <div className={`${className} rounded-md p-6 shadow-md`}>
      <h2 className='text-2xl font-bold'>{post.title}</h2>
      <p className='font-mono'>{post.body}</p>
    </div>
  )
}
