import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('[Server] MongoDB Connected...')
    } catch (error) {
        console.log(error)
    }
}