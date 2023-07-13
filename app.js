const express = require("express")
const PORT = process.env.PORT || 3030;
const cors = require("cors")
const bodyParser = require("body-parser")
const home = require('./home')
const menu = require('./menu')
const about = require('./about')
const cart = require('./cart')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',home)
app.use('/',menu)
app.use('/',about)
app.use('/',cart)

app.listen(PORT,function(){
    console.log("listening on port "+PORT)
})