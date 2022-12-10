//jsonwebtoken
	//sign
	//verify
	//decode


const jwt = require("jsonwebtoken")
const secret = "CourseBookingAPI";

module.exports.createAccessToken = (user) => {
	const data = {
		id: user._id, 
		email: user.email,
		isAdmin: user.isAdmin
	}

	return jwt.sign(data, secret, {});
//.sign(<data>, <secret_key>, {})
}



module.exports.verify = (req, res, next) => {
	//get the token in the headers authorization
	let token = req.headers.authorization

	if(typeof token !== "undefined"){

		token = token.slice(7, token.length)

		//jwt.verify(token, secret, cb(error, data))
		return jwt.verify(token, secret, (err, data) => {
			if(err){
				return res.send( {auth: "failed"} )
			} else {
				next()
			}
		})
	}
}


module.exports.decode = (token) => {

	if(typeof token != "undefined"){
		token = token.slice(7, token.length)

		return jwt.verify(token, secret, (err, data) => {
			if(err){
				return null
			} else {
				return jwt.decode(token, {complete: true}).payload
			}
		})
	}
}