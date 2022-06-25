import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Loader } from '../../../components/loader'
import { PostList } from '../../../components/post-list'
import { PostPageLayout } from '../../../components/posts-page-layout'
import { SplitLayout } from '../../../components/split-layout'
import { useFetch } from '../../../utils/use-fetch'

export default function Posts() {
  const posts = useFetch<Array<Post>>(
    'https://jsonplaceholder.typicode.com/posts',
  )

  if (!posts || posts.length === 0) {
    return <Loader />
  }

  return (
    <PostPageLayout>
      <SplitLayout>
        <PostList posts={posts} />
        <Outlet />
      </SplitLayout>
    </PostPageLayout>
  )
}
