import express from 'express'
import { Book } from '../models/Book.js'
import mongoose from 'mongoose'

const router = express.Router()

router.get('/get-books', async (req, res) => {
  const books = await Book.find()
  res.send(books)
})

router.post('/add-book', (req, res) => {
  const name = req.body.name
  const author = req.body.author
  const description = req.body.description

  const book = new Book({
    name,
    author,
    description
  })
  book.save()
  res.send(book)
})

router.put('', (req, res) => {})

router.delete('/remove-book', async (req, res) => {
  const bookId = req.query.bookId
  if (mongoose.Types.ObjectId.isValid(bookId)) {
    const book = await Book.findByIdAndDelete(bookId)
    return book ? res.send(`Book with id ${bookId} deleted`) : res.send('Book not found')
  } else {
    return res.send('Invalid book id')
  }
})

export { router as bookRouter }
