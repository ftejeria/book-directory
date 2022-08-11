import express, { json } from 'express'
import mongoose from 'mongoose'
import { connectToMongo } from './db/db.js'
import { bookRouter } from './routes/books.js'

const app = express()
const PORT = 3000

connectToMongo()

app.use(json())

app.use('/books', bookRouter)

app.use('/', (req, res) => {
    res.status(404).send("Url not Found")
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})




