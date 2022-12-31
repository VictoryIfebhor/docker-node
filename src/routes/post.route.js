const express = require("express");
const {
  createPost,
  getAllPosts,
  updatePost,
  getSinglePost,
} = require("../controllers/post.controller");

const router = express.Router();

router.route("/").post(createPost).get(getAllPosts);
router.route("/:postId").patch(updatePost).get(getSinglePost);

module.exports = router;
