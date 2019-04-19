const noteModel=require('../app/models/note.model')


exports.createNote=(data,callback)=>{
    console.log('1111===>',data.email);
    
    noteModel.addNote(data,(err,result)=>{
        console.log('1111===>',data.email);
        if(err)
        {
            console.log("error in noteservices(createnote");
            callback(err)
        }
        else
        {
            console.log("(addNote) in service",result);
            callback(null,result)
        }
    })
}

exports.getNote=(data,callback)=>{
    noteModel.getNote(data,(err,result)=>{
        if(err){
            console.log("error in getNotes(services)");
            callback(err)
        }
        else{
            console.log("(getNotes) in service",result)
            callback(null,result)
        }
    })

}

exports.getAllNotes=(data,callback)=>{
    console.log('1111===>',data.email);
    noteModel.getAllNotes(data,(err,result)=>{
        console.log('1111===>',data.email);
        if(err){
            console.log("err in getallnotes(services)")
            callback(err)
        }
        else{
            console.log('in service');
            callback(null,result)
        }
    })
}

exports.getTitle=(data,callback)=>{
    noteModel.getTitle(data,(err,result)=>{
        if(err){
            console.log("error in getTitle(services)");
            callback(err)
        }
        else{
            console.log("in service");
            callback(null,result)
        }
    })
}