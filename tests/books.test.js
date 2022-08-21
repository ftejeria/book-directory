
import mongoose from 'mongoose'
import { server } from '../src/app'
import { Book } from '../src/models/Book'
import { initalBooks, newBook, api } from './helper'

// Test hook
beforeEach(async () => {
  await Book.deleteMany({})

  for (const book of initalBooks) {
    const bookObject = new Book(book)
    await bookObject.save()
  }
})

describe('Books', () => {
  test('getBooks- should retun 200 and contentType is json', async () => {
    await api.get('/books/get-books').expect(200).expect('Content-Type', /application\/json/)
  })

  test('getBooks- should return 2 books', async () => {
    const response = await api.get('/books/get-books')
    expect(response.body).toHaveLength(2)
  })

  test('getBooks- first book name should be Book name test', async () => {
    const response = await api.get('/books/get-books')
    expect(response.body[0].name).toBe('Book name test')
  })

  test('addBook- should return success and book + book with _id', async () => {
    const response = await api.post('/books/add-book').send(newBook)
    const { _id, name, author, description } = response.body.book
    expect(response.body.success).toBe(true)
    expect(name).toBe(newBook.name)
    expect(description).toBe(newBook.description)
    expect(author).toBe(newBook.author)
    expect(_id).not.toBe(null)
  })

  test('addBook- should be saved in mongo', async () => {
    await api.post('/books/add-book').send(newBook)
    const books = await api.get('/books/get-books')
    const { name, author, description } = books.body[2]

    expect(name).toBe(newBook.name)
    expect(description).toBe(newBook.description)
    expect(author).toBe(newBook.author)
  })
})

// Test hook
afterAll(() => {
  mongoose.connection.close()
  server.close()
})
