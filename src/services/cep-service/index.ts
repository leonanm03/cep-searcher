import { addressNotFoundError } from '@/errors'
import { ViaCepResponse } from '@/protocols'
import { cepRepository } from '@/repositories'
import { request } from '@/utils'

async function getAddressFromViaCEP(cep: string) {
    const result = await request.get(`${process.env.VIA_CEP_URL}/${cep}/json`)

    if (!result.data || result.data.erro) {
        throw addressNotFoundError()
    }

    const address = result.data as ViaCepResponse

    return address
}

async function searchCep(cep: string) {
    const alreadySearched = await cepRepository.findByCep(cep)

    if (alreadySearched) {
        return alreadySearched
    } else {
        const response = await getAddressFromViaCEP(cep)
        const newSeacrh = await cepRepository.create(response)

        return newSeacrh
    }
}

export const cepService = {
    searchCep
}
