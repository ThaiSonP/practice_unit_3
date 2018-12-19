const express = require('express')
const router = express.Router()
const qs = require('../qs/commentsQ.js')

router.get('/',qs.getAllComments)
router.get('/post/:id',qs.getPostComments)
router.post('/',qs.createComment)
router.patch('/:id',qs.updateComments)
router.delete('/:id',qs.removeComment)

module.exports = router
