import { object, string } from 'yup'

export const createUserSchema = object({
    name: string().strict().required('Name is required'),
    email: string().strict().email().required('Email is required'),
    password: string().min(8).strict().required('Password is required'),
    cpf: string()
        .length(11)
        .strict()
        .required()
        .matches(/^[0-9]/, 'must be a valid CPF')
})
