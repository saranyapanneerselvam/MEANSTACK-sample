var users = require('../modals/user');
var exports = module.exports;
exports.storingData = function (req,res,next) {
    var user =new users();
    console.log(req)
    user.name=req.body.name;
    user.age=req.body.age;
    user.emailId = req.body.emailId;
    user.password=req.body.password;
    console.log(user);
    user.save(function(err){
        if(!err)
            console.log('saved');
    })
}
exports.getData = function (req,res,next) {

    users.findOne({id:req.param.id},function (err,user) {
        if(!err)
            req.app.result =user;
        next();
    })

}