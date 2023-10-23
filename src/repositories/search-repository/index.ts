import { Prisma } from '@prisma/client'
import { prisma } from '@/config'

async function newSearch(data: Prisma.SearchUncheckedCreateInput) {
    return prisma.search.create({
        data
    })
}

async function findById(id: number, select?: Prisma.SearchSelect) {
    const params: Prisma.SearchFindUniqueArgs = {
        where: {
            id
        }
    }

    if (select) {
        params.select = select
    }

    return prisma.search.findUnique(params)
}

async function findByCep(cep: string, select?: Prisma.SearchSelect) {
    const params: Prisma.SearchFindFirstArgs = {
        where: {
            cep
        }
    }

    if (select) {
        params.select = select
    }

    return prisma.search.findFirst(params)
}

async function findManyByUserId(userId: number, select?: Prisma.SearchSelect) {
    const params: Prisma.SearchFindManyArgs = {
        where: {
            userId
        }
    }

    if (select) {
        params.select = select
    }

    return prisma.search.findMany(params)
}

async function userTodaySearchAmount(userId: number) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return await prisma.search.count({
        where: {
            userId,
            createdAt: {
                gte: today,
                lt: new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)
            }
        }
    })
}

export const searchRepository = {
    newSearch,
    findById,
    findByCep,
    findManyByUserId,
    userTodaySearchAmount
}
