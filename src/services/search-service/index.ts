import { searchRepository } from '@/repositories'
import { cepService } from '../cep-service'

export type NewSearchInput = {
    userId: number
    cep: string
}

async function newSearch(data: NewSearchInput) {
    const cep = await cepService.searchCep(data.cep)
    const search = await searchRepository.newSeach({
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

export const searchService = {
    newSearch
}
