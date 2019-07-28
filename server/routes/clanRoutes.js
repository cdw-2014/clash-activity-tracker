const router = require('express').Router()
const Clan = require('../models/clanModel')
const axios = require('axios')

const config = {
    headers: {
        'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA5OGY0OTFlLTdmNGYtNDJkZi04MmNiLWFiOTZjZDdiNjIyZSIsImlhdCI6MTU2NDI4ODQ1Niwic3ViIjoiZGV2ZWxvcGVyL2YxMDNiNzg0LWQ4MzgtOTc0Mi1iYmQ1LWE5NGFjNTEwMmFlNSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjczLjE2OC4xMTguMTM3Il0sInR5cGUiOiJjbGllbnQifV19.uEHBYqgmbpFQwXZG8YLfycO3HfGuJ-2TMXdqQHwM8kjuDSRaqQQVikIOn6GXruHRANSckBt5jhAO_UPbbU2-0Q',
    }
}

router.get('/', (req, res) => {
    Clan.find().then(clans => {
        res.json(clans)
    })
})

router.get('/:tag', (req, res) => {
    Clan.find({ tag: "#" + req.params.tag }).then(clan => {
        res.json(clan)
    })
})

router.get('/signup/tag=:tag&player=:player&pass=:pass', (req, res) => {
    Clan.find({tag: "#" + req.params.tag})
        .then(clans => {
            console.log("clans")
            console.log(clans)
            if(clans.length > 0) {
                res.send("This clan has already been registered! Try logging in as returning user.")
            } else {
                axios.get('https://api.clashofclans.com/v1/clans/%2380jjv80l', config)
                    .then(data => data.data)
                    .then(data => {
                        console.log(data)
                        let found = false
                        data.memberList.map(member => {
                            console.log(member.tag === "#" + req.params.player)
                            if(member.tag === "#" + req.params.player) {
                                found = true
                                Clan.create({
                                    tag: data.tag,
                                    name: data.name,
                                    hash: req.params.pass
                                })
                            }
                        })
                        if(!found) {
                            res.send("You are not a member of this clan!")
                        }
                    })
                    .catch(error => console.log("error"))
            }
        })  
})

router.put('/tag=:tag&discord=:discord', (req, res) => {
    const tag = "#" + req.params.tag
    Clan.updateOne({ "tag": tag },
        {
            $set: {
                "discord" : req.params.discord
            }
        })
        .catch(err => console.error(err))
})

module.exports = router