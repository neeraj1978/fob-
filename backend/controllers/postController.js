const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const post = await Post.create({ content, author: req.user });
    res.status(201).json(post);
  } catch {
    res.status(500).json({ message: 'Error creating post' });
  }
};

exports.getFeed = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(posts);
  } catch {
    res.status(500).json({ message: 'Error fetching feed' });
  }
};
