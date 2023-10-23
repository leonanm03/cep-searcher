import { ApplicationError } from '@/protocols'

export function searchNotFoundError(): ApplicationError {
    return {
        name: 'NotFoundError',
        message: 'Search not found!'
    }
}
