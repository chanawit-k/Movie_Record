const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  yearRelease: {
    type: String,
    required: true
  },
  rate: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('movie', MovieSchema);