import { Prisma } from '@prisma/client'
import { prisma } from '@/config'

async function findByEmail(email: string, select?: Prisma.UserSelect) {
    const params: Prisma.UserFindUniqueArgs = {
        where: {
            email
        }
    }

    if (select) {
        params.select = select
    }

    return prisma.user.findUnique(params)
}

async function create(data: Prisma.UserUncheckedCreateInput) {
    return prisma.user.create({
        data
    })
}

async function findById(id: number, select?: Prisma.UserSelect) {
    const params: Prisma.UserFindUniqueArgs = {
        where: {
            id
        }
    }

    if (select) {
        params.select = select
    }

    return prisma.user.findUnique(params)
}

async function findByCpf(cpf: string, select?: Prisma.UserSelect) {
    const params: Prisma.UserFindUniqueArgs = {
        where: {
            cpf
        }
    }

    if (select) {
        params.select = select
    }

    return prisma.user.findUnique(params)
}

export const userRepository = {
    findByEmail,
    create,
    findById,
    findByCpf
}
