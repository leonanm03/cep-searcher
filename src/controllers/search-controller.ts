import { rateSearchInput } from '@/protocols'
import { searchService } from '@/services'
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

export async function searchCep(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const data = req.body as {
        userId: number
        rating: number
        feedback?: string
    }
    const { cep } = req.params as { cep: string }

    try {
        const response = await searchService.newSearch({ cep, ...data })
        return res.status(httpStatus.CREATED).send(response)
    } catch (error) {
        next(error)
    }
}

export async function mySearchs(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { userId } = req.body as { userId: number }

    try {
        const response = await searchService.mySearchs(userId)
        return res.status(httpStatus.OK).send(response)
    } catch (error) {
        next(error)
    }
}

export async function rateSearch(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const data = req.body as Omit<rateSearchInput, 'searchId'>
    const { searchId } = req.params as { searchId: string }

    try {
        const response = await searchService.rateSearch({
            ...data,
            searchId: parseInt(searchId)
        })
        return res.status(httpStatus.OK).send(response)
    } catch (error) {
        next(error)
    }
}
