import { object, string } from 'yup'

export const createUserSchema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().required(),
    cpf: string()
        .required()
        .matches(/^[0-9]{11}$/, 'must be a valid CPF')
})
