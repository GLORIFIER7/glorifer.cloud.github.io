
const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");
const auth = require("./../auth");

//check if email exists 
router.post("/email-exists", (req, res) => {

	userController.checkEmail(req.body).then( result => res.send(result))
})

//register a user
// http://localhost:4000/api/users
router.post("/register", (req, res) => {

	userController.register(req.body).then( result => res.send(result))
})

router.get("/", (req, res) => {

	userController.getAllUsers().then( result => res.send(result))
})


router.post("/login", (req, res) => {

	userController.login(req.body).then(result => res.send(result))
})

//retrieve user information
router.get("/details", auth.verify, (req, res) => {

	let userData = auth.decode(req.headers.authorization)
	// console.log(userData)

	userController.getProfile(userData).then(result => res.send(result))
})

//enrollments
router.post("/enroll",async (req, res) => {

	let data = {
		userId: auth.decode(req.headers.authorization).id,
		courseId: req.body.courseId
	}

	return userController.enroll(data).then(result => res.send(result))
})

router.post("/new-enroll", auth.verify, (req, res) => {

	let data = {
		userId: auth.decode(req.headers.authorization).id,
		courseId: req.body.courseId
	}

	userController.newEnroll(data).then(result => res.send(result))
})




module.exports = router;