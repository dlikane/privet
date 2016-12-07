var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  leadId: String,
  status: { type: String, required: true },
  originKind: { type: String, required: true },
  originId: String,
  originLocale: String,
  originImg: String,
  description: [ {
    locale: String,
    text: String
  }],
  startTime: Date,
  postedTime: Date,
  duration: String,
  location: String,
  parties: [ { type: String }],
  tags: [ { type: String }]
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;