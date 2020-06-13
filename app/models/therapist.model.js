const mongoose = require('mongoose');

//Create the model schema based on the document structure
const TherapistsSchema = mongoose.Schema({
    Title: String,
    FirstNames: String,
    Surname:String,
    MobilePhone:String,
    HomePhone:String,
    Email:String,
    "AddressHome.AddressLine1":String,
    "AddressHome.AddressLine2":String,
    "AddressHome.Town":String,
    "AddressHome.countyORcity":String,
    "AddressHome.EIRCODE":String
    
});

module.exports = mongoose.model('Therapist', TherapistsSchema);
