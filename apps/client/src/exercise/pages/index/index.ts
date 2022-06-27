import * as React from 'react'
import { LoaderFunctionArgs } from 'react-router-dom'

export let indexLoader = async (args: LoaderFunctionArgs) =>
  import('./index.data').then(({ loader }) => loader(args))

export default React.lazy(() => import('./index.component'))