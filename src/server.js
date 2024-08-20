import dotenv from 'dotenv'
import express from 'express'
import userRouter from './routes/user.routes.js'
import { connectDB } from './config/mysql.config.js'

dotenv.config({path: `${process.cwd()}/.env`})
const PORT = process.env.SERVER_PORT || 3000
const app = express()

// Middlewares
app.use(express.json())

app.use('/api/v1', userRouter)

app.use('*', (req, res) => {
    res.status(404).send({message: 'route not found on the server'})
})


// Database Connection
connectDB().then(() => {

    // Running Server
    app.listen(PORT, () => {
        console.log(`Server Up and Running on Port: ${PORT}`)
    })

}).catch((err) => {
    console.log('Error occured')
    process.exit(0)
})
