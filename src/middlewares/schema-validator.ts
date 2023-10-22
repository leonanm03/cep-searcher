import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'
import { invalidDataError } from '@/errors'

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
            throw invalidDataError(error.errors)
        }
    }
}
