import { Router } from 'express'

import { userPost } from '@/controllers'
import { validateBody } from '@/middlewares'
import { createUserSchema } from '@/schemas'

const userRouter = Router()

userRouter.post('/', validateBody(createUserSchema), userPost)

export { userRouter }
