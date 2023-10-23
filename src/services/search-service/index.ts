import { searchRepository } from '@/repositories'
import { cepService } from '../cep-service'

export type NewSearchInput = {
    userId: number
    cep: string
}

async function newSearch(data: NewSearchInput) {
    const cep = await cepService.searchCep(data.cep)
    const search = await searchRepository.newSearch({
        userId: data.userId,
        cep: cep.cep
    })

    return {
        data: {
            cep,
            search
        }
    }
}

async function mySearchs(userId: number) {
    const searchs = await searchRepository.findManyByUserId(userId)

    return searchs
}

export const searchService = {
    newSearch,
    mySearchs
}
