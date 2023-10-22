import { ApplicationError } from '@/protocols'

export function duplicatedCpfError(): ApplicationError {
    return {
        name: 'ConflictError',
        message: 'There is already an user with given cpf'
    }
}
