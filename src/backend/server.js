// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
require("./models")

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Car Blog'
    })
})

// CONTROLLERS
// const postsController = require('./controllers/posts_controller')
// app.use('/posts', postsController)
// const usersController = require('./controllers/users_controller')
// app.use('/users', usersController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Talking shop on port: ${process.env.PORT}`)
})