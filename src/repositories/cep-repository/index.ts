import { Prisma } from '@prisma/client'
import { prisma } from '@/config'

async function create(data: Prisma.CepUncheckedCreateInput) {
    return prisma.cep.create({
        data
    })
}

async function findByCep(cep: string, select?: Prisma.CepSelect) {
    const params: Prisma.CepFindUniqueArgs = {
        where: {
            cep
        }
    }

    if (select) {
        params.select = select
    }

    return prisma.cep.findUnique(params)
}

async function findMany(select?: Prisma.CepSelect) {
    const params: Prisma.CepFindManyArgs = {}

    if (select) {
        params.select = select
    }

    return prisma.cep.findMany(params)
}

export const cepRepository = {
    create,
    findByCep,
    findMany
}
