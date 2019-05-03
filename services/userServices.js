



// const userModel=require('../app/models/user.model');


// exports.registration=(data,callback)=>{
//     try{
//         userModel.registration(data,(err,result)=>{
//             //checking error with if condition
//             if(err){
//                 console.log("services in error");
//                 callback(err);
//             }
//             else{
//                 console.log("server is in connection(registration)",result);
//                 callback(null,result)
                
//             }
//         })
//     }

//     catch(err){
//         console.log("error in services",err);
        
//     }
// }



// exports.login=(data,callback)=>{
//     try
//     {
//         userModel.login(data,(err,result)=>{
//             if(err)
//             {
//                 console.log("server in error");
//                 callback(err)
                
//             }
//             else
//             {
//                 console.log("server in connection(login)",result);
//                 console.log("--------------------------");
                
//                 callback(null,result)
//             }
//         })
//     }
// catch(err){
//     console.log("error in services",err);
    
// }
// }


// exports.getUserEmail=(data,callback)=>{
//     try{
//         userModel.findUserEmail(data,(err,result)=>{
//             if(err){
//                 callback(err)
//             }
//             else {
//                 callback(null,result)
//             }
//         })
//     }
//     catch(err) {
//         console.log("error in services",err);
        
//     }
// }


// exports.redirect=(decoded,callback)=>{
//     try{
//     userModel.confirmUser(decoded,(err,result)=>{
//         if(err) {
//             callback(err)
//         }
//         else {
//             callback(null,result)
//         }
//     })
// }
// catch(err)
// {
//     console.log("error in services",err);
// }    
// }



// exports.resetPassword=(req,callback)=>{
//     try{
//     userModel.updateUserPassword(data,(err,result)=>{
//         if(err) {
//             callback(err)
//         }
//         else {
//             callback(null,result)
//         }
//     })
// }
// catch(err){
//     console.log("error in services",err);
// }
// }

// exports.getAllUsers=(data,callback)=>{
//     try{
//         userModel.getAllUsers(data,(err,result)=>{
//             if(err){
//                 callback(err)
//             }
//             else{
//                 callback(null,result)
//             }
//         })
//     }
//     catch(err){
//         console.log("error in services");
        
//     }
// }




const usermodels = require('../app/models/user.model');

/**
 * @description:login is used to check the data is present in database or not..
 * @param {request from front end} req 
 * @param {responce from backend} res 
 */
exports.loginusers = (req, res) => {
    try {
        usermodels.login(req, (err, data) => {

            if (err) {
                console.log("err in service..");

                res(err);
            }
            else {
                console.log("service is working fine");

                
                res(null, data);
            }

        })
    }
    catch (err) {
        console.log("error in services:",err);
        
    }

}
/**
 * @description:register is used to register the user data in database...
 */

exports.registers = (req, res) => {
    try {

        usermodels.registration(req, (err, data) => {

            if (err) {
                console.log("err in service..");

                res(err);

            }
            else {

                console.log("service is working fine");
                res(null, data);

            }



        })
    }
    catch (err) {
        console.log("error in services:",err);
      

    }
}
/**
 * @description:checkuser use to find the data is present or not...
 */
exports.checkuser = (data, callback) => {
    try {
        usermodels.checkvalid(data, (err, result) => {

            if (err) {
                console.log("service err");
                callback(err);
            }
            else {
                callback(null, result);
            }

        })
    }
    catch{
        console.log("error in services:",err);
        


    }
}


/**
 * @description:setpas is used to update the password in database...
 */
exports.setpass = (data, callback) => {
    //console.log("services ",data.body);
    try {
        usermodels.updatepassword(data, (err, result) => {

            if (err) {

                console.log("service error");
                callback(err);

            }
            else {

                callback(null, result);
            }

        })
    }
    catch (err) {
        console.log("error in services:",err);
       
    }
}


exports.setProfilePic = (paramID, image, res) => {
    try {
        usermodels.setProfilePic(paramID, image, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:",err);
    }
}