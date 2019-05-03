// // const jwt = require('jsonwebtoken');
// // module.exports = {
// //     GenerateTokenForResetPassword(payload){
// //         const token=jwt.sign({payload},'secretkey',{expiresIn:'1d'})
// //         const obj={
// //             success:true,
// //             message:'Token Generated Successfully',
// //             token:token
// //         }
// //         return obj;
// //     },
// //     GenerateTokenForAuthentication(payload)
// //     {
// //         const token =  jwt.sign({payload}, 'secretkey', { expiresIn: '1d' })
// //         const obj = {        
// //             success: true,
// //             message: 'Token Generated Successfully!!',
// //             token: token
// //         }
// //         return obj;
// //     }
// // }

// const jwt=require('jsonwebtoken');

// module.exports={
//     /**
//      * function for generation for token
//      */

//     GenerateTokenForResetPassword(payload) {
//         /**
//          * declaring the const variable with payload,secretkey,and duration of time
//          */

//          const token=jwt.sign({payload},'secretkey',{expiresIn:'1d'})
//          /**
//           * creating object for generating token information
//           */
//         const obj={
//             success:true,
//             message:"Token Generated Successfully!!",
//             token:token
//         }
//         return obj;
//         /**
//          * returning created object
//          */
//     },

//     GenerateTokenForAuthentication(payload) {

//         const token=jwt.sign({payload},'secretkey',{expiresIn:'1d'})

//         const obj={
//             success:true,
//             message:"Token Generated Successfully!!!",
//             token:token
//         }
//         return obj;
//     },

//     // GenerateToken(payload)
//     // {
//     //     const token=jwt.sign({payload},'secretkey',{expiresIn:1440})
//     //     const obj={
//     //         success:true,
//     //         message:"Token Generated Successfully!!",
//     //         token:token
//     //     }

// // }
// }

const jwt = require('jsonwebtoken');
module.exports = {
    GenerateTokenresetpassword(payload)
    {
        const token =  jwt.sign({payload}, 'secretkey', { expiresIn:'1d' }) // expires in 1 day
        const obj = {        
            success: true,
            message: 'Token Generated!!',
            token: token
        }
        return obj;
    },

    GenerateTokenAuthentication(payload)
    {
        const token =  jwt.sign({payload}, 'secretkey-Authentication', { expiresIn:'1d' }) // expires in 1 day
        const obj = {        
            success: true,
            message: 'Token Generated!!',
            token: token
        }
        return obj;
    }


}