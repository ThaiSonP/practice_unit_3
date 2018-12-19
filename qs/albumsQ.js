const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/database");

function getAllAlbums (req,res){
  db.any('SELECT * FROM albums')
  .then(result=>{
    res.status(200).json({
      status: 'you did it',
      albums: result
    }).catch(err=>{
      console.log(err)
    })
  })
}

function createAlbum(req,res){
  db.none(
    "INSERT INTO albums (users_id) VALUES (${users_id})",
    req.body
  )
  .then(()=>{
    res.status(200).json({
      status : "success",
      message: "album made"
    })
    }).catch(err=>{
      console.log(err)
  })
}


module.exports = {getAllAlbums,createAlbum}
