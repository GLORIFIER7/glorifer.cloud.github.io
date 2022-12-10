
const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseControllers")

const auth = require("./../auth");

//create a course
router.post("/create-course", auth.verify, (req, res) => {
	courseController.createCourse(req.body).then(result => res.send(result))
})


//retrieving all courses
router.get("/", (req, res) => {
	courseController.getAllCourses().then(result => res.send(result))
})


//retrieving only active courses
router.get("/active-courses", auth.verify, (req, res) => {
	courseController.getActiveCourses().then(result => res.send(result))
})

//get a specific course using findOne()
router.get("/specific-course", auth.verify, (req, res) => {

	// console.log(req.body)	//object

	courseController.getSpecificCourse(req.body.courseName).then( result => res.send(result))
})


//get specific course using findById()
router.get("/:courseId", auth.verify, (req, res) => {

	// console.log(req.params)	//{ courseId: '61979f60f63f4531cd77b395' }
	let paramsId = req.params.courseId
	courseController.getCourseById(paramsId).then(result => res.send(result))
})

//update isActive status of the course using findOneAndUpdate()
	//update isActive status to false
router.put("/archive", auth.verify, (req, res) => {

	courseController.archiveCourse(req.body.courseName).then( result => res.send(result))
})

	//update isActive status to true
router.put("/unarchive", auth.verify, (req, res) => {

	courseController.unarchiveCourse(req.body.courseName).then( result => res.send(result))
})


//update isActive status of the course using findByIdAndUpdate()
	//update isActive status to false
router.put("/:courseId/archive", auth.verify, (req, res) => {

	courseController.archiveCourseById(req.params.courseId).then(result => res.send(result))
})

	//update isActive status to true
router.put("/:courseId/unarchive", auth.verify, (req, res) => {

	courseController.unarchiveCourseById(req.params.courseId).then( result => res.send(result))
})


//delete course using findOneAndDelete()
router.delete("/delete-course", auth.verify, (req, res) => {

	courseController.deleteCourse(req.body.courseName).then(result => res.send(result))
})

//delete course using findByIdAndDelete()
router.delete("/:courseId/delete-course", auth.verify, (req, res) => {

	courseController.deleteCourseById(req.params.courseId).then(result => res.send(result))
})


router.put("/:courseId/edit", auth.verify, (req, res) => {

	courseController.editCourse(req.params.courseId, req.body).then( result => res.send(result))
})



module.exports = router;