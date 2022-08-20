import { checkSchema } from 'express-validator'

export const addBookValidatorSchema = checkSchema({
  name: {
    exists: {
      errorMessage: 'Book name is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Book name should be string' }
  },
  author: {
    exists: {
      errorMessage: 'Book author is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Author name should be string' }
  },
  description: {
    exists: {
      errorMessage: 'Book description is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Description should be string' }
  }
})

export const updateBookValidatorSchema = checkSchema({
  bookId: {
    in: ['query'],
    exists: {
      errorMessage: 'Book id is required'
    }
  }
})
