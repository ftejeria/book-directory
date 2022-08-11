import mongoose from "mongoose";

export const connectToMongo = async () => {
    try {
        mongoose.connect('mongodb://mongo/mydatabase', () => {
            console.log('Mongodb connected');
        })
    } catch (error) {
        console.log(error)
    }

}