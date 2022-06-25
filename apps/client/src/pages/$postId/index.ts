import * as React from 'react'
import { LoaderFunctionArgs } from 'react-router-dom'

export const $postIdLoader = async (args: LoaderFunctionArgs) =>
  import('./$postId.data').then(({ loader }) => loader(args))

export default React.lazy(() => import('./$postId.component'))
