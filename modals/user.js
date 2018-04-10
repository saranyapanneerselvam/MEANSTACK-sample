var moongoose = require("mongoose")
var user = moongoose.Schema({
    name:String,
    age:String,
    emailId:String,
    password:String
})

module.exports = moongoose.model('user', user);