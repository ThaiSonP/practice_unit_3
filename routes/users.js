const express = require('express')
const router = express.Router()
const qs = require('../qs/userQs.js')

router.get('/',qs.getAllUsers)
router.get('/:id',qs.getSingleUser)
router.post('/',qs.createUser)
router.delete('/:id',qs.removeUser)


  module.exports = router
