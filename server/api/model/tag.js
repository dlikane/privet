var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  en_tag: String,
  ru_tag: String,
  en_alt_tags: [{
    text: String
  }],
  ru_alt_tags: [{
    text: String
  }],
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;