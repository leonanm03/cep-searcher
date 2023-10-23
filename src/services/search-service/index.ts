import { addressNotFoundError } from '@/errors'
import { ViaCepResponse } from '@/protocols'
import { searchRepository } from '@/repositories'
import { request } from '@/utils'

export type NewSearchInput = {
    userId: number
    cep: string
    rating: number
    feedback?: string
}

async function getAddressFromViaCEP(cep: string): Promise<ViaCepResponse> {
    const result = await request.get(`${process.env.VIA_CEP_URL}/${cep}/json`)

    if (!result.data || result.data.erro) {
        throw addressNotFoundError()
    }

    const { bairro, localidade, uf, complemento, logradouro } = result.data

    const address: ViaCepResponse = {
        bairro,
        cidade: localidade,
        uf,
        complemento,
        logradouro
    }

    return address
}

async function newSearch(data: NewSearchInput) {
    const alreadySearched = await searchRepository.findByCep(data.cep)

    if (alreadySearched) {
        const newSeacrh = await searchRepository.newSeach(data)

        return newSeacrh
    } else {
        await getAddressFromViaCEP(data.cep)
        const newSeacrh = await searchRepository.newSeach(data)

        return newSeacrh
    }
}

export const searchService = {
    getAddressFromViaCEP,
    newSearch
}
