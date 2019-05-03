
// const noteModel = require('../app/models/note.model')


// // exports.createNote = (data, callback) => {
// //     try {
// //         noteModel.createNote(data, (err, result) => {

// //             if (err) {
// //                 console.log("error in noteservices(createnote)");
// //                 callback(err)
// //             }
// //             else {
// //                 console.log("(addNote) in service");
// //                 callback(null, result)
// //             }
// //         })
// //     }
// //     catch (error) {
// //         console.log("error in services", error);

// //     }
// // }

// exports.createnote = (req, res) => {
//     try {
//         noteModel.CreateNote(req, (err, data) => {
//             if (err) {
//                 console.log("err in service..");
//                 res(err);
//             }
//             else {
//                 console.log("service is working fine");
//                 // myEmitter.on('event', (a, b) => {
//                 //     console.log(a, b, this);
//                 //     // Prints: a b {}
//                 //   });

//                 res(null, data);
//             }
//         })
//     }
//     catch (err) {
//         console.log("error in services:", err);
//     }
// }

// exports.getNotes = (data, callback) => {
//     try {
//         noteModel.getNotes(data, (err, result) => {
//             if (err) {
//                 console.log("error in getNotes(services)");
//                 callback(err)
//             }
//             else {
//                 console.log("(getNotes) in service");
//                 callback(null, result)
//             }
//         })

//     }
//     catch (err) {
//         console.log("error in services", err);
//     }
// }





// exports.updateColor = (paramId, data, callback)=>{
// try {
//     noteModel.updateColor(paramId, data, (err, result) => {
//         if (err) {
//             console.log("error in updating color", err);
//             callback(err)
//         } else {
//             console.log("in service", result);
//             callback(null, result)
//         }
//     })
// } catch (err) {
//     console.log("error in servies", err);
// }
// }


// exports.deleteNote = (data, callback)=>{

// try {
//     noteModel.deleteNote(data, (err, result) => {
//         console.log("in ==>",result);
        
//         if (err) {
//             console.log("error in deleting note", err);
//             callback(err)
//         } else {
//             console.log("in service", result);
//             callback(null, result)
//         }
//     })
// } catch (err) {
//     console.log("error in servies", err);

// }

// }

// exports.editTitle=(data,callback)=>{
//     try{
//         noteModel.editTitle(data,(err,result)=>{
//             if(err){
//             console.log("error in editTitle(services)");
//             callback(err)
//             }else{
//                 console.log(("editTitle method in service"));
//                 callback(null,result)
//             }            
//         })
//     }catch(err){
//         console.log("error in services",err);
//     }
// }


// exports.editDescription=(data,callback)=>{
//     try{
//      noteModel.editDescription(data,(err,result)=>{
//          if(err){
//              console.log("error in editdescription(services)");
//              callback(err)
//          }else{
//              console.log("editdescription in service");
//              callback(null,result)
//          }
//      })
//     }catch(err){
//         console.log("error in services",err);        
//     }
// }














// /*
// exports.createArchiveNote=(paramID,paramData,callback)=>{
//     try{
//     noteModel.createArchiveNote(paramID,paramData,(err,result)=>{
//         if(err)
//         {
//             console.log("error in creating archive(services)");
//             callback(err)
//         }
//         else
//         {
//             console.log("in service",result);
//             callback(null,result)
//         }

//     })
// }
// catch(err){
//     console.log('error in services',err);
// }
// }
// */




var notemodels =  require('../app/models/note.model');

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();


exports.notecreate = (req, res) => {
    try {
        notemodels.CreateNote(req, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                // myEmitter.on('event', (a, b) => {
                //     console.log(a, b, this);
                //     // Prints: a b {}
                //   });

                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}

exports.noteget = (req, res) => {
    try {
        notemodels.getnote(req, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);


    }
}


exports.updatecolor = (paramID, paramData, res) => {
    try {
        notemodels.updatecolor(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}
exports.deleteNote = (req, res) => {
    try {
        notemodels.deleteNote(req, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);

    }
}


exports.isArchived = (paramID, paramData, res) => {
    try {
        notemodels.isArchived(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}


exports.setReminder = (paramID, paramData, res) => {
    try {
        notemodels.setReminder(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}

exports.editTitle = (paramID, paramData, res) => {
    try {
        notemodels.editTitle(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}

exports.editDescription = (paramID, paramData, res) => {
    try {
        notemodels.editDescription(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}


exports.isTrash = (paramID, callback) => {
    console.log("in services", paramID);
    notemodels.getTrashStatus(paramID, (err, status) => {
        if (err) {
            callback(err);
        } else {
            if (status === true) {
                let data = {
                    status: false
                }
                notemodels.isTrashed(paramID, data, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result)
                    }
                })
            } else if (status === false) {
                let data = {
                    status: true
                }
                notemodels.isTrashed(paramID, data, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result)
                    }
                })
            }

        }
    })


}


exports.updatePin = (paramID, paramData, res) => {
    try {
        notemodels.updatePin(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}


exports.updateImage = (paramID, paramData, res) => {
    try {
        notemodels.updateImage(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:", err);
    }
}

exports.saveLabelToNote = (paramData, callback) => {
    console.log("in services", paramData);
    if (paramData.pull) {
        notemodels.deleteLabelToNote(paramData, (err, result) => {
            if (err) {
                callback(err);
            } else {
                return callback(null, result)
            }
        })
    }
    else {

        notemodels.saveLabelToNote(paramData, (err, result) => {
            if (err) {
                callback(err);
            } else {
                return callback(null, result)
            }
        })
    }
}

exports.deleteLabelToNote = (paramData, callback) => {
    console.log("in services", paramData);

    notemodels.deleteLabelToNote(paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}




exports.addLabel = (labelData, callback) => {
    ///  console.log("in services",labelData);

    notemodels.addLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.getLabels = (labelData, callback) => {
    //  console.log("in services",labelData);

    notemodels.getLabels(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.deleteLabel = (labelData, callback) => {
    // console.log("in services",labelData);

    notemodels.deleteLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.updateLabel = (labelData, callback) => {
    //  console.log("in services",labelData);

    notemodels.updateLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.updateqanda = async (qandaData, callback) => {
    //  console.log("in services",labelData);

   await notemodels.updateqanda(qandaData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}



exports.getqandadetail = (qandaData, callback) => {
    //  console.log("in services",labelData);

    notemodels.getqandadetails(qandaData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
