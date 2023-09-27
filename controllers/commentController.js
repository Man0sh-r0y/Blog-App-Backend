// import the model
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');


// create a comment
exports.createComment = async (req, res) => {
    try {

        // fetch the data fron request body
        const {postID, user, body } = req.body;

        // create a new comment
        const newComment = await Comment.create({
            postID,
            user,
            body
        });

        // find the post (the comment belongs to) by ID 
        // then add the new comment and 
        // update the comments array
        const post = await Post.findById(postID).populate('comments').exec();
        post.comments.push(newComment);
        await post.save();

        // .populate(): this method is used here to fill the comments field with actual comment documents. 
        // In MongoDB, you often store references to related documents (in this case, comment IDs), 
        // populate() is used to fetch and replace those references with the actual documents they point to. 
        // So, updatedPost will contain an array of comment documents instead of just comment IDs.
        // .exec(): This method is used to execute the entire query. It's often used at the end of Mongoose queries to ensure they are executed.

        // send response
        res.status(201).json({
            post: post
        });

        
    } catch (err) {
        return res.status(500).json({
            message: "Error While Creating comment" ,
            error: err.message
        });
    }
};

// edit comment
exports.editComment = async (req, res) => {
    try {

        // fetch the data fron request body
        const { postID, user, body } = req.body;

        // find the comment by postID and user
        // const comment = await Comment.findOne({ postID, user });
        const comment = await Comment.findOneAndUpdate({postID, user}, {body}, {new: true});

        // send response
        res.status(201).json({
            message: "Comment Updated Successfully",
            comment: comment
        });

        
    } catch (err) {
        return res.status(500).json({
            message: "Error While Updating comment" ,
            error: err.message
        });
    }
};

// delete comment
exports.deleteComment = async(req, res) => {
    try{
        // fetch the data from req body
        const { postID, user } = req.body;

        // find the comment by postID and user
        const comment = await Comment.findOne({ postID, user });

        // find the post (the comment belongs to) by ID 
        // then remove the comment and 
        // update the comment array
        const post = await Post.findById(postID);
        post.comments.pull(comment);
        await post.save();

        // delete the comment
        await Comment.findByIdAndDelete(comment._id);

        // send response
        res.status(200).json({
            message: "Comment Deleted Successfully"
        });

    } catch {
        return res.status(500).json({
            message: "Error While Deleting comment",
            error: err.message
        });
    }
}