/**
 * Créer ici le model pour post
 * 
 * Un post doit avoir au minimum : 
 * un message, 
 * une date, 
 * un userId (auteur du post) 
 * un postId
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Posts',
    required: true,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
