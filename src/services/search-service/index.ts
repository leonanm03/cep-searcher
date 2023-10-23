import { searchRepository } from '@/repositories'
import { cepService } from '../cep-service'
import { searchLimitError, searchNotFoundError } from '@/errors'
import { NewSearchInput, rateSearchInput } from '@/protocols'

async function newSearch(data: NewSearchInput) {
    const todaySearchAmount = await searchRepository.userTodaySearchAmount(
        data.userId
    )
    if (todaySearchAmount >= 10) {
        throw searchLimitError()
    }

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

async function rateSearch({
    rating,
    searchId,
    userId,
    feedback
}: rateSearchInput) {
    const search = await searchRepository.findByUserIdAndId(userId, searchId)
    if (!search) {
        throw searchNotFoundError()
    }

    const updatedSearch = await searchRepository.patch(searchId, {
        rating,
        feedback
    })

    return { updatedSearch, message: 'Thanks for your feedback!' }
}

export const searchService = {
    newSearch,
    mySearchs,
    rateSearch
}
