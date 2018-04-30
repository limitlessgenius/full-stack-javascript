
const mongoose = require('mongoose')
const { Schema } = mongoose


const userSchema = new Schema({
	googleID: String, 
})

//create new collection called users
mongoose.model('users', userSchema)


