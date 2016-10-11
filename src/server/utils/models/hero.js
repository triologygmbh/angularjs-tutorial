var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
  firstName: String,
  lastName: String,
  alias: String
});

module.exports = mongoose.model('Hero', HeroSchema);