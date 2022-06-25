import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { createExpressMiddleware } from '@trpc/server/adapters/express'

import appRouter from './trpc'

dotenv.config()

let app = express()

app.disable('x-powered-by')

app.use(compression())

app.use(cors())

app.use(morgan('tiny'))

app.use('/trpc', createExpressMiddleware({ router: appRouter }))

app.get('/', (_, res: express.Response) => {
  return res.status(200).send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.error(`🚀 Server listening on port ${process.env.PORT}`)
})

export type AppRouter = typeof appRouter
