import { Router } from 'express'

import { userPost } from '@/controllers'
import { validate } from '@/middlewares'
import { createUserSchema } from '@/schemas'

const userRouter = Router()

userRouter.post('/', validate(createUserSchema), userPost)

export { userRouter }
