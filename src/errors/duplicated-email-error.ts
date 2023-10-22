import { ApplicationError } from '@/protocols'

export function duplicatedEmailError(): ApplicationError {
    return {
        name: 'ConflictError',
        message: 'There is already an user with given email'
    }
}
