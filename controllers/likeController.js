// import models
const Post = require('../models/postModel');
const Like = require('../models/likeModel');

// create a like
exports.likePost = async (req, res) => {
    try {

        // fetch the data fron request body
        const { postID, user } = req.body;

        // create a new like
        const newLike = await Like.create({
            postID,
            user
        });

        // find the post (the like belongs to) by ID 
        // then add the new like and 
        // update the likes array
        const post = await Post.findById(postID).populate('likes').exec();
        post.likes.push(newLike);
        await post.save();

        // .populate(): this method is used here to fill the likes field with actual like documents. 
        // In MongoDB, you often store references to related documents (in this case, like IDs), 
        // populate() is used to fetch and replace those references with the actual documents they point to. 
        // So, updatedPost will contain an array of like documents instead of just like IDs.
        // .exec(): This method is used to execute the entire query. It's often used at the end of Mongoose queries to ensure they are executed.

        // send response
        res.status(201).json({
            post: post
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Error While Creating like" ,
            error: err.message
        });
    }
};

// Unlike Post
exports.unlikePost = async (req, res) => {
    try {

        // fetch the data fron request body
        const { postID, user } = req.body;

        // find the like by postID and user
        const like = await Like.findOne({ postID, user });

        // find the post (the like belongs to) by ID 
        // then remove the like and 
        // update the likes array
        const post = await Post.findById(postID);
        post.likes.pull(like);
        await post.save();

        // delete the like
        await Like.findByIdAndDelete(like._id);

        // send response
        res.status(200).json({
            message: "Post Unliked Successfully"
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Error While Unliking Post",
            error: err.message
        });
    }
};