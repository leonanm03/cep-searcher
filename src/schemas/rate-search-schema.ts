import { object, string, number } from 'yup'

export const rateSearchbodySchema = object({
    userId: number().strict().required('User ID is required'),
    rating: number().strict().required('Rating is required'),
    feedback: string().notRequired()
})

export const rateSearchParamsSchema = object({
    searchId: string()
        .strict()
        .required()
        .matches(/^[0-9]/, 'SearchId must be a number')
})
