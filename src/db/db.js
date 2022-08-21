import mongoose from 'mongoose'
import 'dotenv/config'

const DB_URL = process.env.NODE_ENV === 'development' ? process.env.MONGODB_TEST_URL : process.env.MONGODB_PROD_URL

export const connectToMongo = async () => {
  try {
    mongoose.connect(DB_URL, (err) => {
      if (err) {
        throw err
      }
      console.log('Mongodb connected')
    })
  } catch (error) {
    console.log(error)
  }
}
