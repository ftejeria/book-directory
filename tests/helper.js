
import supertest from 'supertest'
import { app } from '../src/app'

// Allows to test http request on the app
export const api = supertest(app)

export const initalBooks = [
  {
    name: 'Book name test',
    author: 'Author name test',
    description: 'Book description test'
  }, {
    name: 'Book name test',
    author: 'Author name test',
    description: 'Book description test'
  }
]

export const newBook = {
  name: 'new book',
  author: 'new book test',
  description: 'new book description'
}
