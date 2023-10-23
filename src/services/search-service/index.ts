import { addressNotFoundError } from '@/errors'
import { cepRepository, searchRepository } from '@/repositories'
import { request } from '@/utils'
import { cepService } from '../cep-service'

export type NewSearchInput = {
    userId: number
    cep: string
    rating: number
    feedback?: string
}

async function newSearch(data: NewSearchInput) {
    const cep = await cepService.searchCep(data.cep)
    const record = await searchRepository.newSeach({
        userId: data.userId,
        cep: cep.cep,
        rating: data.rating,
        feedback: data.feedback
    })

    return {
        data: {
            cep,
            record
        }
    }
}

export const searchService = {
    newSearch
}
