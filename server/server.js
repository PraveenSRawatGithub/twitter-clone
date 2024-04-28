import express from "express"
import dotenv from "dotenv"
import {v2 as cloudinary} from "cloudinary"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import postRoutes from "./routes/post.routes.js"
import notificationRoute from "./routes/notification.routes.js"

import connectMongoDB from "./db/connectMongoDB.js"

// middlewares
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json({limit: "5mb"}))
app.use(express.urlencoded({extended: true}))   // to parse form data(urlEncoded)
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("Server is ready")
})

// routers
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/notifications', notificationRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectMongoDB();
})