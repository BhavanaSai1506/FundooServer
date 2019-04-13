
var nodeMailer = require('nodemailer');

exports.sendEmailFunction = (userEmail) => {
    var url = 'http://192.168.0.37:3000/resetPassword'

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bhavanab1506@gmail.com',
            pass: 'iloveuammabhavana'
        },
    })

    let HelperOptions = {
        from: '"FundooApp" <bhavanab1506@gmail.com>',
        to: userEmail,
        subject: 'Reset Password',
        text: 'click the link to change the password ' + url
    }

    transporter.sendMail(HelperOptions, (err, res) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    })
}
