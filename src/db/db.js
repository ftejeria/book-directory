import mongoose from "mongoose";

export const connectToMongo = async () => {
    try {
        mongoose.connect('mongodb://mongo/book-directory', (err) => {
            if (err) {
                throw err;
            }
            console.log('Mongodb connected');
        })

    } catch (error) {
        console.log(error)
    }

}