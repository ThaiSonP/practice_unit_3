const express = require('express')
const router = express()
const qs = require ('../qs/likesQ.js')

router.get('/', qs.getAllLikes)
router.post('/',qs.createLike  )
router.get('/post/:id',qs.getPostLikes)
router.delete('/:id',qs.removeLike)

module.exports = router
