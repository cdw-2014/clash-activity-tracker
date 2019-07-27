var mongoose = require('mongoose')

var Schema = mongoose.Schema

var activitySchema = new Schema({
  tag: { type: String, required: true },
  date: { type: Date, required: true },
  isOriginal: { type: Boolean, required: true },
  donations: { type: Number, required: false },
  received: { type: Number, required: false },
  warStars: { type: Number, required: false },
  attacksWon: { type: Number, required: false },
  clanGames: { type: Number, required: false },
  lootEarned: { type: Number, required: false },
})

module.exports = mongoose.model('Activity', playerSchema );
