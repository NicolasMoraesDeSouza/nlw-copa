import { FastifyInstance } from "fastify"
import ShortUniqueId from "short-unique-id"
import { z } from "zod"
import { prisma } from "../libs/prisma"


export async function poolRoutes (fastify: FastifyInstance) {
    fastify.get('/pools/count', async () => { 
        const count  = await prisma.pool.count()
        return { count }
    })
    fastify.post('/pools', async (req, rep) => {
        const createPoolBody = z.object({
            title: z.string(),

        })
        const { title } = createPoolBody.parse(req.body)
        const generate = new ShortUniqueId({ length: 6 })
        const code = String(generate())
        .toUpperCase()

        await prisma.pool.create({
            data: {
                title,
                code
            }
        })
        return rep.status(201).send({ code })
    })
}
