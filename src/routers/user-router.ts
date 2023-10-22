import { Router } from 'express'

import { userPost } from '@/controllers'

const userRouter = Router()

userRouter.post('/', userPost)

export { userRouter }
