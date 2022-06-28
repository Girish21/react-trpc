import * as React from 'react'
import { LoaderFunctionArgs } from 'react-router-dom'

export let navLoader = async (args: LoaderFunctionArgs) =>
  import('./__nav.data').then(({ loader }) => loader(args))

export default React.lazy(() => import('./__nav.component'))
