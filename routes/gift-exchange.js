const express = require("express")
const router = express.Router()
//const GiftExchange = require("../models/gift-exchange")


router.post('/pairs', async (req, res, next) => {
    const pairs = req.params.names
    //const tuples = await GiftExchange.pairs(names)
    res.status(200).json({ "ping": "pong" })
})

router.post('/traditional', async (req, res, next) => {
    const traditional = req.params.names
    //const formatted = await GiftExchange.traditional(names)
    res.status(200).json({ "ping": "pong" })
})

module.exports = router
