import express from 'express'
import { addBook, getBooks, removeBook, updateBook } from '../controller/bookController.js'

const router = express.Router()

router.get('/get-books', async (req, res) => {
  getBooks(req, res)
})

router.post('/add-book', (req, res) => {
  const book = addBook(req, res)
  return res.send(book)
})

router.put('/update-book', async (req, res) => {
  updateBook(req, res)
})

router.delete('/remove-book', async (req, res) => {
  removeBook(req, res)
})

export { router as bookRouter }
