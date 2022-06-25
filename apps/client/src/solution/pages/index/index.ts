import * as React from 'react'
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom'

export const indexLoader = async (args: LoaderFunctionArgs) =>
  import('./index.data').then(({ loader }) => loader(args))

export const indexAction = async (args: ActionFunctionArgs) =>
  import('./index.data').then(({ action }) => action(args))

export default React.lazy(() => import('./index.component'))
