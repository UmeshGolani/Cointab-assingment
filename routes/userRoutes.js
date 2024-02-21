const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/all-users', userController.getAllUsers);
router.post('/add-user', userController.addUser);

module.exports = router;
