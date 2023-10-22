import { Prisma } from '@prisma/client'
import { prisma } from '@/config'

async function newSeach(data: Prisma.SearchUncheckedCreateInput) {
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

export const searchRepository = {
    newSeach,
    findById,
    findByCep
}
