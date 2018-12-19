const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/database");

function getAllUsers(req,res,next){
  db.any('select * from users')
  .then(result=>{
    res.status(200).json({
      status: 'success',
      data: result
    })
  }).catch((err) =>{
    return next(err)
  })
}

function getSingleUser(req,res,next){
  let userID = parseInt(req.params.id)
  db.one('select * from users WHERE id = $1',[userID])
  .then(result =>{
    res.status(200).json({
      status: 'sucess',
      data: result
    })
  }).catch((err)=>{
    return next (err)
  })
}


function createUser (req, res, next) {
  db.none(
    "INSERT INTO users(name, email, age) VALUES(${name}, ${email}, ${age})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "New user createed"
      });
    })
    .catch(err => {
      return next(err);
    });
};

function removeUser (req, res, next) {
  let userID = parseInt(req.params.id);
  db.result("DELETE from users WHERE id=$1", [userID])
    .then(result => {
      res.status(200).json({
        status: "success",
        message: `Removed user ${result.rowCount} `
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {getAllUsers, getSingleUser, createUser,removeUser}
