import * as React from 'react'
import { LoaderFunctionArgs } from 'react-router-dom'

export let noteLoader = async (args: LoaderFunctionArgs) =>
  import('./note.data').then(({ loader }) => loader(args))

export default React.lazy(() => import('./note.component'))
