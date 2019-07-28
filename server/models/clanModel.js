var mongoose = require('mongoose')

var Schema = mongoose.Schema

var clanSchema = new Schema({
  tag: { type: String, required: true },
  name: { type: String, required: true },
  hash: { type: String, required: false },
  discord: { type: String, required: false }
})

module.exports = mongoose.model('Clan', clanSchema );
