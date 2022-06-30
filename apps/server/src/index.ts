import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

const PageHTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Form Basic</title>
    </head>
    <body>
      <form enctype="application/x-www-form-urlencoded" method="POST">
        <input name="field" required="true" />
        <button>Submit</button>
      </form>
    </body>
  </html>
`

dotenv.config()

let app = express()

app.disable('x-powered-by')

app.use(compression())

app.use(cors())

app.use(morgan('tiny'))

app.use(express.urlencoded())

app.get('/', (_, res: express.Response) => {
  return res.status(200).send(PageHTML)
})

app.post('/', async (req: express.Request, res: express.Response) => {
  console.log(req.body)
  return res.status(200).end(PageHTML)
})

app.listen(process.env.PORT, () => {
  console.error(`🚀 Server listening on port ${process.env.PORT}`)
})
