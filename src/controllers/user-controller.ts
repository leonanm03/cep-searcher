import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import { CreateUserParams, userService } from '@/services'

export async function userPost(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const body = req.body as CreateUserParams

    try {
        const user = await userService.createUser(body)
        return res.status(httpStatus.CREATED).send(user)
    } catch (error) {
        next(error)
    }
}
