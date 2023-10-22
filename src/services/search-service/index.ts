import { addressNotFoundError } from '@/errors'
import { ViaCepResponse } from '@/protocols'
import { request } from '@/utils'

async function getAddressFromViaCEP(cep: string): Promise<ViaCepResponse> {
    const result = await request.get(`${process.env.VIA_CEP_API}/${cep}/json/`)

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

async function newSearch() {}

export const searchService = {
    getAddressFromViaCEP
}
