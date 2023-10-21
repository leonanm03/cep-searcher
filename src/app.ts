import 'reflect-metadata'
import 'express-async-errors'
import express, { Express } from 'express'
import cors from 'cors'

import { loadEnv, connectDb, disconnectDB } from '@/config'
// import { handleApplicationErrors } from './middlewares'
// import routes from './routers'

loadEnv()

const app = express()
app.use(cors()).use(express.json())
// .use(routes).use(handleApplicationErrors)

export async function init(): Promise<Express> {
    // connectDb()
    return Promise.resolve(app)
}

export async function close(): Promise<void> {
    await disconnectDB()
}

export default app
