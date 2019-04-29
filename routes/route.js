const express=require('express');
const route=express.Router();
const userController=require('../controller/user.controller')
const Middleware=require('../middleware/authentication')

const noteController=require('../controller/note.controller')


route.post('/registration',userController.registration)
route.post('/login',userController.login)
route.post('/verifyUser',userController.getUser)
//route.post('/forgotPassword', userController.forgotPasswordController);
 //route.post('/resetPassword', userController.resetPasswordController);
//route.post('/resetpassword/:token',loginMiddleware.checkToken,userController.setPassword) 
//route.put('/updatecolor',Middleware.checkTokenAuthentication,noteController.updatecolor);


// route.post('/createNote',noteController.createNote)
// route.get('/getAllNotes',noteController.getAllNotes)
// route.get('/getNote',noteController.getNote)

module.exports=route;