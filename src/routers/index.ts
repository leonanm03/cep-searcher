import { Router } from 'express'
import { userRouter } from './user-router'

const routes = Router()

routes.get('/health', (_req, res) => res.send('OK')).use('/user', userRouter)

export default routes
