// import mongoose module
const mongoose = require('mongoose');

// While creating a comment, we need to know which post it belongs to.
// So we will create a reference to the Post it belongs to
// We will use the postID to refer to the post it belongs to


// Comment should have this properties:
// postID: reference to the Post model. This is the post it belongs to
// user: the user who created the comment. 
// body: the comment itself

// create a schema
const commentSchema = new mongoose.Schema({
    // in which post the comment belongs to
    postID: {
        type: mongoose.Schema.Types.ObjectId, // ID of the post
        ref: 'Post' // reference to Post model
    },
    // the user who created the comment
    user: {
        type: String,
        required: true
    },
    // the comment itself
    body:{
        type: String,
        required: true
    }
});

// export the model
module.exports = mongoose.model('Comment', commentSchema);