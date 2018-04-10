var user = require('../middlewares/user');

module.exports = function(app){
    app.post('/api/storeData',user.storingData,function(req,res){

    });

    app.get('/api/fetchData/:id',user.getData,function(req,res){
        res=req.app.result;
        console.log(res);
    })
}