var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partySchema = new Schema({
  partyKind: { type: String, required: true },
  originKind: { type: String, required: true },
  originId: String,
  status: { type: String, required: true },
  thumbUrl: String,
  contact: {
    personName: String,
    address: String,
    phone: String,
    email: String,
    url: String
  },
  en_name: String,
  ru_name: String,
  en_description: String,
  ru_description: String,
  tags: [ { type: String }]
});

var Party = mongoose.model('Party', partySchema);

module.exports = Party;