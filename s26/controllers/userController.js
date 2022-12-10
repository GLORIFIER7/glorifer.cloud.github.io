
const User = require("./../models/User");
const Course = require("./../models/Course");

const bcrypt = require("bcrypt");
const auth = require("./../auth");

module.exports.checkEmail = (reqBody) => {
	const {email} = reqBody 

	return User.findOne({email: email}).then( (result, error) => {
		// console.log(email)
		if(result != null){
			return `Email already exists`
		} else {
			console.log(result)	//null bec email does not exist
			if(result == null){
				return true
			} else {
				return error 
			}
		}
	})
}


module.exports.register = (reqBody) => {

	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
		mobileNo: reqBody.mobileNo
	})
	//save()
	return newUser.save().then( (result, error) => {
		if(result){
			return true
		} else {
			return error
		}
	})
}

module.exports.getAllUsers = () => {

	return User.find().then( (result, error) => {
		if(result){
			return result
		} else {
			return error
		}
	})
}


module.exports.login = (reqBody) => {
	const {email, password} = reqBody;

	return User.findOne({email: email}).then( (result, error) => {

		if(result == null){
			return false
		} else {
			//what if we found the email and is existing, but the pw is incorrect
			let isPasswordCorrect = bcrypt.compareSync(password, result.password)

			if(isPasswordCorrect == true){
				return {access: auth.createAccessToken(result)}
			} else {
				return false
			}
		}
	})
}

module.exports.getProfile = (data) => {
	// console.log(data)
	const {id} = data

	return User.findById(id).then((result, err) => {
		// console.log(result)

		if(result != null){
			result.password = "";
			return result
		} else {
			return false
		}
	})
}

module.exports.enroll = async (data) => {
	const {userId, courseId} = data


	//look for matching document of a user
	const userEnroll = await User.findById(userId).then( (result, err) => {
		if(err){
			return err
		} else {
			// console.log(result)
			result.enrollments.push({courseId:courseId});

			return result.save().then( result => {
				return true
			})
		}

	})

	//look for matching document of a user
	const courseEnroll = await Course.findById(courseId).then( (result, err) => {
		if(err){
			return err
		} else {

			result.enrollments.push({userId: userId})

			return result.save().then( result => {
				return true
			})
		}
	})

	//to return only one value for the function enroll

	if(userEnroll && courseEnroll){
		return true
	} else {
		return false
	}
}

module.exports.newEnroll = (data) => {
	const {userId, courseId} = data
	// console.log(courseId)

	return User.findById(userId).then( (result, err) => {

			// console.log(`user document:`,result)
		result.enrollments.push({courseId: courseId})

		if(result){
			console.log(result.enrollments.length)

			if(result.enrollments.length != 0){

				return result.enrollments.find( element => {

					console.log(element)
					// console.log(courseId)
					console.log(element.courseId)
					// console.log(element.courseId == courseId)


					if(element.courseId == courseId){
						console.log("if code block")
						return false
					} else {
						console.log("else code block")
						return result.save().then(result => {
							return true
						})
					}
				})
			}


		} else {
			return error
		}
	})
}