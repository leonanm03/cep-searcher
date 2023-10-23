import { Prisma } from '@prisma/client'
import { prisma } from '@/config'

async function create(data: Prisma.CepUncheckedCreateInput) {
    return prisma.cep.create({
        data
    })
}

async function findByCep(cep: string, select?: Prisma.CepSelect) {
    console.log('entrou no findByCep', cep)
    const params: Prisma.CepFindUniqueArgs = {
        where: {
            cep
        }
    }

    if (select) {
        params.select = select
    }

    const result = await prisma.cep.findUnique(params)
    console.log('result', result)
    return result
}
export const cepRepository = {
    create,
    findByCep
}
