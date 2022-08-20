import express, { json } from 'express'
import { connectToMongo } from './db/db.js'
import { bookRouter } from './routes/books.js'
import 'dotenv/config'

const app = express()

connectToMongo()

app.use(json())

app.use('/books', bookRouter)

app.use('/', (req, res) => {
  res.status(404).send('Url not Found')
})

app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`)
})
