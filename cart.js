const express = require('express')
const router = express.Router()
const { route } = require('./menu');

require('dotenv').config()

const mysql = require('mysql2')
const con = mysql.createConnection(process.env.DATABASE_URL)
  
  let data =""
  con.connect();
  con.query("SELECT * FROM cart",function(err,result){
    data=result
  })

  router.get("/cart",function(req,res){
    res.set('Cache-Control', 'no-store')
    
    con.query("SELECT * FROM cart",function(err,result){
      let items
      items=result
      let coun=0
      for(let i in items){
        coun = parseInt(coun)+parseInt(items[i].amount)
        
      }
      
      res.send({items:items,coun:coun})
      
    })
    
    
  })

router.post("/cart",function(req,res){
    
    if(req.body.item!==undefined){
      let removeName = String("'"+req.body.item.name+"'")
      con.query("DELETE FROM cart WHERE name="+removeName,function(err,result){
    })
    }else{
    let name = "'"+String(req.body.amountTem[0].name)+"'"
    let amount = req.body.amountTem[0].amount
    let sql="UPDATE cart SET amount = "+ amount +" WHERE name = "+name

    con.query(sql, function (err, result) {
      if (err) throw err;
      
    });
  }
  res.end()
})


module.exports = router