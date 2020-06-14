import request  from "../utils/request"
export default{
   getUser( params, options){
     return request.post('/api/getEmergencypassportList', params, options)
   } 
};