// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
require("./models")
const path = require('path')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// Express Settings
// Express Settings
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))

// Serve React App
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// CONTROLLERS

const postsController = require('./controllers/posts_controller')
app.use('/posts', postsController)

const usersController = require('./controllers/users_controller')
app.use('/users', usersController)

app.get('/home', (req, res) => {
    res.render('Home')
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Talking shop on port: ${process.env.PORT}`)
    console.log(path.join(__dirname, 'dist'))
})

