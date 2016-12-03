var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  lead_id: String,
  status: { type: String, required: true },
  origin_kind: { type: String, required: true },
  origin_id: String,
  origin_locale: String,
  description: [ {
    locale: String,
    text: String
  }],
  start_time: Date,
  posted_time: Date,
  duration: String,
  location: String,
  parties: [ { type: String }],
  tags: [ { type: String }]
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;