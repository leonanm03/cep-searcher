import { object, string, number } from 'yup'

export const newSearchBodySchema = object({
    userId: number().strict().required('User ID is required'),
    rating: number().strict().required('Rating is required'),
    feedback: string().strict().notRequired()
})

export const newSearchParamsSchema = object({
    cep: string()
        .length(8)
        .strict()
        .required()
        .matches(/^[0-9]/, 'must be a valid CEP')
})
