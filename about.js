const express = require('express')
const router = express.Router()
const mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: "danielelmejor1",
    database:"martys",

  });
  let data =""
  
  con.connect();
  
  con.query("SELECT * FROM about",function(err,result){
    data=result
  })

router.get("/about",function(req,res){
    
    res.send(data)
})

module.exports = router