let router = require('express').Router()
let Scan = require('../models/scanModel')

router.get('/', (req, res) => {
    Scan.find().then(scans => {
        res.json(scans)
    })
})

router.get('/:tag', (req, res) => {
    Scan.find({ tag: req.params.tag }).then(scan => {
        res.json(scan)
    })
})

module.exports = router