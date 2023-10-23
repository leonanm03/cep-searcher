import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'
import { invalidDataError } from '@/errors'

export function validateBody(schema: AnySchema) {
    return validate(schema, 'body')
}

export function validateParams(schema: AnySchema) {
    return validate(schema, 'params')
}

function validate(schema: AnySchema, type: 'body' | 'query' | 'params') {
    return async (
        req: Request,
        _res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            await schema.validate(req[type], { abortEarly: false })
            next()
        } catch (error) {
            throw invalidDataError(error.errors)
        }
    }
}
