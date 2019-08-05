const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  username: { type: String },
  title: { type: String },
  message: { type: String },
  img: { type: String },
  comment: { type: String }
}, {timestamps: true}
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
