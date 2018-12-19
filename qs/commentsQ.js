const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/database");

function getAllComments (req,res){
  db.any('SELECT * FROM comments')
  .then(result=>{
    res.status(200).json({
      status: 'you did it',
      Comments: result
    }).catch(err=>{
      console.log(err)
    })
  })
}

function getPostComments (req,res){
  let postID = parseInt(req.params.id)
  db.any('SELECT * FROM comments WHERE post_id = $1', [postID])
  .then(result=>{
    res.status(200).json({
      status: ' success ',
      Comments: result
    })
  }).catch(err=>{
    console.log(err)
})
}

function createComment(req,res){
  db.none(
    "INSERT INTO comments (users_id, post_id) VALUES (${users_id}, ${post_id})",
    req.body
  )
  .then(()=>{
    res.status(200).json({
      status : "success",
      message: "Comment made"
    })
    }).catch(err=>{
      console.log(err)
  })
}

function updateComments (req, res){
  db.none(
    "UPDATE comments SET users_id=${users_id},post_id=${post_id}, body = ${body}  WHERE id=${id}",
    {
      users_id: parseInt(req.body.users_id),
      post_id: parseInt(req.body.post.id),
      body: req.body.body,
      id: parseInt(req.params.id)
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        messsage: "Comment Updated "
      });
    })
    .catch(err => {
       console.log(err);
    });
};


function removeComment (req, res) {
  let commentID = parseInt(req.params.id);
  db.result("DELETE from comments WHERE id=$1", [commentID])
    .then(result => {
      res.status(200).json({
        status: "success",
        message: `Removed Comment # ${commentID}`
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {getAllComments,createComment,getPostComments,updateComments, removeComment}
