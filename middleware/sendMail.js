
// var nodeMailer = require('nodemailer');

// exports.sendEmailFunction = (userEmail) => {
//     var url = 'http://192.168.0.14:3000/resetPassword'

//     let transporter = nodeMailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: "bhavanab1506@gmail.com",
//             pass: "iloveuammabhavana"
//         },
//     })

//     let mailOptions = {
//         from: '"FundooApp" <bhavanab1506@gmail.com>',
//         to: userEmail,
//         subject: 'Reset Password',
//         text: 'click the link to change the password ' + url
//     }

//     transporter.sendMail(mailOptions, (err, res) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log(res)
//         }
//     })
// }



// var sendSmtpMail = function (req,res) {
//     var transport = nodemailer.createTransport({
//     service:'gmail',
//      auth: {
//                user: "asdfqweerrccb@limitlesscircle.com",
//                pass: "qwerr@wee"
//           }
//      });
//      var mailOptions = {
//           from: "transactions@limitlesscircle.com", 
//           to:'umaraja1124@gmail.com', 
//           subject: req.body.subject+"nodejs working ?", 
//           text: "Hello world ?",  
//       }
//       transport.sendMail(mailOptions, function(error, response){
//         if(error){
//            res.send("Email could not sent due to error: "+error);
//            console.log('Error');
//          }else{
//            res.send("Email has been sent successfully");
//            console.log('mail sent');
//         } 
//     }); 





// const nodemailer = require('nodemailer');



// exports.sendEmailFunction = (userEmail,url) => {

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {

//             user: "bhavanab1506@gmail.com",     
//             pass: "xxxxxxxxxx"         
//         },
//     });


//     const mailOptions = {
//         from: ("FundooApp","bhavanab1506@gmail.com"),                   
//         to: userEmail ,                                           

//         subject: 'verification mail',

//         text:  'verification link is:\n\n' + url
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//         if (err)
//             console.log("error on sent mail" + err);
//         else
//             console.log("Link sent on mail" + info);
//     });
// }


var nodeMailer = require('nodemailer');

exports.sendEmailFunction = (userEmail) => {
    var url = 'http://192.168.0.14:3000/resetPassword'

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bhavanab1506@gmail.com',
            pass: 'iloveuamma'
        }
    });

    let mailOptions = {
        from: 'bhavanab1506@gmail.com',
        to: userEmail,
        subject: 'Reset Password',
        text: 'click the link to change the password ' + url
    }

    transporter.sendMail(mailOptions, function(err, res) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    });
}
