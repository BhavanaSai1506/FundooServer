// const userModel = require('../app/models/user.model')
// exports.login = (data, callback) => {
//     userModel.login(data, (err, result) => {
//         if (err) {
//             callback(err);
//         }
//         else {
//             callback(null, result);
//         }
//     }
//     )
// }
// exports.registration = (data, callback) => {
//     userModel.registration(data, (err, result) => {
//         if (err) {
//             console.log("service error");
//             callback(err);
//         }
//         else {
//             console.log("In service", result);
//             callback(null, result);
//         }
//     }
//     )
// }
// exports.redirect = (decoded, callback) => {
//     userModel.confirmUser(decoded, (err, result) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, result);
//         }
//     })
// }
// exports.getUserEmail = (data, callback) => {
//     userModel.findUserEmail(data, (err, result) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, result);
//         }
//     })
// }
// exports.resetPass = (req, callback) => {
//     userModel.updateUserPassword(req, (err, result) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, result);
//         }
//     })
// }
// exports.getAllUsers = (data, callback) => {
//     userModel.getAllUsers(data, (err, result) => {
//         if (err) {
//             callback(err);
//         }
//         else {
//             callback(null, result);
//         }
//     }
//     )
// }

const userModel=require('../app/models/user.model');


exports.registration=(data,callback)=>{
    try{
        userModel.registration(data,(err,result)=>{
            //checking error with if condition
            if(err){
                console.log("services in error");
                callback(err);
            }
            else{
                console.log("server is in connection(registration)"/*,result*/);
                callback(null,result)
                
            }
        })
    }

    catch(err){
        console.log("error in services",err);   
    }
}



exports.login=(data,callback)=>{
    try
    {
        userModel.login(data,(err,result)=>{
            if(err)
            {
                console.log("server in error");
                callback(err)
                
            }
            else
            {
                console.log("server in connection(login)",/*result*/)
                callback(null,result)
            }
        })
    }
catch(err){
    console.log("error in services",err);
    
}
}


exports.getUserEmail=(data,callback)=>{
    try{
        userModel.findUserEmail(data,(err,result)=>{
            if(err){
                callback(err)
            }
            else {
                callback(null,result)
            }
        })
    }
    catch(err) {
        console.log("error in services",err);
        
    }
}


exports.redirect=(decoded,callback)=>{
    try{
    userModel.confirmUser(decoded,(err,result)=>{
        if(err) {
            callback(err)
        }
        else {
            callback(null,result)
        }
    })
}
catch(err)
{
    console.log("error in services",err);
}    
}



exports.resetPassword=(req,callback)=>{
    try{
    userModel.updateUserPassword(data,(err,result)=>{
        if(err) {
            callback(err)
        }
        else {
            callback(null,result)
        }
    })
}
catch(err){
    console.log("error in services",err);
}
}





