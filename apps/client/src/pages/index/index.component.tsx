import { Outlet, useLoaderData } from 'react-router-dom'
import { PostList } from '../../components/post-list'
import { PostPageLayout } from '../../components/posts-page-layout'
import { SplitLayout } from '../../components/split-layout'

export default function Index() {
  const posts = useLoaderData() as Array<Post>

  return (
    <PostPageLayout>
      <SplitLayout>
        <PostList posts={posts} />
        <Outlet />
      </SplitLayout>
    </PostPageLayout>
  )
}
