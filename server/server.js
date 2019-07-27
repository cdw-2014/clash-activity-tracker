
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const playerRoutes = require('./routes/playerRoutes')
const activityRoutes = require('./routes/activityRoutes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors());
app.use(bodyParser.json({limit: '500mb'}))

app.use('/players', playerRoutes)
app.use('/activity', activityRoutes)

mongoose.connect('mongodb+srv://cdw2014:'+process.env.DB_PASSWORD+'@clashtrack-hfv12.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

