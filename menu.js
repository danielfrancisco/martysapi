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
  con.query("SELECT * FROM menu", function (err, result) {
    data=result
  });

router.get("/menu",function(req,res){
    res.send(data)
    
})

router.post('/menu', (req, res) => {
    let name = String(req.body.data.name)
    let img= String(req.body.data.img)
    let price = req.body.data.price
    let amount =req.body.data.amount
    let values = "("+"'"+name+"'"+","+"'"+img+"'"+","+price+","+amount+")"
    var sql = "INSERT INTO cart (name, img, price, amount) VALUES"+values
    
   con.query(sql, function (err, result) {
    if (err) throw err;
    
  });
    res.end()
});


module.exports = router