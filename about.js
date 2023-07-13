const express = require('express')
const router = express.Router()
require('dotenv').config()

const mysql = require('mysql2')
const con = mysql.createConnection(process.env.DATABASE_URL)

  let data =""
  
  con.connect();
  
  con.query("SELECT * FROM about",function(err,result){
    data=result
  })

router.get("/about",function(req,res){
    
    res.send(data)
})

module.exports = router