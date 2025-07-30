const express = require('express'); 
const router = express.Router(); 
const UserController = require('../controllers/userController'); 
router.post('/register', UserController.registerUser); 
router.post('/login', UserController.loginUser); 
router.get('/:id', UserController.getUserById); 
router.put('/:id', UserController.updateUser); 
router.delete('/:id', UserController.deleteUser); 
router.get('/', UserController.getAllUsers); 
module.exports = router;
// This file defines the routes for user-related operations, including registration, login, fetching by ID, updating, deleting, and listing all users. Each route is linked to a corresponding method in the UserController.