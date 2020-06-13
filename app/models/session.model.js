const mongoose = require('mongoose');

//Create the model schema based on the document structure
const SessionsSchema = mongoose.Schema({
    SessionDate: String,
    SessionTime: String,
    Clients:String,
    Therapist:String,
    Fee:String,
    SessionNumber:String,
    SessionDuration:String,
    SessionType:String,
    IssueFlag:String,
    SessionNotes:String

    
});

module.exports = mongoose.model('Session', SessionsSchema);
