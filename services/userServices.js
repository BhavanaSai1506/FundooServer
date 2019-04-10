

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





