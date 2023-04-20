const express = require('express')
const router = express.Router()
const mysql = require("mysql");
const { route } = require('./menu');

var con = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: "danielelmejor1",
    database:"martys",

  });
  
  let data =""
  con.connect();
  con.query("SELECT * FROM cart",function(err,result){
    data=result
  })



router.get("/cart",function(req,res){
  con.query("SELECT * FROM cart",function(err,result){
    data=result
    res.send(data)
  })
  
    
})

router.post("/cart",function(req,res){
  let name = String("'"+req.body.item.name+"'")
  
  con.query("DELETE FROM cart WHERE name="+name,function(err,result){
           
  })

  
})


module.exports = router