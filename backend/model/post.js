const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
  },

  primaryText: {
    type: String,
    required: true,
  },

  headline: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  CTA: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("post", postSchema);
