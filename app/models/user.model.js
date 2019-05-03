

// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const saltrounds = 10;



// const UserSchema = mongoose.Schema({

//     firstName: {
//         type: String, required: [true, 'First Name required']
//     },
//     lastName: {
//         type: String, required: [true, 'Last Name required']
//     },
//     email: {
//         type: String, required: [true, 'Email required']
//     },
//     password: {
//         type: String, required: [true, 'Password required']
//     },
//     confirmpassword: {
//         type: String, required: [true, 'Password required']
//     }
// },
//     {
//         timestamps: true
//     })

// // the schema is useless so far
// // we need to create a model using it


// /*
// Defining userModel function
// */
// function userModel() { }

// var user = mongoose.model('User', UserSchema)
// /*
// Defining hash function for encrypting password
// */

// function hash(password) {
//     var hash = bcrypt.hashSync(password, saltrounds);
//     return hash;
// }


// // Model for registration passing body and callback as parameters

// userModel.prototype.registration = (body, callback) => {
//     console.log("body model=>", body);

//     /**
//      * Finding the data from database
//      */

//     user.find({
//         "email": body.email
//     }, (err, data) => {
//         if (err) {
//             console.log("Error in Registration");
//             callback(err)
//             /**
//              * checking data is there or not in database
//              */
//         }
//         else if (data.length > 0) {
//             console.log("Email already exists");
//             callback("User already present")

//         }

//         else {
//             /**
//              * Creating New User
//              */
//             console.log(data);

//             const newUser = new user({
//                 'firstName': body.firstName,
//                 'lastName': body.lastName,
//                 'email': body.email,
//                 'password': hash(body.password),
//                 'confirmpassword': hash(body.password)
//             });
//             /**
//             * Saving the newUser data to database 
//             */
//             newUser.save((err, result) => {
//                 if (err) {
//                     console.log("Model not found");
//                     callback(err);
//                 }
//                 else {
//                     result.password=undefined,
//                     result.confirmpassword=undefined
//                     console.log("Registration Successfull");
//                     callback(null, result)
//                 }
//             })
//         }
//     });
// }




// userModel.prototype.login = (body, callback) => {
//     /**
//      * finding user in database
//      */
//     user.findOne({
//         "email": body.email
//     }, (err, data) => {
//         if (err) { 
//             callback(err);
//         }
//         else if (data != null) {
//             /**
//              * comparing password
//              */
//             console.log("aaaaaaaaa  before comparing password")
//            // console.log(bcrypt.compare(body.password, data.password));

//             bcrypt.compare(body.password, data.password).then(function (res) {
//                 if (res) {
//                     console.log("login successfull");
//                     return callback(null, data)
//                 } else {
//                     console.log("Incorrect Password");
//                     return callback("Incorrect Password");
//                 }
//             })
//         }
//         else{
//             callback(null,data)
            
//         }

//     })
// }


// userModel.prototype.findUserEmail = (data, callback) => {
//     user.findOne({ "email": data.body.email }, (err, result) => {
//         if (err) {
//             callback(err)
//         }
//         else {
//             if (result !== null && data.body.email == result.email) {
//                 callback(null, result)
//             }
//             else {
//                 callback("incorrect mail")
//             }
//         }
//     })
// }


// userModel.prototype.confirmUser = (data, callback) => {
//     user.updateOne({ _id: data.payload.id }, { is_verified: true }, (err, result) => {
//         if (err) {
//             callback(err)
//         }
//         else {
//             callback(null, result)
//         }
//     });
// }


// userModel.prototype.updateUserPassword = (req, callback) => {
//     console.log("in model--data:--", req.decoded);
//     console.log("in model--data:--", req.body);

//     let newpassword = bcrypt.hashSync(req.body.password, saltrounds);
//     log(("new pass bcrypt--", newpassword));
//     user.updateOne({ _id: req.decoded.payload.user_id }, { password: newpassword }, (err, result) => {
//         if (err) {
//             callback(err)
//         }
//         else {
//             callback(null, result)
//         }
//     })
// }


// userModel.prototype.getAllUsers=(callback)=>{
//     user.find({},(err,result)=>{
//         if(err){
//             callback(err)
//         }
//         else{
//             callback(null,result)
//         }
//     })
// }



// module.exports = new userModel();



const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
/**
 * @description:userschema is used to create a schema...
 */
const UserSchema = mongoose.Schema({
    firstname: {
        type: String, required: [true, "firstname require"]
    },
    lastname: {
        type: String, required: [true, "lastname require"]
    },
    email: {
        type: String, required: [true, "email require"]
    },
    password: {
        type: String, required: [true, "password require"]
    },
    profilepic: {
        type: String,
    }
},
    {
        timestamps: true
    });

function usermodel() { }
/**
 * @description:it is used to crete a collection in your database..
 */
const user = mongoose.model('user', UserSchema);
/**
 *@description:this function is used to create bycryt your password... 
 * @param {password} Password 
 */
function hash(Password) {
    let hash = bcrypt.hashSync(Password, 10);

    return hash;
}
/**
 * @description:register is used to register the user data in database...
 * @param {req data from the client} req 
 * @param {responce data from the database} res 
 */

usermodel.prototype.registration = (req, res) => {
    user.find({ "email": req.body.email }, (err, data) => {
        console.log("register data in user models");
        if (err) {
            console.log("err  in register models ");
            res(err);
        }
        else if (data.length > 0) {
            console.log("Email id already exist");
            res("user already present");
        }
        else {
            const userdata = new user({
                "firstname": req.body.firstname,
                "lastname": req.body.lastname,
                "email": req.body.email,
                "password": hash(req.body.password),
                "profilepic": ""
            })
            userdata.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    res(err);
                } else {
                    console.log("Register Sucessfully");
                    res(null, result);
                }
            })
        }
    })
}
/**
 * @description:login is used to check the data is present in database or not..
 * @param {request from front end} req 
 * @param {responce from backend} res 
 */
usermodel.prototype.login = (req, callback) => {
    user.findOne({ "email": req.body.email }, (err, data) => {
        if (err) {
            callback(err);
        } else if (data != null) {
            bcrypt.compare(req.body.password, data.password)
                .then(function (res) {
                    if (res) {
                        console.log("login succesfully");
                        console.log("responce login", res);

                        callback(null, data);
                    } else {
                        console.log("Incorrect password");
                        callback("Incorrect password");
                    }
                });
        }
        else {
            console.log("Invalid user");
            callback("invalid user");
        }
    })
}
/**
 * @description:checkvalid use to find the data is present or not...
 */
usermodel.prototype.checkvalid = (res, callback) => {
    user.find({ "email": res.body.email }, (err, data) => {
        if (err) {
            console.log("error");

            callback(err);
        }
        else {
            callback(null, data);
        }
    })

}
/**
 * @description:updatepassword is used to update the password in database...
 */
usermodel.prototype.updatepassword = (res, callback) => {

    var password = hash(res.body.password);
    user.updateOne({ _id: res.decoded.payload.user_id }, { password: password }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    });
}


usermodel.prototype.setProfilePic = (paramID, image, res) => {
    console.log("param id==>", paramID);
    console.log("param id==>", image);
    user.findOneAndUpdate(
        {
            _id: paramID
        },
        {
            $set: {
                "profilepic": image,
            }
        },
        (err, result) => {
            console.log("result in update pin", result);

            if (err) {
                res(err)
            } else {

                return res(null, image)
            }
        });
}









module.exports = new usermodel;