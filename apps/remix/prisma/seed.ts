import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

let client = new PrismaClient()

async function go() {
  let [{ id: techTagId }, { id: productivityTagId }] = await Promise.all([
    client.noteTag.create({
      data: { tag: 'Tech' },
      select: { id: true },
    }),
    client.noteTag.create({
      data: { tag: 'Productivity' },
      select: { id: true },
    }),
  ])

  await Promise.all(
    Array.from({ length: 40 }).map(async () => {
      return client.note.create({
        data: {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          noteTagId: Math.random() < 0.5 ? techTagId : productivityTagId,
        },
        select: { id: true },
      })
    }),
  )
}

go().catch(e => {
  console.error(e)
  process.exit(1)
})
