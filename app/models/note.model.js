const mongoose = require('mongoose');
const mongoSchema = mongoose.Schema
var noteSchema = new mongoSchema({
 userId: {
    type: mongoSchema.Types.ObjectId,
    ref: 'User',
    required: [true, "UserId required"]
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  archive: {
    type: Boolean
  },
  color: {
    type: String
  },

},
  {
    timestamps: true,
  },

);
var note = mongoose.model("Note", noteSchema)

//function noteModel() { }

function noteModel() { }

noteModel.prototype.createNote = (objectNote, callback) => {
  //console.log("Input in create note==>", objectNote.body);
  var obj = {
    "userId": objectNote.decoded.payload.user_id,
    "title": objectNote.body.title,
    "description": objectNote.body.description,
    "archive": objectNote.body.archive
  }
  console.log("======================", obj);
  const noteData = new note(obj)
  noteData.save((err, result) => {
    if (err) {
      console.log('aaaaaaaaaaaaaaaaaa', err);
      callback(err);
    }
    else {
      console.log('Data Saved in Database===>', result);
      callback(null, result)
    }
  })
}

/*
noteModel.prototype.getNote = (data, callback) => {
  console.log('model==>',data)
  let obj = {
    "_id": data._id
  }
  note.findById(obj, (err, result) => {
    if (err) {
      console.log(err);
      callback(err)

    } else {
      //console.log();
      callback(null, result)
    }
  })
}
*/

noteModel.prototype.getNotes = (req, callback) => {
 console.log("");
 

  note.find({ userId: req.decoded.payload.user_id }, (err, result) => {
    if (err) {
      console.log("Model not found");
      callback(err)
    }
    else {
      console.log("Note Retrieved Successfully");
      callback(null, result)
    }
  })
}

noteModel.prototype.updateColor = (noteId, updateNote, callback) => {
  note.findOneAndUpdate(
    {
      _id: noteId
    },
    {
      $set:
      {
        color: updateNote
      }
    }, (err, result) => {
      if (err) {
        console.log("Color has not been updated");
        callback(err)
      } else {
        console.log("Color Updated successfully", result);
        callback(null, updateNote)
      }
    }
  )
}

noteModel.prototype.deleteNote=(data,callback)=>{
  console.log("=============================>",data);
  
  note.deleteOne({_id:data},(err,result)=>{
    if(err){
      console.log("error in deleting note");
      callback(err)
    }else{
      console.log("Result===>",result);
      
      const obj={
        status:200,
        message:"Note deleted successfully",
        result:result,
      }
      callback(null,obj)
    }
  })
}

exports.editTitle=(data,callback)=>{
  var paramData=data.title
  var paramId=data.noteId
note.findOneAndUpdate(
  {
    _id:paramId
  },
  {
    $set:
    {
      title:paramData,
    }
  },
  (err,result)=>{
    if(err){
      console.log("error in editing title");
      callback(err)
    }else{
      console.log("title edited");
      callback(nul,paramData ,result)   // here result is optional
    }
  }
)
}
exports.editDescription=(paramId,paramData,callback)=>{
  note.findOneAndUpdate(
    {
      _id:paramId
    },
    {
      $set:
      {
        description:paramData
      }
    },
    (err,result)=>{
      if(err){
        console.log("error in editing description");
        callback(err)
      }else{
        console.log("description edited");
        callback(null,paramData,result)        //result is optional
      }
    }
  )
}
/*
noteModel.prototype.createArchiveNote=(noteID,archiveNote,callback)=>{
console.log("==========>",archiveNote);
console.log("============>",noteID); 
note.findOneAndUpdate({
  _id:noteID
},{
  $set:{
    archive:archiveNote,
    trash:false,
    pinned:false,
  }
},(err,result)=>{
  if(err){
    callback(err)
  }else{
    callback(null,result)
  }
})
}
*/
noteModel.prototype.createArchiveNote = (objectNote, callback) => {
  console.log("notemodel==>", objectNote);
  const archNote = new note({
    'title': objectNote.title,
    'description': objectNote.description
  })
  note.findOneAndUpdate({
    /* _id:noteID  */
  }, {
      $set: {
        archive: archNote,
        trash: false,
        pinned: false,
      }
    }, (err, result) => {
      if (err) {
        console.log("yenappa error", err);

        callback(err)
      } else {
        console.log("bantu bantu result bantu==>", result);

        callback(null, result)
      }
    })
}
module.exports = new noteModel();