// import mongoose from 'mongoose'
const mongoose = require('mongoose');

// The Post model should have this properties:
// user: the user who created the post.
// title: the title of the post.
// body: the post itself.
// createdAt: the date the post was created.
// likes: the likes the post has.
// comments: the comments the post has.

// create a schema
const postSchema = new mongoose.Schema({
    // the user who created the post
    user: {
        type: String,
        required: true
    },
    // the title of the post
    title:{
        type: String,
        required: true
    },
    // the post itself
    body:{
        type: String,
        required: true
    },
    // the date the post was created
    createdAt:{
        type: Date,
        default: Date.now()
    },
    // the likes the post has
    likes: [{
        type: mongoose.Schema.Types.ObjectId, // ID of the like
        ref: 'Like' // reference to Like model
    }],
    // the comments the post has
    comments: [{
        type: mongoose.Schema.Types.ObjectId, // ID of the comment
        ref: 'Comment' // reference to Comment model
    }]
});

// export the model
module.exports = mongoose.model('Post', postSchema);