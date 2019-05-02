

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltrounds = 10;



const UserSchema = mongoose.Schema({

    firstName: {
        type: String, required: [true, 'First Name required']
    },
    lastName: {
        type: String, required: [true, 'Last Name required']
    },
    email: {
        type: String, required: [true, 'Email required']
    },
    password: {
        type: String, required: [true, 'Password required']
    },
    confirmpassword: {
        type: String, required: [true, 'Password required']
    }
},
    {
        timestamps: true
    })

// the schema is useless so far
// we need to create a model using it


/*
Defining userModel function
*/
function userModel() { }

var user = mongoose.model('User', UserSchema)
/*
Defining hash function for encrypting password
*/

function hash(password) {
    var hash = bcrypt.hashSync(password, saltrounds);
    return hash;
}


// Model for registration passing body and callback as parameters

userModel.prototype.registration = (body, callback) => {
    console.log("body model=>", body);

    /**
     * Finding the data from database
     */

    user.find({
        "email": body.email
    }, (err, data) => {
        if (err) {
            console.log("Error in Registration");
            callback(err)
            /**
             * checking data is there or not in database
             */
        }
        else if (data.length > 0) {
            console.log("Email already exists");
            callback("User already present")

        }

        else {
            /**
             * Creating New User
             */
            console.log(data);

            const newUser = new user({
                'firstName': body.firstName,
                'lastName': body.lastName,
                'email': body.email,
                'password': hash(body.password),
                'confirmpassword': hash(body.password)
            });
            /**
            * Saving the newUser data to database 
            */
            newUser.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    callback(err);
                }
                else {
                    result.password=undefined,
                    result.confirmpassword=undefined
                    console.log("Registration Successfull");
                    callback(null, result)
                }
            })
        }
    });
}




userModel.prototype.login = (body, callback) => {
    /**
     * finding user in database
     */
    user.findOne({
        "email": body.email
    }, (err, data) => {
        if (err) { 
            callback(err);
        }
        else if (data != null) {
            /**
             * comparing password
             */
            console.log("aaaaaaaaa  before comparing password")
           // console.log(bcrypt.compare(body.password, data.password));

            bcrypt.compare(body.password, data.password).then(function (res) {
                if (res) {
                    console.log("login successfull");
                    return callback(null, data)
                } else {
                    console.log("Incorrect Password");
                    return callback("Incorrect Password");
                }
            })
        }
        else{
            callback(null,data)
            
        }

    })
}


userModel.prototype.findUserEmail = (data, callback) => {
    user.findOne({ "email": data.body.email }, (err, result) => {
        if (err) {
            callback(err)
        }
        else {
            if (result !== null && data.body.email == result.email) {
                callback(null, result)
            }
            else {
                callback("incorrect mail")
            }
        }
    })
}


userModel.prototype.confirmUser = (data, callback) => {
    user.updateOne({ _id: data.payload.id }, { is_verified: true }, (err, result) => {
        if (err) {
            callback(err)
        }
        else {
            callback(null, result)
        }
    });
}


userModel.prototype.updateUserPassword = (req, callback) => {
    console.log("in model--data:--", req.decoded);
    console.log("in model--data:--", req.body);

    let newpassword = bcrypt.hashSync(req.body.password, saltrounds);
    log(("new pass bcrypt--", newpassword));
    user.updateOne({ _id: req.decoded.payload.user_id }, { password: newpassword }, (err, result) => {
        if (err) {
            callback(err)
        }
        else {
            callback(null, result)
        }
    })
}


userModel.prototype.getAllUsers=(callback)=>{
    user.find({},(err,result)=>{
        if(err){
            callback(err)
        }
        else{
            callback(null,result)
        }
    })
}



module.exports = new userModel();

