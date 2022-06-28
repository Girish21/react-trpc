import * as trpc from '@trpc/server'
import { z } from 'zod'
import { db } from './db'

const noteRoutes = trpc
  .router()
  .query('categories', {
    async resolve() {
      return await db.noteTag.findMany({
        select: { _count: true, id: true, tag: true },
      })
    },
  })
  .query('notes', {
    input: z.string().min(1),
    async resolve({ input }) {
      return await db.note.findMany({
        where: { noteTagId: input },
        select: {
          id: true,
          updatedAt: true,
          content: true,
          createdAt: true,
          title: true,
          Tag: { select: { tag: true } },
        },
      })
    },
  })
  .query('note', {
    input: z.string().min(1),
    async resolve({ input }) {
      return await db.note.findUnique({
        where: { id: input },
        select: {
          id: true,
          updatedAt: true,
          content: true,
          createdAt: true,
          title: true,
          Tag: { select: { tag: true } },
        },
      })
    },
  })

const appRouter = trpc.router().merge('note.', noteRoutes)

export default appRouter
