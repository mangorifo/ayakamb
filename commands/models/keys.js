const mongo = require('mongoose');

const nSchemaMsgMark = new mongo.Schema({
  keyowner: String,
  keytitle: String,
  channel: String,
  Name: String,
  StoreId: String,
  UserName: String,
  HasNitro: String,
  GuildName: String,
});
module.exports = mongo.model('mark', nSchemaMsgMark);