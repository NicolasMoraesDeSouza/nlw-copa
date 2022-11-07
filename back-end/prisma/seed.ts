import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john@doe.com',
            avatarURL: 'htps://github.com/nicolasmoraesdesouza.png'
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'examplePool',
            code: 'pool123',
            ownerId: user.id,
            participants: {
                create: {
                    userId: user.id,
                }
            }
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-06T12:00:00.503Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',
            
            
            guesses: {
                create: {
                    firstTeamPoints: 1,
                    secondTeamPoints: 2,
                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    },
                    

                }
           }
        },
    })
}
main()