const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const phoneContect = new Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phoneNum:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        // unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    description:{
        type:String,
        // required:true
    },
},{timestamps:true});
const Phone_contect = mongoose.model('Phone_contect',phoneContect)
module.exports = Phone_contect;
