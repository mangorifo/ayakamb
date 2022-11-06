const mongo = require('mongoose');

const nSchemaMsgMark = new mongo.Schema({
  keyowner: String,
  keymadeog: String,
  channel: String,
  Name: String,
  StoreId: String,
  UserName: String,
  HasNitro: String,
  GuildName: String,
  AcMadeAt: String,
  AvatarImg: String,
  StoredAt: String,
});
module.exports = mongo.model('mark', nSchemaMsgMark);