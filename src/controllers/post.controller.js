const { response } = require("express");
const Post = require("../models/post.model");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();

  return res.status(200).json({ count: posts.length, posts });
};

exports.getSinglePost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);

  return res.status(200).json({ post });
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title: title, content: content });

  return res.status(201).json({ post });
};

exports.updatePost = async (req, res, next) => {
  const { postId } = req.params;
  const { title, content } = req.body;
  const post = await Post.findByIdAndUpdate(
    postId,
    { title, content },
    { new: true, runValidators: true }
  );

  return res.status(200).json(post);
};
