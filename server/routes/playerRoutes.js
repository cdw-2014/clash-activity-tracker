let router = require('express').Router()
let Player = require('../models/playerModel')

router.get('/', (req, res) => {
    Player.find().then(players => {
        res.json(players)
    })
})

router.get('/:tag', (req, res) => {
    Player.find({ tag: req.params.tag }).then(player => {
        res.json(player)
    })
})

module.exports = router