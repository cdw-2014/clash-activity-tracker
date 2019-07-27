var mongoose = require('mongoose')

var Schema = mongoose.Schema

var playerSchema = new Schema({
  tag: { type: String, required: true },
  name: { type: String, required: true },
  score: { type: Number, required: false },
  clan: { type: String, required: false },
  rank: { type: String, required: false },
  townHall: { type: String, required: false }
})

module.exports = mongoose.model('Player', playerSchema );
