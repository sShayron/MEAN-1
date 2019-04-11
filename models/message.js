var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var messageSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Schema.Types.Date
  }
});

messageSchema.post('save', function (doc, next) {
  doc.populate('user').execPopulate().then(function () {
    next();
  });
});

messageSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Message', messageSchema);