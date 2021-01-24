const mongoose = require('mongoose');

const student_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  woking: {
    type: Boolean,
    required: true,
  },
  english_level: {
    type: String,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
  number_of_jobs: {
    type: Number,
    required: true,
  },
  technologies_used_in_work: {
    type: Array,
    required: false,
  },
  languages_used_in_work: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model('students', student_schema);
