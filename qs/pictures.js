const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/database");

function getAllPictures (req,res){
  db.any('SELECT * FROM pictures')
  .then(result=>{
    res.status(200).json({
      status: 'you did it',
      picture: result
    }).catch(err=>{
      console.log(err)
    })
  })
}

function getAPictures (req,res){
  let pictureID = req.params.id
  db.one('SELECT * FROM pictures WHERE ID = $1',[pictureID])
  .then(result=>{
    res.status(200).json({
      status: 'sucess',
      picture: result
    }).catch(err=>{
      console.log(err)
    })
  })
}

function createPictures(req,res){
  db.none(
    "INSERT INTO Pictures (albums_id, url) VALUES (${albums_id},${url})",
    req.body
  )
  .then(()=>{
    res.status(200).json({
      status : "success",
      message: "picture made"
    })
    }).catch(err=>{
      console.log(err)
  })
}

function deletPicture (req, res){
  let pictureID = parseInt(req.params.id);
  db.result("DELETE from pictures WHERE id=$1", [pictureID])
  .then(result =>{
    res.status(200).json({
      status: 'sucess',
      message: `Picture # ${pictureID} has been deleted`
    }).catch(err=>{
      console.log(err)
    })
  })
}


module.exports = {getAllPictures,getAPictures,createPictures,deletPicture}
