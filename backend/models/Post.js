const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'General',
    },
    author: {
      type: String,
      default: 'Uns Yaseen',
    },
  },
  { timestamps: true } // createdAt aur updatedAt automatically add ho jayenge
);

module.exports = mongoose.model('Post', postSchema);