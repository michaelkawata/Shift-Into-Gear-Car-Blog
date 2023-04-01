// DEPENDENCIES
const users = require('express').Router()
const db = require('../models')
const { User } = db


// FIND ALL Users
users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Users
users.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AUsers
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new User',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Users
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} post(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Users
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} post(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = users