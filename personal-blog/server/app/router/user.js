const router = require("../router");

module.exports=app=>{
    const {router,controller} = app;
    router.post('/getEmergencypassportList', controller.user.getMmergencypassportList);
}