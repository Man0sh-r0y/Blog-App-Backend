// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// While creating a like, we need to know which post it belongs to.
// So we will create a reference to the Post it belongs to
// We will use the postID to refer to the post it belongs to

// Like should have this properties:
// postID: reference to the Post model. This is the post it belongs to
// user: the user who created the like.

// create a schema
const likeSchema = new mongoose.Schema({
    // in which post the Like belongs to
    postID: {
        type: mongoose.Schema.Types.ObjectId, // ID of the post
        ref: 'Post' // reference to Post model
    },
    // the user who created the like
    user: {
        type: String,
        required: true
    }
});

// export the model
module.exports = mongoose.model('Like', likeSchema);