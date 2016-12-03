var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partySchema = new Schema({
  party_kind: { type: String, required: true },
  origin_kind: { type: String, required: true },
  origin_id: String,
  status: { type: String, required: true },
  thumb_url: String,
  contact: {
    personName: String,
    address: String,
    phone: String,
    email: String,
    url: String
  },
  name: [ {
    locale: String,
    text: String
  }],
  description: [ {
    locale: String,
    text: String
  }],
  tags: [ { type: String }]
});

var Party = mongoose.model('Party', partySchema);

module.exports = Party;