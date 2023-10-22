import { ApplicationError } from '@/protocols'

export function invalidDataError(
    details: string[]
): ApplicationInvalidateDataError {
    return {
        name: 'BadRequestError',
        message: 'Invalid data',
        details
    }
}

type ApplicationInvalidateDataError = ApplicationError & {
    details: string[]
}
