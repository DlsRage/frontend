import mongoose from 'mongoose'

export const Connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/fullstack")
        console.log("Properly Connected")
    } catch (e) {
        console.log(e)
    }

    process.on("SIGINT", async () => {
        await mongoose.connection.close()
        console.log("Connection Terminated")
        process.exit(0)
    })
}