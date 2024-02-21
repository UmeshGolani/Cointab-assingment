const Post = require('../models/post');

exports.getPostsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.findAll({ where: { userId } });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.bulkAddPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = req.body;
    await Post.bulkCreate(posts.map(post => ({ ...post, userId })));
    res.json({ message: 'Posts added successfully' });
  } catch (error) {
    console.error('Error adding posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


