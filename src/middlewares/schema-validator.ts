import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'
import { invalidDataError } from '@/errors/invalid-data-error'

export function validate(schema: AnySchema) {
    return async (
        req: Request,
        _res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            await schema.validate(req.body, { abortEarly: false })
            next()
        } catch (error) {
            console.error(error.errors)
            throw invalidDataError(error.errors)
        }
    }
}
