import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import userRoutes from "./routes/userRouter.js"

const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }))


//Routes
app.use("/api/users", userRoutes)


//ErrorHandler
app.use((error, req, res, next) => {
    if (res.headersSent) return next(error);
    res
      .status(error.code || 500)
      .json({ message: error.message || "An unknown error occurred" })
  });


//Connect to DB and Listen on Port  
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => {
        app.listen(port)
        console.log("Server running 🤩 😍 🥳")
    })
.catch(err => {throw new Error(err)})
