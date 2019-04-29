

// const noteService=require('../services/noteServices')

// exports.createNote=(req,res)=>{
// var responseResult={}

// noteService.createNote(req.body,(err,result)=>{
//   if(err){
//     responseResult.success=false,
//     responseResult.error=err,
//     res.status(500).send(responseResult)
//   }
//   else
//   {
//     responseResult.success=true,
//     responseResult.result=result,
//     res.status(200).send(responseResult)
//   }
// })
// }


// exports.getNote=(req,res)=>{
// try{
//   var responseResult={}
//   noteService.getNote(req.body,(err,result)=>{
//     if(err)
//     {
//       responseResult.success=false,
//       responseResult.error=err,
//       res.status(500).send(responseResult)
//     }
//     else{
//       responseResult.success=true,
//       responseResult.result=result,
//       res.status(200).send(responseResult)
//     }
//   })
//   }
//   catch(err){
//     console.log("error in services",err);
    
//   }
// }

// exports.getAllNotes=(req,res)=>{
//   try{
//     var responseResult={}
//     noteService.getAllNotes(req.body,(err,result)=>{
//       if(err)
//       {
//         responseResult.success=false;
//         responseResult.error=err;
//         res.status(500).send(responseResult)
//       }
//       else
//       {
//         responseResult.success=true;
//         responseResult.result=result;
//         res.status(200).send(responseResult)
//       }
//     })
//   }
//   catch(err){
//     console.log("Error in catch block in getallnotes(controller)",err); 
//   }
// }

// exports.getTitle=(req,res)=>{
//   try{
//     var responseResult={}
//     noteService.getTitle(req.body,(err,result)=>{
//       if(err)
//       {
//         responseResult.success=false,
//         responseResult.error=err,
//         res.status(500).send(responseResult)
//       }
//       else
//       {
//         responseResult.success=true,
//         responseResult.result=result,
//         res.status(200).send(responseResult)
//         console.log(responseResult)
//       }
//     })
//   }
//   catch(err)
//   {
//     console.log("error in catch block in getTitle(controller)",err);
//   }
// }


//   exports.updatecolor = (req, res) => {
//     console.log("color  req in color api=> ", req.body);

//     req.checkBody('noteID', 'noteID should notr be empty').not().isEmpty();
//     req.checkBody('color', 'color should notr be empty').not().isEmpty();
//     var responce = {}
//     /**
//      * @description:pass the request data to sevices....
//      */
//     noteID = req.body.noteID;
//     color = req.body.color;
//     noteservices.updatecolor(noteID, color, (err, result) => {
//         if (err) {
//             responce.sucess = false;
//             responce.result = err;
//             res.status(500).send(responce);
//         }
//         else {
//             responce.sucess = true;
//             responce.result = result;
//             res.status(200).send(responce);
//         }
//     })


// }




const noteService = require('../services/noteServices')

exports.createNote = (req, res) => {
  req.checkBody('title', 'title required')
  .not()
  .isEmpty()
  req
  .checkBody("description", "Description should not be empty")
  .not()
  .isEmpty();
  var errors = req.validationErrors();
  var responseResult = {}
  if (errors) {
    responseResult.success = false,
      responseResult.error = errors;
    res.status(422).send(responseResult)
  }
  try {
    var responseResult = {}
    noteService.createNote(req, (err, result) => {
      if (err) {
        responseResult.success = false,
          responseResult.error = err,
          res.status(500).send(responseResult)
      }
      else {
        responseResult.success = true,
          responseResult.result = result,
          res.status(200).send(responseResult)
      }
    })
  }
  catch (err) {
    console.log("error in controller", err);
  }
}


exports.getNotes = (req, res) => {
  try {
    var responseResult = {}
    noteService.getNotes(req, (err, result) => {
      if (err) {
        responseResult.success = false,
          responseResult.error = err,
          res.status(500).send(responseResult)
      }
      else {
        responseResult.success = true,
          responseResult.result = result,
          res.status(200).send(responseResult)

        console.log('++++++++++++++++++++++++++++', responseResult);

      }
    })
  }
  catch (err) {
    console.log("error in services", err);

  }
}

exports.updateColor=(req,res)=>{
  req.checkBody('noteId',"it should not be empty")
  .not()
  .isEmpty()

  req.checkBody('color',"it should not be empty")
  .not()
  .isEmpty()

  var errors=req.validationErrors();

  if(errors){
    responseResult.success=false,
    responseResult.error=errors,
    res.status(500).send(responseResult)
  }

  try{
    var responseResult={}
    noteId=req.body.noteId,
    color=req.body.color;

    noteService.updateColor(noteId,color,(err,result)=>{
      if(err){
        responseResult.success=false,
        responseResult.err=err,
        res.status(500).send(responseResult)
      }else{
        responseResult.success=true,
        responseResult.result=result,
        res.status(200).send(responseResult)
      }
    })
  }catch(err){
    console.log("error in controller==>",err);
    
  }
}

exports.deleteNote=(req,res)=>{
  req.checkBody('noteId',"it should not be empty")
  .not()
  .isEmpty()

  var errors=req.validationErrors();

  if(errors){
    responseResult.success=false,
    responseResult.errors=errors,
    res.status(500).send(responseResult)
  }
  
  try{
    var responseResult={}
    noteId=req.body.noteId

    noteService.deleteNote(noteId,(err,result)=>{
      if(err){
        responseResult.success=false,
        responseResult.err=err,
        res.status(500).send(responseResult)
      }else{
        responseResult.success=true,
        responseResult.result=result,
        res.status(200).send(responseResult)
      }
    })
  }catch(err){
    console.log("error in controller(deletenote)",err);
    
  }
}

exports.editTtile=(req,res)=>{
  req.checkBody('noteId',"it should not be empty")
  .not()
  .isEmpty()

  var errors=req.validationErrors()

  if(errors){
    responseResult.success=false,
    responseResult.errors=errors,
    res.status(500).send(responseResult)
  }
  try{
    var responseResult={}
    noteId=req.body.noteId,
    title=req.body.title
    console.log("results",req.body.noteId,req.body.title);
    
    noteService.editTtile(noteId,title,(err,result)=>{

      if(err){
        responseResult.success=false,
        responseResult.err=err,
        res.status(500).send(responseResult)
      }else{
        responseResult.success=true,
        responseResult.result=result,
        res.status(200).send(responseResult)
      }
    })
    
  }catch(err){
    console.log("error in Controller",err);
    
  }
}

exports.editDescription=(req,res)=>{
  req.checkBody("noteId","decription should not be empty")
  .not()
  .isEmpty()

  var errors=req.validationErrors()


  if(errors){
    responseResult.success=false,
    responseResult.errors=errors,
    res.status(500).send(responseResult)
  }

  try{
    var responseResult={}
    noteId=req.body.noteId,
    description=req.body.description,
    
    noteService.editDescription(noteId,description,(err,result)=>{
      if(err){
        responseResult.success=false,
        responseResult.err=err,
        res.status(500).send(responseResult)
      }else{
        responseResult.success=true,
        responseResult.result=result,
        res.status(200).send(responseResult)
      }
    })
  }catch(err){
    console.log("error in controller",err);
    
  }
}

/*
exports.createArchiveNote=(req,res)=>{
req.checkBody('noteID','noteID required').not().isEmpty();
req.checkBody('archive','archive required').not().isEmpty();

var errors=req.validationErrors();
var responseResult={}
if(errors){
  responseResult.success=false,
  responseResult.error=errors,
  res.status(500).send(responseResult)
}
  try{
  var responseResult={}
  noteID=req.body.noteID;
  archive=req.body.archive
    noteService.createArchiveNote(noteID,archive,(err,result)=>{
      if(err){
        responseResult.succes=false,
        responseResult.error=err,
        res.status(500).send(responseResult)
      }
      else{
        responseResult.succes=true,
        responseResult.result=result,
        res.status(200).send(responseResult)
      }
    })
  }
  catch(err){
    console.log("error in controller part",err);
    
  }
}
*/



