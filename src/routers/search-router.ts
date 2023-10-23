import { listCeps, mySearchs, rateSearch, searchCep } from '@/controllers'
import { validateBody, validateParams } from '@/middlewares'
import {
    mySearchsBodySchema,
    newSearchBodySchema,
    newSearchParamsSchema,
    rateSearchParamsSchema,
    rateSearchbodySchema
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
    .patch(
        '/rate/:searchId',
        validateParams(rateSearchParamsSchema),
        validateBody(rateSearchbodySchema),
        rateSearch
    )

export { searchRouter }
