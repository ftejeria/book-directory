import express from 'express'
import { addBook, getBooks, removeBook, updateBook } from '../controller/bookController.js'
import { addBookValidatorSchema, updateBookValidatorSchema } from '../validations/book.validations.js'

const router = express.Router()

router.get('/get-books', getBooks)

router.post('/add-book', addBookValidatorSchema, addBook)

router.put('/update-book', updateBookValidatorSchema, updateBook)

router.delete('/remove-book', updateBookValidatorSchema, removeBook)

export { router as bookRouter }
