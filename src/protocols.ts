export type ApplicationError = {
    name: string
    message: string
}

export type ViaCepResponse = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
    error?: string
}

export type RequestError = {
    status: number
    data: object | null
    statusText: string
    name: string
    message: string
}

export type NewSearchInput = {
    userId: number
    cep: string
}

export type rateSearchInput = {
    userId: number
    searchId: number
    rating: number
    feedback?: string
}
