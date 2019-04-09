const express=require('express');
const route=express.Router();
const userController=require("../controller/user.controller");
//const chatControllers=require('../Controllers/chat.Controller');
const loginMiddleware=require('../middleware/authentication')
route.post('/login',userController.login);
route.post('/registration',userController.registration);
route.post('/verifyUser', userController.getUser);
route.post('/resetpassword/:token', loginMiddleware.checkToken,userController.setPassword);
//router.post('/addMessage',chatControllers.addMessage);
//route.get('/getAllUsers',userController.getAllUsers);
//router.get('/getAllChats',chatControllers.getAllUserChats);

module.exports=route;