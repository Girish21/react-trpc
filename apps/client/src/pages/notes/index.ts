import * as React from 'react'
import { LoaderFunctionArgs } from 'react-router-dom'

export let notesLoader = async (args: LoaderFunctionArgs) =>
  import('./notes.data').then(({ loader }) => loader(args))

export default React.lazy(() => import('./notes.component'))
