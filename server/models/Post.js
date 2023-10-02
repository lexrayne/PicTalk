const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  contents: {
    type: String,
    required: true,
  }
});

const Post = model('Post', postSchema);

module.exports = Post;