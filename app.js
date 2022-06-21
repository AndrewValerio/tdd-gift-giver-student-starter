const express = require("express")
const app = express()
const morgan = require('morgan')
var bodyParser = require('body-parser')
const giftExchangeRouter = require("./routes/gift-exchange")
//const GiftExchange = require("../models/gift-exchange")

app.use(morgan('tiny'))
app.use("/gift-exchange", giftExchangeRouter)

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({ "ping" : "pong" })
  })


module.exports = app