import { cepService } from '@/services'
import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'

export async function listCeps(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const ceps = await cepService.findMany()
        return res.status(httpStatus.CREATED).send(ceps)
    } catch (error) {
        next(error)
    }
}
