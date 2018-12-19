const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const users = require('./routes/users.js')
const posts = require('./routes/posts.js')
const likes = require('./routes/likes.js')
const comments = require('./routes/comments.js')
const albums = require('./routes/albums.js')
const pictures = require('./routes/pictures.js')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/users',users)
app.use('/posts',posts)
app.use('/likes',likes)
app.use('/comments',comments)
app.use('/pictures',pictures)

app.use('/albums',albums)

app.get('/',(req,res)=>{
  res.json('sucess')
})

app.listen(port,()=>{
  console.log('server is running')
})
