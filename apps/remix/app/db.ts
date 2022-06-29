import { PrismaClient } from '@prisma/client'

declare global {
  var db: PrismaClient | undefined
}

let db: PrismaClient

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient({
    log: ['error'],
  })
} else {
  if (!global.db) {
    global.db = new PrismaClient({
      log: ['error', 'info', 'query', 'warn'],
    })
  }
  db = global.db
}

export { db }
