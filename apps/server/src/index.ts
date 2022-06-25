import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { z } from 'zod'

import prisma from './db'

dotenv.config()

let app = express()

app.disable('x-powered-by')

app.use(compression())

app.use(cors())

app.use(morgan('tiny'))

app.use(express.json())

app.get('/', async (_, res: express.Response) => {
  const data = (await prisma?.todo.findMany({})) || []

  return res.status(200).send(data)
})

app.post('/', async (req: express.Request, res: express.Response) => {
  const body = z
    .object({ todo: z.string({ required_error: 'Todo is required' }).min(1) })
    .parse(req.body)

  await prisma?.todo.create({
    data: { title: body.todo },
  })

  return res.status(200).send({ ok: true })
})

app.listen(process.env.PORT, () => {
  console.error(`🚀 Server listening on port ${process.env.PORT}`)
})
