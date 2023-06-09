// DEPENDENCIES
const posts = require('express').Router()
const db = require('../models')
const { Post, User } = db


// FIND ALL Posts
posts.get('/', async (req, res) => {
    try {
        const result = [];
        const foundPosts = await Post.findAll();
        for (let i = 0; i < foundPosts.length; i++) {
            const user = await User.findOne({
                where: { id: foundPosts[i].userId },
            });
            result.push(
                {
                    post: foundPosts[i],
                    user: user
                }
            );
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Posts
posts.get('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(foundPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE APosts
posts.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newPost = await Post.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new Post',
            data: newPost
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


// UPDATE A Posts
posts.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const updatedPosts = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedPosts} post(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE A Posts
posts.delete('/:id', async (req, res) => {
    try {
        const deletedPosts = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedPosts} post(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = posts