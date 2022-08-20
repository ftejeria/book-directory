import { Book } from '../models/Book.js'
import mongoose from 'mongoose'
import { validationResult } from 'express-validator'

export const addBook = (req, res) => {
  const error = validationResult(req)

  if (!error.isEmpty()) {
    return res.status(400).send({
      success: false,
      errors: error.array()
    })
  }

  const { name, author, description } = req.body
  const book = new Book({ name, author, description })

  book.save()
  return res.send({
    success: true,
    book
  })
}

export const removeBook = async (req, res) => {
  const error = validationResult(req)

  if (!error.isEmpty()) {
    return res.status(400).send({
      success: false,
      errors: error.array()
    })
  }

  const bookId = req.query.bookId
  if (mongoose.Types.ObjectId.isValid(bookId)) {
    const book = await Book.findByIdAndDelete(bookId)
    return book
      ? res.send({
        success: true,
        msg: `Book with id ${bookId} deleted`
      })
      : res.status(404).send({
        success: false,
        errors: 'Book not found'
      })
  } else {
    return res.status(400).send({
      success: false,
      errors: 'Invalid book id'
    }
    )
  }
}

export const updateBook = async (req, res) => {
  const author = req.body.author
  const description = req.body.description

  if (!author && !description) {
    return res.status(400).send({
      success: false,
      errors: 'Specify author or description to update'
    })
  }

  const bookId = req.query.bookId
  if (mongoose.Types.ObjectId.isValid(bookId)) {
    const book = await Book.findByIdAndUpdate(bookId, { author, description }, { returnDocument: 'after' })

    return book
      ? res.send({
        success: true,
        book
      })
      : res.status(404).send(
        {
          success: false,
          errors: 'Book not found'
        })
  } else {
    return res.status(400).send({
      success: false,
      errors: 'Invalid book id'
    }
    )
  }
}

export const getBooks = async (req, res) => {
  const books = await Book.find()
  res.send(books)
}
