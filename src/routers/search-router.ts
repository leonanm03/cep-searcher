import { searchCep } from '@/controllers'
import { validateBody, validateParams } from '@/middlewares'
import { newSearchBodySchema, newSearchParamsSchema } from '@/schemas'
import { Router } from 'express'

const searchRouter = Router()

searchRouter.post(
    '/:cep',
    validateParams(newSearchParamsSchema),
    validateBody(newSearchBodySchema),
    searchCep
)

export { searchRouter }
