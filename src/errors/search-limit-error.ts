import { ApplicationError } from '@/protocols'

export function searchLimitError(): ApplicationError {
    return {
        name: 'TooManyRequestsError',
        message: 'You have reached the search limit for today!'
    }
}
