import { mySearchs, searchCep } from '@/controllers'
import { listCeps } from '@/controllers/cep-controller'
import { validateBody, validateParams } from '@/middlewares'
import {
    mySearchsBodySchema,
    newSearchBodySchema,
    newSearchParamsSchema
} from '@/schemas'
import { Router } from 'express'

const searchRouter = Router()

searchRouter
    .post(
        '/:cep',
        validateParams(newSearchParamsSchema),
        validateBody(newSearchBodySchema),
        searchCep
    )
    .get('/my-searchs', validateBody(mySearchsBodySchema), mySearchs)
    .get('/', listCeps)

export { searchRouter }
