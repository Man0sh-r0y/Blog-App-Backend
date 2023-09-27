// import Post model
const Post = require('../models/postModel');

// create post
exports.createPost = async (req, res) => {
    try {

        // fetch the data fron request body
        const { user,title, body } = req.body;

        // create a new post
        const newPost = await Post.create({ user, title, body });

        // send response
        res.status(201).json({
            post: newPost
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Error While Creating post" ,
            error: err.message
        });
    }
};

// get all posts
exports.getAllPosts = async (req, res) => {
    try {

        // fetch all posts
        const posts = await Post.find().populate('comments').populate('likes').exec();
        // .populate(): this method is used here to fill the comments and likes field with actual comment documents.
        // In MongoDB, you often store references to related documents (in this case, comment and like IDs),
        // populate() is used to fetch and replace those references with the actual documents they point to.
        // So, posts will contain an array of comment and like documents instead of just comment and like IDs.
        // .exec(): This method is used to execute the entire query. It's often used at the end of Mongoose queries to ensure they are executed.

        // send response
        res.status(200).json({
            message: "All posts fetched successfully",
            posts: posts
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Error While Getting posts" ,
            error: err.message
        });
    }
};

// get a post by id
exports.getPostById = async(req, res) => {
    try{

        // find the post
        const post = await Post.findById(req.params.id).populate('comments').populate('likes').exec();
        // .populate() method is used here to fill the comments and likes field with actual comment documents.

        // send response
        res.status(200).json({
            message: "Post fetched Successfully",
            post: post
        });

    } catch(err) {
        return res.status(500).json({
            message: "Error While Editing post" ,
            error: err.message
        });
    }
}

// edit post
exports.editPost = async (req, res) => {
    try {
        // fetch the data from req body
        const { postID, title, body } = req.body;

        // find the post by ID and update
        const post = await Post.findByIdAndUpdate( postID, { title, body} , {new: true});

        // send response
        res.status(200).json({
            message: "Post Updated Successfully",
            post: post
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Error While Editing post" ,
            error: err.message
        });
    }
};

// delete post
exports.deletePost = async(req, res) => {
    try{
        // fetch the data from req body
        const { postID } = req.body;

        // find the post by ID and delete
        await Post.findByIdAndDelete(postID);

        // send response
        res.status(200).json({
            message: "Post Deleted Successfully",
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error While Deleting post" ,
            error: err.message
        });
    }
};