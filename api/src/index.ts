import express from 'express'
import mongoose from 'mongoose'
import { router } from './router'
import path from 'node:path'

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://erildojs:iurd2022@waiterapp.bv9jz2o.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  const app = express()
  const port = 3333

  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
  app.use(express.json())
  app.use(router)
  
  app.listen(port, () => {
  console.log('server started');
})
}).catch((err) => {
  console.log('erro ao conectar no mongo', err);
})

