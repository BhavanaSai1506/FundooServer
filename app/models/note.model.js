
const mongoose = require('mongoose');


const mongoSchema = mongoose.Schema


var noteSchema = new mongoSchema({

  email:{
    type:String,
    ref:"UserSchema"
  },
  userId:{
    type:mongoSchema.Types.ObjectId,
    ref: 'UserSchema',   
    required:[true,"UserId required"]
  },

  title: String,
  description: String,

},
/*  {
    timestamps: true,
  },  */
  {
    timestamps:{
      updatedAt:false,
    },
});
  //});

var note = mongoose.model("Note", noteSchema)

//function noteModel() { }

function noteModel(){

noteModel.prototype.addNote = (objectNote, callback) => {
    console.log(objectNote.email);
    
  const newNote = new note({
   // "userId":objectNote._id,
    'title': objectNote.title,
    'description': objectNote.description
  })

  newNote.save((err, result) => {
    if (err) {
      
      return callback(err);

    }
    else {
     
      return callback(null, result)
    }
  })

}


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

noteModel.prototype.getAllNotes = (req,callback) => {
console.log("email=====>",req.email);


note.find({ userId:req.email}, (err, result) => {
    if (err) {
      console.log("error in model===>", err);
      return callback(err);
    }
    else {
    
      return callback(null, result)
    }
  })
}

noteModel.prototype.getTitle=(data,callback)=>{
  let obj={
    "title":data.title
  }
  note.find(obj,(err,result)=>{
    if(err){
      console.log("err in model==>",errr);
      callback(err)  
    }
    else{
      callback(null,result);
    }
  })
}




}
module.exports = new noteModel();