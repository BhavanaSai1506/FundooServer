


const express=require('express');
const route=express.Router();
const userController=require('../controller/user.controller')
const Middleware=require('../middleware/authentication')

const noteController=require('../controller/note.controller')


route.post('/registration',userController.registration)
route.post('/login',userController.login)
route.post('/verifyUser',userController.getUser)
// route.post('/resetpassword/:token',loginMiddleware.checkToken,userController.setPassword) 
route.get('/getAllUsers',userController.getAllUsers)


route.post('/createNote',Middleware.checkTokenAuthentication,noteController.createNote)
route.get('/getNotes',Middleware.checkTokenAuthentication,noteController.getNotes)
route.put('/updateColor',Middleware.checkTokenAuthentication,noteController.updateColor)
route.post('/deleteNote',Middleware.checkTokenAuthentication,noteController.deleteNote)
route.put('/editTitle',Middleware.checkTokenAuthentication,noteController.editTitle)
route.put('/editDescription',Middleware.checkTokenAuthentication,noteController.editDescription)
route.put('/isArchived',Middleware.checkTokenAuthentication,noteController.isArchived)
route.put('/isPinned',Middleware.checkTokenAuthentication,noteController.isPinned)
route.put('/isTrashed',Middleware.checkTokenAuthentication,noteController.isTrashed)
route.put('/setReminder',Middleware.checkTokenAuthentication,noteController.setReminder)
module.exports=route;