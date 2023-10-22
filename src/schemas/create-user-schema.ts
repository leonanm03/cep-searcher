import { object, string } from 'yup'

export const createUserSchema = object({
    name: string().strict().required('Name is required'),
    email: string().strict().email().required('Email is required'),
    password: string().strict().required('Password is required'),
    cpf: string()
        .strict()
        .required()
        .matches(/^[0-9]{11}$/, 'must be a valid CPF')
})
