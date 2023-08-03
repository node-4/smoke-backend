const PostModel = require('../model/post');
const activity = require('../model/activity');
exports.createPost = async (req, res) => {
  try {
    if (req.files['docs'] != (null || undefined)) {
      let docs = req.files['docs'];
      req.body.docs = docs[0].path;
    }
    if (req.files['image'] != (null || undefined)) {
      let image = req.files['image'];
      req.body.image = image[0].path;
    }
    req.body.userId = req.user._id;
    const newPost = new PostModel(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the post' });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find().populate({ path: 'userId likeUser Comment.user', select: 'firstName lastName profileImage' });
    res.status(200).json({ msg: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the posts' });
  }
};
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findById(id).populate({ path: 'userId likeUser Comment.user', select: 'firstName lastName profileImage' });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ msg: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the post' });
  }
};
exports.getAllPostUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await PostModel.find({ userId }).sort({ date: -1 });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ totalpost: post.length, msg: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the post' });
  }
};
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { image_vedio, desc, userId } = req.body;

    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { image_vedio, desc, userId },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the post' });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await PostModel.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the post' });
  }
};
exports.addLike = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    } else {
      if (post.likeUser.includes(user)) {
        return res.status(400).json({ error: 'User has already liked the post' });
      }
      const update = await PostModel.findByIdAndUpdate({ _id: post._id }, { $push: { likeUser: user }, $set: { likeCount: post.likeCount + 1 } }, { new: true });
      if (update) {
        if ((post.userId).toString() == user) {
          res.status(200).json({ status: 200, message: "like add successfully", data: update });
        } else {
          let obj = { userId: post.userId, otherUserId: user, description: "User like your post.", logType: "Like", }
          const savedFriendRequest = await activity.create(obj);
          res.status(200).json({ status: 200, message: "like add successfully", data: update });
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the like' });
  }
};
exports.getLikeCount = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await PostModel.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    } else {
      const likeCount = post.likeCount;
      res.status(200).json({ count: likeCount });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the like count' });
  }
}
exports.addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { user, comment } = req.body;
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    } else {
      let obj = {
        user: user,
        Comment: comment,
      }
      const update = await PostModel.findByIdAndUpdate({ _id: post._id }, { $push: { Comment: obj }, $set: { commentCount: post.commentCount + 1 } }, { new: true });
      if (update) {
        res.status(200).json({ status: 200, message: "Comment add successfully", data: update });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the comment' });
  }
};
exports.getAllActivity = async (req, res) => {
  try {
    const post = await activity.find({ userId: req.user._id, hide: false }).populate('userId otherUserId');
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ msg: "Data found successfully", data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the post' });
  }
};