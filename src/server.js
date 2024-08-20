import dotenv from 'dotenv'
import express from 'express'

dotenv.config({path: `${process.cwd()}/.env`})
const PORT = process.env.SERVER_PORT || 3000
const app = express()


app.listen(PORT, () => {
    console.log(`Server Up and Running on Port: ${PORT}`)
})