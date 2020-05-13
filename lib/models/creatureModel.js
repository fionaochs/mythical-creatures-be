const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  hobby: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true
  },
  weapon: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Creature', schema);


