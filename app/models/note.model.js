
// const mongoose = require('mongoose');


// const mongoSchema = mongoose.Schema


// var noteSchema = new mongoSchema({

//   email:{
//     type:String,
//     ref:"UserSchema"
//   },
//   // userId:{
//   //   type:mongoSchema.Types.ObjectId,
//   //   ref: 'UserSchema',   
//   //   required:[true,"UserId required"]
//   // },

//   title: String,
//   description: String,

// },
// /*  {
//     timestamps: true,
//   },  */
//   {
//     timestamps:{
//       updatedAt:false,
//     },
// });
//   //});

// var note = mongoose.model("Note", noteSchema)

// //function noteModel() { }

// function noteModel(){

// noteModel.prototype.addNote = (objectNote, callback) => {
//     console.log(objectNote.email);
    
//   const newNote = new note({
//     // "userId":objectNote._id,
//     'title': objectNote.title,
//     'description': objectNote.description
//   })

//   newNote.save((err, result) => {
//     if (err) {
      
//       return callback(err);

//     }
//     else {
     
//       return callback(null, result)
//     }
//   })

// }


// noteModel.prototype.getNote = (data, callback) => {
//   console.log('model==>',data)
//   let obj = {
//     "_id": data._id
//   }
//   note.findById(obj, (err, result) => {
//     if (err) {
//       console.log(err);
//       callback(err)

//     } else {
//       //console.log();
//       callback(null, result)
//     }
//   })
// }

// noteModel.prototype.getAllNotes = (req,callback) => {
// console.log("email=====>",req.email);


// note.find({ userId:req.email}, (err, result) => {
//     if (err) {
//       console.log("error in model===>", err);
//       return callback(err);
//     }
//     else {
    
//       return callback(null, result)
//     }
//   })
// }

// noteModel.prototype.getTitle=(data,callback)=>{
//   let obj={
//     "title":data.title
//   }
//   note.find(obj,(err,result)=>{
//     if(err){
//       console.log("err in model==>",errr);
//       callback(err)  
//     }
//     else{
//       callback(null,result);
//     }
//   })
// }

// noteModel.prototype.updatecolor = (paramID, paramData, res) => {

//   Note.findOneAndReplace({
//       _id: paramID
//   },
//       {
//           $set: {
//               color: paramData
//           }
//       },
//       (err, data) => {

//           if (err) {
//               console.log("error in chat models");
//               res(err);
//           }
//           else {
//               console.log("chat mode get data sucessfully");
//               res(null, paramData);
//           }
//       })
// }


// }
// module.exports = new noteModel();

//---------------------------------------------------------------------------------------//

// const mongoose = require('mongoose');
// // const EventEmitter = require('events');

// // class MyEmitter extends EventEmitter {}
// // const myEmitter = new MyEmitter();

// const Schema = mongoose.Schema;
// const NoteSchema = mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'user',
//         required: [true, "userId is required"]
//     },
//     title: {
//         type: String,
//         required: [true, "title is required"]
//     },
//     description: {
//         type: String,
//         required: [true, "discription require"]
//     },
//     reminder: {
//         type: String,

//     },
//     color: {
//         type: String,

//     },
//     image: {
//         type: String,

//     },
//     archive: {
//         type: Boolean,
//     },
//     pinned: {
//         type: Boolean,
//     },
//     trash: {
//         type: Boolean,
//     },
//     label: [
//         {
//             type: String,
//             ref: 'labeSchema',
//         }
//     ],
// QandA:[
//     {
//         type:String,
       
//     }
// ]
// },
//     {
//         timestamps: true
//     });

// const Note = mongoose.model('note', NoteSchema);

// class noteModel { }

// noteModel.prototype.CreateNote = (req, res) => {
//     console.log("request in model==>", req.body);

//     const userdata = new Note({
//         "userId": req.body.userId,
//         "title": req.body.title,
//         "description": req.body.description,
//         "reminder": req.body.reminder,
//         "color": req.body.color,
//         "image": req.body.image,
//         "archive": req.body.archive,
//         "pinned": req.body.pinned,
//         "trash": req.body.trash
//     });
//     userdata.save((err, result) => {
//         if (err) {
//             console.log("Model not found", err);
//             res(err);
//         } else {
//             console.log("Note saved sucessfully");

           
//             // myEmitter.emit('event', 'a', 'b');


            
//            res(null, result);
//         }
//     })
// }
// noteModel.prototype.getnote = (req, res) => {


//     Note.find({ userId: req.decoded.payload.user_id }, (err, data) => {

//         if (err) {
//             console.log("error in chat models");
//             res(err);
//         }
//         else {
//             console.log("chat mode get data sucessfully");
//             res(null, data);
//         }
//     })

// }
// noteModel.prototype.updatecolor = (paramID, paramData, res) => {

//     Note.findOneAndReplace({
//         _id: paramID
//     },
//         {
//             $set: {
//                 color: paramData
//             }
//         },
//         (err, data) => {

//             if (err) {
//                 console.log("error in chat models");
//                 res(err);
//             }
//             else {
//                 console.log("chat mode get data sucessfully");
//                 res(null, paramData);
//             }
//         })
// }

// noteModel.prototype.deleteNote = (req, res) => {

//     Note.deleteOne({ _id: req.body.noteID }, (err, result) => {
//         if (err) {
//             res(err)
//         } else {
//             console.log("result==>", result);
//             const obj = {
//                 status: 200,
//                 msg: "note is deleted successfully",
//                 result: result
//             }
//             res(null, obj);
//         }
//     })
// }

// noteModel.prototype.isArchived = (paramID, paramData, res) => {

//     Note.findOneAndUpdate(
//         {
//             _id: paramID
//         },
//         {
//             $set: {
//                 archive: paramData,
//                 trash: false,
//                 pinned: false
//             }
//         },
//         (err, result) => {
//             if (err) {
//                 res(err)
//             } else {

//                 return res(null, paramData)
//             }
//         });
// }

// noteModel.prototype.setReminder = (paramID, paramData, res) => {

//     Note.findOneAndUpdate(
//         {
//             _id: paramID
//         },
//         {
//             $set: {
//                 reminder: paramData,

//             }
//         },
//         (err, result) => {
//             if (err) {
//                 res(err)
//             } else {

//                 return res(null, paramData)
//             }
//         });
// }

// noteModel.prototype.editTitle = (paramID, paramData, res) => {

//     Note.findOneAndUpdate(
//         {
//             _id: paramID
//         },
//         {
//             $set: {
//                 title: paramData,

//             }
//         },
//         (err, result) => {
//             if (err) {
//                 res(err)
//             } else {

//                 return res(null, paramData)
//             }
//         });
// }

// noteModel.prototype.editDescription = (paramID, paramData, res) => {

//     Note.findOneAndUpdate(
//         {
//             _id: paramID
//         },
//         {
//             $set: {
//                 description: paramData,

//             }
//         },
//         (err, result) => {
//             if (err) {
//                 res(err)
//             } else {

//                 return res(null, paramData)
//             }
//         });
// }

// noteModel.prototype.getTrashStatus = (id, callback) => {
//     //  console.log("getTrashStatus",id);

//     Note.findOne({ _id: id }, (err, result) => {
//         //console.log("id", id);
//         if (err) {
//             callback(err)
//         } else {
//             console.log("status", result)
//             return callback(null, result.trash)
//         }
//     })
// }
// noteModel.prototype.isTrashed = (noteID, trashStatus, callback) => {
//     console.log("in model", noteID, trashStatus);
//     Note.findOneAndUpdate(
//         {
//             _id: noteID
//         },
//         {
//             $set: {
//                 trash: trashStatus.status,
//                 pinned: false,
//                 archive: false
//             }
//         },
//         (err, result) => {
//             if (err) {
//                 callback(err)
//             } else {

//                 return callback(null, trashStatus.status)
//             }
//         });
// };

// noteModel.prototype.updatePin = (paramID, paramData, res) => {
//     console.log("param id==>", paramID);

//     console.log("param id==>", paramData);
//     Note.findOneAndUpdate(
//         {
//             _id: paramID
//         },
//         {
//             $set: {
//                 pinned: paramData,
//                 archive: false,
//                 trash: false,

//             }
//         },
//         (err, result) => {
//             console.log("result in update pin", result);

//             if (err) {
//                 res(err)
//             } else {

//                 return res(null, paramData)
//             }
//         });
// }

// noteModel.prototype.updateImage = (paramID, paramData, res) => {
//     console.log("param id==>", paramID);

//     console.log("param id==>", paramData);
//     Note.findOneAndUpdate(
//         {
//             _id: paramID
//         },
//         {
//             $set: {
//                 "image": paramData,
//             }
//         },
//         (err, result) => {
//             console.log("result in update pin", result);

//             if (err) {
//                 res(err)
//             } else {

//                 return res(null, paramData)
//             }
//         });
// }

// noteModel.prototype.saveLabelToNote = (labelParams, callback) => {
//     console.log("in model", labelParams.noteID);

//     var labelledNote = null;
//     var noteID = null;

//     labelledNote = labelParams.label;
//     noteID = labelParams.noteID;

//     Note.findOneAndUpdate(
//         {
//             _id: noteID
//         },
//         {
//             $push: {
//                 label: labelledNote,
//             }
//         },
//         (err, result) => {
//             if (err) {
//                 callback(err)
//             } else {
//                 console.log("in model success");

//                 let res = result.label;
//                 res.push(labelledNote);
//                 return callback(null, res)
//             }
//         });
// }

// noteModel.prototype.deleteLabelToNote = (labelParams, callback) => {
//     console.log("in model", labelParams.noteID);

//     var labelledNote = null;
//     var noteID = null;

//     labelledNote = labelParams.value;
//     noteID = labelParams.noteID;


//     Note.findOneAndUpdate(
//         {
//             _id: noteID
//         },
//         {
//             $pull: {
//                 label: labelledNote,
//             }
//         },
//         (err, result) => {
//             if (err) {
//                 callback(err)
//             } else {
//                 let newArray = result.label;
//                 console.log("in model success result", result);
//                 for (let i = 0; i < newArray.length; i++) {
//                     if (newArray[i] === labelledNote) {
//                         newArray.splice(i, 1);
//                         return callback(null, newArray)
//                     }
//                 }
//             }
//         });
// }

// var labelSchema = new mongoose.Schema({
//     userID: {
//         type: Schema.Types.ObjectId,
//         ref: 'UserSchema'
//     },
//     label: {
//         type: String,
//         require: [true, "Label require"],
//         unique: true
//     }
// }, {
//         timestamps: true
//     }
// )
// var label = mongoose.model('Label', labelSchema);


// noteModel.prototype.addLabel = (labelData, callback) => {
//     // console.log("ultimate save", labelData);

//     const Data = new label(labelData);
//     Data.save((err, result) => {
//         if (err) {
//             console.log(err);
//             callback(err);
//         } else {
//             //  console.log("label result", result);

//             return callback(null, result);
//         }
//     })
// }


// noteModel.prototype.getLabels = (id, callback) => {
//     //console.log("in model", id);

//     label.find({ userID: id.userID }, (err, result) => {
//         if (err) {
//             callback(err)
//         } else {
//             //console.log("labels", result)
//             return callback(null, result)
//         }
//     })
// }
// noteModel.prototype.deleteLabel = (id, callback) => {
//     // console.log("in model", id);

//     label.deleteOne({ _id: id.labelID }, (err, result) => {
//         if (err) {
//             callback(err)
//         } else {
//             //console.log("labels", result)
//             return callback(null, result)
//         }
//     })
// }

// noteModel.prototype.updateLabel = (changedLabel, callback) => {
//     var editLabel = null;
//     var labelId = null;
//     //  console.log("in model",changedLabel);
//     editLabel = changedLabel.editLabel;
//     labelId = changedLabel.labelID
//     label.findOneAndUpdate(
//         {
//             _id: labelId
//         },
//         {
//             $set: {
//                 label: editLabel
//             }
//         },
//         (err, result) => {
//             if (err) {
//                 console.log("in modelerr");

//                 callback(err)
//             } else {
//                 console.log("in modelsuccess");

//                 return callback(null, changedLabel)
//             }
//         });
// };


// noteModel.prototype.updateqanda= (data, callback) => {
   

//     console.log("dataaaa in model-->",data);
    
//    var  question= data.question;
//     noteId = data.noteId
   

//     Note.findOneAndUpdate(
//         {
//             _id:  noteId
//         },
//         {
//             $push: {
//                 QandA: question,
//             }
//         },
//         (err, result) => {
//             if (err) {
//                 callback(err)
//             } else {
//                 console.log("in model success",result);
//                 let res = result.QandA;
//                 res.push(question);
//                 return callback(null, res)
//             }
//         });
// };


// noteModel.prototype.getqandadetails = (id, callback) => {
//      console.log("q nad a data-->",id);

//      Note.findOne({ _id: id.noteID }, (err, result) => {
//         console.log("id",err);
//         if (err) {
//             callback(err)
//         } else {
//             console.log("status", result)

           

           
//             return callback(null, result)
//         }
//     })

    
// }
// module.exports = function(Events) {
//     // Set up Event listeners here
// }



// module.exports = new noteModel;




/*

const mongoose=require('mongoose')
const mongoSchema=mongoose.Schema;                                      
/**
 * @description:Creating note schema using mongoose
 **/

/*
var noteSchema=new mongoSchema(                                       
 {
   // userId: {
   //   type:   mongoSchema.Types.ObjectId,                                       
   //   required: [true, "User_id required"],
   //   ref: "Note"
   // },
   title: {
     type: String,
     required: [true, "Title required"]
   },
   description: {
     type: String,
     required: [true, "Description required"]
   },
   // color: {
   //   type: String,
   //   required: [true, "Color required"]
   // },
   // reminder: {
   //   type: String
   // },
   // archive: {
   //   type: Boolean
   // },
   // trash: {
   //   type: Boolean
   // }
 },
 {
   timestamps: true
 }
);
var note = mongoose.model("Note", noteSchema);

function noteModel() {}
/**
* @description:it will add the notes data using note schema and save the data into the database
* @param {*request from frontend} objectNote
* @param {*response to backend} callback
*/
/*noteModel.prototype.addNotes = (objectNote, callback) => {
  console.log("data====>", objectNote.body);
  
  const noteModel = new note({
   
    'title': objectNote.body.title,
    'description': objectNote.body.description,
    
});
  
  
  noteModel.save((err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};


noteModel.prototype.getNotes=(id,callback)=>{
    note.find(
        {
            userId:id.decoded.payload.user_id
        },
        (err,result)=>{
            if(err) {
                callback(err);
            } else {
                callback(null,result)
            }
        }
    );
};

module.exports=new noteModel();

*/
/************************************************************************************************************* */

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
  console.log("????????????????????????????????????????????????????????????????", obj);


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
  // console.log("<><><><><><><><><><><>", req.decoded.payload.user_id);

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
  note.deleteOne({  _id:data },(err,result)=>{
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

exports.editTitle=(paramId,paramData,callback)=>{
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
      callback(nul,paramData ,result)
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



