const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Snippet', snippetSchema);
