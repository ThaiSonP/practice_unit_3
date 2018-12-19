const express = require('express')
const router = express.Router()
const qs = require ('../qs/pictures.js')

router.get('/',qs.getAllPictures);
router.get('/:id',qs.getAPictures);
router.post('/',qs.createPictures);
router.delete('/',qs.deletPicture)

module.exports = router
