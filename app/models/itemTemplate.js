var mongoose = require('mongoose');

var schema = mongoose.Schema({
  name: String,
  description: String
});

schema.set('autoIndex', App.env !== 'production');

var Model = mongoose.model('ItemTemplate', schema);

module.exports = Model;
