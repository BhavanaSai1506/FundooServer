

const noteService=require('../services/noteServices')

exports.createNote=(req,res)=>{
var responseResult={}

noteService.createNote(req.body,(err,result)=>{
  if(err){
    responseResult.success=false,
    responseResult.error=err,
    res.status(500).send(responseResult)
  }
  else
  {
    responseResult.success=true,
    responseResult.result=result,
    res.status(200).send(responseResult)
  }
})
}


exports.getNote=(req,res)=>{
try{
  var responseResult={}
  noteService.getNote(req.body,(err,result)=>{
    if(err)
    {
      responseResult.success=false,
      responseResult.error=err,
      res.status(500).send(responseResult)
    }
    else{
      responseResult.success=true,
      responseResult.result=result,
      res.status(200).send(responseResult)
    }
  })
  }
  catch(err){
    console.log("error in services",err);
    
  }
}

exports.getAllNotes=(req,res)=>{
  try{
    var responseResult={}
    noteService.getAllNotes(req.body,(err,result)=>{
      if(err)
      {
        responseResult.success=false;
        responseResult.error=err;
        res.status(500).send(responseResult)
      }
      else
      {
        responseResult.success=true;
        responseResult.result=result;
        res.status(200).send(responseResult)
      }
    })
  }
  catch(err){
    console.log("Error in catch block in getallnotes(controller)",err); 
  }
}

exports.getTitle=(req,res)=>{
  try{
    var responseResult={}
    noteService.getTitle(req.body,(err,result)=>{
      if(err)
      {
        responseResult.success=false,
        responseResult.error=err,
        res.status(500).send(responseResult)
      }
      else
      {
        responseResult.success=true,
        responseResult.result=result,
        res.status(200).send(responseResult)
        console.log(responseResult)
      }
    })
  }
  catch(err)
  {
    console.log("error in catch block in getTitle(controller)",err);
  }
}