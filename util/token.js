const jwt = require('jsonwebtoken');
module.exports = {
    GenerateTokenForResetPassword(payload){
        const token=jwt.sign({payload},'secretkey',{expiresIn:'1d'})
        const obj={
            success:true,
            message:'Token Generated Successfully',
            token:token
        }
        return obj;
    },
    GenerateTokenForAuthentication(payload)
    {
        const token =  jwt.sign({payload}, 'secretkey', { expiresIn: '1d' })
        const obj = {        
            success: true,
            message: 'Token Generated Successfully!!',
            token: token
        }
        return obj;
    }
}