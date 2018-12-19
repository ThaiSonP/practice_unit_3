const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/database");


function getAllPosts(req,res,next){
  db.any('SELECT * FROM posts')
  .then(result=>{
    res.status(200).json({
      status: 'success',
      data: result
    })
  }).catch((err) =>{
    return next(err)
  })
}

function getSinglePost(req,res){
  let postID = parseInt(req.params.id)
  db.one('SELECT * FROM posts WHERE id =$1', [postID])
  .then(result =>{
    res.status(200).json({
      status: 'success',
      post: result
    }).catch((err)=>{
      console.log(err)
    })
  })
}

function createPost(req,res){
  db.none(
    "INSERT INTO posts (users_id, body) VALUES (${users_id}, ${body})",
    req.body
  )
  .then(()=>{
    res.status(200).json({
      status : "success",
      message: "comment made"
    })
    }).catch(err=>{
      console.log(err)
  })
}

function updatePost (req, res){
  db.none(
    "UPDATE posts SET users_id=${users_id}, body = ${body}  WHERE id=${id}",
    {
      users_id: parseInt(req.body.users_id),
      body: req.body.body,
      id: parseInt(req.params.id)
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        messsage: "Post Updated "
      });
    })
    .catch(err => {
       console.log(err);
    });
};

function deletPost (req, res){
  let postID = parseInt(req.params.id);
  db.result("DELETE from posts WHERE id=$1", [postID])
  .then(result =>{
    res.status(200).json({
      status: 'sucess',
      message: `Post # ${postID} has been deleted`
    }).catch(err=>{
      console.log(err)
    })
  })
}

module.exports = {getAllPosts,getSinglePost,createPost,updatePost,deletPost}
