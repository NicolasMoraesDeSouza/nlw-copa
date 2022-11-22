import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import cors from '@fastify/cors'
import ShortUniqueId from 'short-unique-id'
import { poolRoutes } from './routes/pool'
import { userRoutes } from './routes/user'
import { gameRoutes } from './routes/game'
import { guessesRoutes } from './routes/guess'
import { authRoutes } from './routes/auth'
const prisma = new PrismaClient({
    log: ['query']
})

async function bootstrap() {
    const fastify = Fastify({
        logger: true

    })

    await fastify.register(cors, {
        origin: true

    })
    await fastify.register(poolRoutes)
    await fastify.register(userRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(guessesRoutes)
    await fastify.register(authRoutes)
  
    

    await fastify.listen({ port: 3333, host: '0.0.0.0' })


}
bootstrap()