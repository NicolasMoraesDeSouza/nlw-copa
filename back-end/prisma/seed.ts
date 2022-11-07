import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    
    const user2 = await prisma.user.create({
        data: {
            name: 'Nicolas Moraes',
            email: 'nicolasmdesouza@gmail.com',
            avatarURL: 'htps://github.com/nicolasmoraesdesouza.png'
        }
    })

    
    const pool2 = await prisma.pool.create({
        data: {
            title: 'Example pool without guess',
            code: 'poolwithoutguess',
            ownerId: user2.id,
            participants: {
                create: {
                    userId: user2.id,
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
                                userId: user2.id,
                                poolId: pool2.id
                            }
                        }
                    },
                    

                }
           }
        },
    }),
    await prisma.game.create({
        data: {
            date: '2022-11-06T12:00:00.504Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'DE'
        }
    })
}
main()