const mongoose = require('mongoose');

const vacant_schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  vacacine_url: {
    type: String,
    required: true,
  },
  required_technologies: {
    type: Array,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
  english_level: {
    type: null || String,
    required: true,
  },
  remote: {
    type: Boolean,
    required: true,
  },
  salary_range: {
    type: Array || undefined,
    required: true,
  },
});

module.exports = mongoose.model('vacants', vacant_schema);
