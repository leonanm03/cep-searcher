import { ApplicationError } from '@/protocols'
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

export function handleApplicationErrors(
    err: ApplicationError | Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    switch (err.name) {
        case 'BadRequestError':
            return res.status(httpStatus.BAD_REQUEST).send({
                error: err.name,
                message: err.message,
                details: (err as any).details
            })

        case 'ConflictError':
            return res.status(httpStatus.CONFLICT).send({
                error: err.name,
                message: err.message
            })

        default:
            console.error(err)
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                error: 'InternalServerError',
                message: 'Internal Server Error'
            })
    }
}
