const mongo = require('mongoose');

const nSchemaIPRandom = new mongo.Schema({
  keyowner: String,
  keytitle: String,
  Name: String,
  Generated: String,
  Id: String,
  Tag: String,
});
module.exports = mongo.model('randomip command usage', nSchemaIPRandom);