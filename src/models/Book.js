import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  name: String,
  author: {
    type: String,
    required: true
    
  },
  description: {
    type: String,
    required: true
  }
})

const Book = mongoose.model('Book', bookSchema)

export { Book }
