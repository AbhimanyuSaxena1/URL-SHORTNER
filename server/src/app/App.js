import express from 'express'
import router from '../routes/url.routes.js'
import { redirectUrlController } from '../controllers/url.controller.js'


const app = express()
app.use(express.json())

app.use('/api/url',router)


//redirection api
app.get('/:code',redirectUrlController)
export default app