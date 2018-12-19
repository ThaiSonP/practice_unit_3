const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/database");

function getAllLikes (req,res){
  db.any('SELECT * FROM likes')
  .then(result=>{
    res.status(200).json({
      status: 'you did it',
      likes: result
    }).catch(err=>{
      console.log(err)
    })
  })
}

function getPostLikes (req,res){
  let postID = parseInt(req.parms.id)
  db.any('SELECT * FROM likes WHERE id = $1', [postID])
  .then(result=>{
    res.status(200).json({
      status: ' success ',
      likes: result
    })
  }).catch(err=>{
    console.log(err)
})
}

function createLike(req,res){
  db.none(
    "INSERT INTO likes (users_id, post_id) VALUES (${users_id}, ${post_id})",
    req.body
  )
  .then(()=>{
    res.status(200).json({
      status : "success",
      message: "like made"
    })
    }).catch(err=>{
      console.log(err)
  })
}

function removeLike (req, res) {
  let likeID = parseInt(req.params.id);
  db.result("DELETE from likes WHERE id=$1", [likeID])
    .then(result => {
      res.status(200).json({
        status: "success",
        message: `Removed like # ${likeID} `
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {getAllLikes,createLike,getPostLikes, removeLike}
