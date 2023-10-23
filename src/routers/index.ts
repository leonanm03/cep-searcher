import { Router } from 'express'
import { userRouter } from './user-router'
import { searchRouter } from './search-router'

const routes = Router()

routes
    .get('/health', (_req, res) => res.send('OK'))
    .use('/api/user', userRouter)
    .use('/api/cep', searchRouter)

export default routes
