import { object, number } from 'yup'

export const mySearchsBodySchema = object({
    userId: number().strict().required('User ID is required')
})
