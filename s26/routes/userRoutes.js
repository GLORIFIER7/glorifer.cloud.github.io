const express = require('express');
const router = express.Router();

//import the userController
const userController = require('../controllers/userController');

//check if email exists
router.post('/email-exists', (req,res) => {
    userController.checkEmail(req.body).then(result => res.send(result));
})

//register a user
//http://localhost:4000/api/users
router.post('/register', (req,res) => {
    userController.register(req.body).then(result => res.send(result));
})

//get all users
router.get('/', (req,res) => {
    userController.getAllUsers().then( result => res.send(result));
})

//user login
router.post('/login', (req, res) => {
    userController.login(req.body).then(result => res.send(result));
})

//retrieving user information
router.post('/details', (req,res) => {
    userController.getProfile().then (result => res.send(result));
})

//enrollments
router.post('/enroll', (req,res) => {
    userController.enroll().then (result => res.send(result));
})

router.post('/new-enroll', (req, res) => {
    userController.newEnroll().then(result => res.send(result));
})

module.exports = router;