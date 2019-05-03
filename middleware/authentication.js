
// /**
//  * define the jwt by jwt variable
//  */

// var jwt=require("jsonwebtoken");

// /**
//  * exporting the login authentication passing parameters 
//  * as request response and next it will access controllers
//  * to callback functions
//  */

//  exports.loginAuth=(req,res,next)=>{
//      if(req.body!==null)
//      {
//          /**
//           * checking the mail present in database or not 
//           * through if condition by body
//           */
//          if(req.body.email==null || req.body.password==null)
//          {
//              res.send({
//                  status:false,
//                  message:"Empty Request"
//              })
//          }
//         /**
//           * checking the mail with regex expression 
//           * and send response
//           */
//          else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(req.body.email)) {
//            res.send({
//                status: false,
//                message: 'Invalid Email Id'
//            })
//      }
       
//      else if(req.body.password === '' || req.body.password.length<6) {
//          res.send({
//              status:false,
//              message:"Invalid Password"
//          })
//      }
//    /**
//     * checking the mail and pass to the client
//     * to controller by next
//     */
//    console.log('\n Passing client request to controller...');
//    next();
//    }
//    else{
//        /***
//         * checking the mail and send the error message
//         */
//        res.send({
//            status:false,
//            message:"Authentication error..."
//        })
//    }
// }
// /**
// * checking the generated token passing the parameters as request
// * next by callback function
// */

// exports.checkToken=(req,res,next)=>{
//    var token1=req.headers['token'];
//    /**
//     * decode token
//     */

//    if(token1)
//    {
//        /**
//         * verifies secret and checks exp
//         */
//        jwt.verify(token1,'secretkey',(err,decoded)=>{
//            if(err){
//                return res.send({
//                    success:false,
//                    message:"Token is not valid"
//                })
//            }
//            /**
//             * req decoded and next will pass the controllers
//             */
//            else
//            {
//                req.decoded=decoded;
//                console.log("token",req.body);
               
//                next();
//            }
//        });
//    }
//    else{
//        /***
//         * if there is no token return an error
//         */
//        return res.send({
//            success:false,
//            message:"No Token provided"
//        })
//    }
// }

// // exports.checkToken = (req, res, next) => {

// //     var token1 = req.headers['token']
// //     /**
// //      * decode token
// //      */

// //     if (token1) {
// //         /**
// //          * verifies secret and checks exp
// //          */
// //         jwt.verify(token1, 'secretkey', (err, decoded) => {
// //             console.log("Verified Token answer===>", token1);

// //             if (err) {
// //                 return res.send({
// //                     success: false,
// //                     message: "Token is not valid"
// //                 })
// //             }
// //             /**
// //              * req decoded and next will pass the controllers
// //              */
// //             else {
// //                 req.decoded = decoded;
// //                 console.log("Decoded Token", req.body);

// //                 next();
// //             }
// //         })
// //     }
// //     else {
// //         /**
// //          * if there is no token return an eror
// //          */

// //         return res.send({
// //             success: false,
// //             message: 'No token provided.'
// //         })

// //     }

// // }
// exports.checkTokenAuthentication=(req,res,next)=>{

//     var token1=req.headers['access-token']
//     /**
//      * decode token
//      */

//      if(token1) {
//          /**
//           * verifies secret and checks exp
//           */
//          jwt.verify(token1,'secretkeyAuthentication',(err,decoded)=>{
//              console.log('answer',token1);

//              if(err) {
//                  return res.send({
//                      success:false,
//                      message:"Token is not valid"
//                  })
//              }
//              /**
//               * req decoded and next will pass the controllers
//               */
//              else{
//                  req.decoded=decoded;
//                  console.log('token',req.body);

//                  next();
//              }
//          })
//      }
//      else{
//          /**
//           * if there is no token return an eror
//           */
     
//         return res.send({
//             success:false,
//             message:"No token provided."
//         })

//         }

// }





/**
 * @description:it is used to generate the token.....
 */
var jwt = require('jsonwebtoken');
/**
 * @description:it is used to check your token is valid or not...
 */

const responseTime = require('response-time')

const redis = require('redis');


const express = require('express');
const app = express();

/**
 * @description:login is used to check the data is present in database or not..
 * @param {request from front end} req 
 * @param {response from backend} res 
 */

const client = redis.createClient();

// Print redis errors to the console
client.on('error', (err) => {
    console.log("Error " + err);
});

app.use(responseTime());


exports.checkToken = (req,res,next) => {
  // console.log("request of authorization ",req.body);
    var tokens = req.headers['token']; 
   //console.log("check token enter sucessfully");
    if (tokens)
    {
        // verifies secret and checks exp
        jwt.verify(tokens, 'secretkey', (err, decoded) => 
        {
            if (err) 
            {
                
                return res.status(401).send({
                    success: false,
                    message: 'Token is not valid'
                });
            } 
            else 
            {
                /**
                 * @description:add the decoded to your req data....
                 */
                req.decoded = decoded;
                //console.log("request in request==>",req.decoded);
                console.log("your token is valid",);
                next();
            }
        });
    } 
    else 
    {
        // if there is no token return an error
        return res.send({
            success: false,
            message: 'No token provided.'
        });
    }
}

exports.checkTokenAuthentication= (req,res,next) => {
   //  console.log("request of authorization ",req);
      var tokens = req.headers['token']; 
    console.log("check token enter sucessfully hereeeeeeeeeeeeeeeeee");
      if (tokens)
      {
          // verifies secret and checks exp
          jwt.verify(tokens, 'secretkey-Authentication', (err, decoded) => 
          {
              if (err) 
              {
                  
                  return res.status(401).send({
                      success: false,
                      message: 'Token is not valid'
                  });
              } 
              else 
              {
                  /**
                   * @description:add the decoded to your req data....
                   */
                  req.decoded = decoded;

                  var userID= req.decoded.payload.user_id;
                //  console.log("request in request==>",req.decoded);
                  console.log("your token is valid");

                //   client.del(userID, (err, response) => {
                //     if (response == 1) {
                //         console.log("redis  Deleted Successfully!")
                //         next();
            
                //         res.status(200).send("Deleted Successfully!");
                //     } else {
                //         console.log("Cannot delete")
                //         res.status(500).send("Cannot delete");
                //         next();
                //     }
                // })
                next();     
              }
          });
      } 
      else 
      {
          // if there is no token return an error
          return res.send({
              success: false,
              message: 'No token provided.'
          });
      }
  }