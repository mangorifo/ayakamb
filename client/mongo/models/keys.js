const mongo = require('mongoose');

const Schema = new mongo.Schema({
  Guild: Number,
  SpecialKey: String
});
module.exports = mongo.model('yourdatabasename', Schema);