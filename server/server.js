const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const playerRoutes = require('./routes/playerRoutes')
const scanRoutes = require('./routes/scanRoutes')
const clanRoutes = require('./routes/clanRoutes')
require('dotenv').config()
const axios = require('axios')

const app = express()
const port = process.env.PORT || 3001

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}))
app.use(bodyParser.json({limit: '500mb'}))


app.use('/players', playerRoutes)
app.use('/scans', scanRoutes)
app.use('/clans', clanRoutes)

mongoose.connect('mongodb+srv://cdw2014:'+process.env.DB_PASSWORD+'@clashtrack-hfv12.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const Discord = require('discord.js')
const { prefix, token } = require('./discordConfig.json')
const client = new Discord.Client()
client.once('ready', () => {
    console.log('Discord Ready!')
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}clan`)) {
        let tag = message.content.substr(6).toUpperCase()
        let discord = message.guild.id.toString()
        let url = 'http://localhost:3001/clans/tag=' + tag + "&discord=" + discord
        axios({
            method: 'put',
            url: url
        })
        message.channel.send(`The clan with the clan tag #${tag} was successfully linked to this Discord server!`)
    }
})

client.login(token)

app.listen(port, () => console.log(`Listening on port ${port}`))


