var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  tag: [ {
    locale: String,
    text: String
  }],
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;