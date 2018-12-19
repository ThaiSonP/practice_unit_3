const express = require('express')
const router = express.Router()
const qs = require('../qs/postsQ.js')

router.get('/',qs.getAllPosts)
router.get('/:id',qs.getSinglePost)
router.post('/',qs.createPost)
router.patch('/:id',qs.updatePost)
router.delete('/:id',qs.deletPost)

module.exports = router
