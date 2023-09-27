const express = require('express'); // import express from 'express'
const router = express.Router(); // create express router

// import controllers
const {likePost, unlikePost} = require('../controllers/likeController');
const {createPost, getAllPosts, getPostById, editPost, deletePost} = require('../controllers/postController');
const {createComment, editComment, deleteComment} = require('../controllers/commentController');

// define routes
router.post('/createPost', createPost);
router.get('/getPosts', getAllPosts);
router.get('/getPostById/:id', getPostById);
router.put('/editPost', editPost);
router.post('/deletePost', deletePost);
router.post('/like', likePost);
router.post('/unlike', unlikePost);
router.post('/comment', createComment);
router.put('/editComment', editComment);
router.post('/deleteComment', deleteComment);

module.exports = router; // export router