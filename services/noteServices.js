
const noteModel = require('../app/models/note.model')


exports.createNote = (data, callback) => {
    try {
        noteModel.createNote(data, (err, result) => {

            if (err) {
                console.log("error in noteservices(createnote)");
                callback(err)
            }
            else {
                console.log("(addNote) in service");
                callback(null, result)
            }
        })
    }
    catch (error) {
        console.log("error in services", error);

    }
}

exports.getNotes = (data, callback) => {
    try {
        noteModel.getNotes(data, (err, result) => {
            if (err) {
                console.log("error in getNotes(services)");
                callback(err)
            }
            else {
                console.log("(getNotes) in service");
                callback(null, result)
            }
        })

    }
    catch (err) {
        console.log("error in services", err);
    }
}





exports.updateColor = (paramId, data, callback)=>{
try {
    noteModel.updateColor(paramId, data, (err, result) => {
        if (err) {
            console.log("error in updating color", err);
            callback(err)
        } else {
            console.log("in service", result);
            callback(null, result)
        }
    })
} catch (err) {
    console.log("error in servies", err);
}
}


exports.deleteNote = (data, callback)=>{

try {
    noteModel.deleteNote(data, (err, result) => {
        console.log("in ==>",result);
        
        if (err) {
            console.log("error in deleting note", err);
            callback(err)
        } else {
            console.log("in service", result);
            callback(null, result)
        }
    })
} catch (err) {
    console.log("error in servies", err);

}

}

exports.editTitle=(data,callback)=>{
    try{
        noteModel.editTitle(data,(err,result)=>{
            if(err){
            console.log("error in editTitle(services)");
            callback(err)
            }else{
                console.log(("editTitle method in service"));
                callback(null,result)
            }            
        })
    }catch(err){
        console.log("error in services",err);
    }
}


exports.editDescription=(data,callback)=>{
    try{
     noteModel.editDescription(data,(err,result)=>{
         if(err){
             console.log("error in editdescription(services)");
             callback(err)
         }else{
             console.log("editdescription in service");
             callback(null,result)
         }
     })
    }catch(err){
        console.log("error in services",err);        
    }
}














/*
exports.createArchiveNote=(paramID,paramData,callback)=>{
    try{
    noteModel.createArchiveNote(paramID,paramData,(err,result)=>{
        if(err)
        {
            console.log("error in creating archive(services)");
            callback(err)
        }
        else
        {
            console.log("in service",result);
            callback(null,result)
        }

    })
}
catch(err){
    console.log('error in services',err);
}
}
*/




