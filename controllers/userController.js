const axios = require('axios');
const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = req.body;
    await User.create(user);
    res.json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};





