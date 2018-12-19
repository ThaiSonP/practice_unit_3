const express = require ('express');
const router = express.Router()
const qs = require ('../qs/albumsQ.js')

router.get('/',qs.getAllAlbums);
router.post('/',qs.createAlbum)

module.exports = router
