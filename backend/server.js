const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const {erroHandler, errorHandler} = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 5000
// connect to database

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.listen(PORT,()=>console.log(`server start on port ${PORT}`))
app.get('/',(req,res)=>{
    res.send('welcome to support desk api')
})

// Routes
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)