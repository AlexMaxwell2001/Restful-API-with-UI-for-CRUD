const Therapist = require('../models/therapist.model.js');
const Client = require('../models/client.model.js');
const Session = require('../models/session.model.js');

//When the app is in the root location retrieve all results from the database, these are used to render the view
exports.root = (req, res) => {
    res.render('Connect_view')
};

//The following search functions are used for the database search for the table and rendering the view
//This function is to search the database by a specified title
//test
exports.searchTitle = (req, res) => {
    var search = req.params.s;
    console.log("Searching Title: "+search)
    Client.find({ Title: new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified first names
exports.searchFirst = (req, res) => {
    var search = req.params.s;
    console.log("Searching First Names: "+search)
    Client.find({ FirstNames: new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Surname
exports.searchSur = (req, res) => {
    var search = req.params.s;
    console.log("Searching Surname: "+search)
    Client.find({ Surname: new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Mobile phone number
exports.searchMob = (req, res) => {
    var search = req.params.s;
    console.log("Searching Mobile Number: "+search)
    Client.find({ MobilePhone: new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Home phone number
exports.searchHome = (req, res) => {
    var search = req.params.s;
    console.log("Searching Home: "+search)
    Client.find({ HomePhone
        : new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Email
exports.searchEmail = (req, res) => {
    var search = req.params.s;
    console.log("Searching Email: "+search)
    Client.find({ Email: new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Address Line 1
exports.searchAd1 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Address Line 1: "+search)
    Client.find({ "AddressHome.AddressLine1": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Address Line 2
exports.searchAd2 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Address Line 2: "+search)
    Client.find({ "AddressHome.AddressLine2": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified town
exports.searchTown = (req, res) => {
    var search = req.params.s;
    console.log("Searching Town: "+search)
    Client.find({ "AddressHome.Town": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified City/county
exports.searchCC = (req, res) => {
    var search = req.params.s;
    console.log("Searching City/county: "+search)
    Client.find({ "AddressHome.countyORcity": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified eircode
exports.searchEE = (req, res) => {
    var search = req.params.s;
    console.log("Searching EIRCODE: "+search)
    Client.find({ "AddressHome.EIRCODE": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Date of birth
exports.searchDOB = (req, res) => {
    var search = req.params.s;
    console.log("Searching DOB: "+search)
    Client.find({ "AddPerDets.DOB": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Guardian name
exports.searchG = (req, res) => {
    var search = req.params.s;
    console.log("Searching Guardian name if under 18: "+search)
    Client.find({ "AddPerDets.GuardianIfUnder18": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified permission
exports.searchPFM = (req, res) => {
    var search = req.params.s;
    console.log("Searching Permission For a phone Message: "+search)
    Client.find({ "AddPerDets.PermissionForMessage": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Date of Record creation
exports.searchDC = (req, res) => {
    var search = req.params.s;
    console.log("Searching Date Created: "+search)
    Client.find({ "AddPerDets.DateCreated": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified Marital status
exports.searchMS = (req, res) => {
    var search = req.params.s;
    console.log("Searching Marital Status: "+search)
    Client.find({ "AddPerDets.MaritalStatus": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function is to search the database by a specified person Referred by
exports.searchRB = (req, res) => {
    var search = req.params.s;
    console.log("Searching Referred By: "+search)
    Client.find({ "AddPerDets.ReferredBy": new RegExp(search,"ig")})
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};



//This function is for creating a new client
exports.createClient = (req, res) => {
    // request can't be empty for required fields
    if(!req.body.Title || !req.body.FirstNames|| !req.body.Surname || !req.body.MobilePhone || !req.body.HomePhone|| !req.body.Email) {
        return res.status(400).send({
            message: "Client content cannot be empty!"
        });
    }

    //construct new client
    const client = new Client({
        Title: req.body.Title,
        FirstNames: req.body.FirstNames,
        Surname: req.body.Surname,
        MobilePhone: req.body.MobilePhone,
        HomePhone: req.body.HomePhone,
        Email: req.body.Email,
        "AddressHome.AddressLine1": req.body.AddressLine1,
        "AddressHome.AddressLine2": req.body.AddressLine2,
        "AddressHome.Town": req.body.Town,
        "AddressHome.countyORcity": req.body.countyORcity,
        "AddressHome.EIRCODE": req.body.EIRCODE,
        "AddPerDets.DOB":req.body.DOB,
        "AddPerDets.GuardianIfUnder18":req.body.GuardianIfUnder18,
        "AddPerDets.PermissionForMessage":req.body.PermissionForMessage,
        "AddPerDets.DateCreated":req.body.DateCreated,
        "AddPerDets.MaritalStatus":req.body.MaritalStatus,
        "AddPerDets.ReferredBy":req.body.ReferredBy
    });

    //save it to the database
    client.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Client."
        });
    });
};


//This function finds all of the clients 
exports.findAllClient = (req, res) => {
    Client.find()
    .then(Clients => {
        res.render('client_view',{
            results: Clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

//This function updates a document specified by an id in theh request
exports.updateClient = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Client content cannot be empty"
        });
    }


    Client.findByIdAndUpdate(req.params._id, {
        Title: req.body.Title,
        FirstNames: req.body.FirstNames,
        Surname: req.body.Surname,
        MobilePhone: req.body.MobilePhone,
        HomePhone: req.body.HomePhone,
        Email: req.body.Email,
        "AddressHome.AddressLine1": req.body.AddressLine1,
        "AddressHome.AddressLine2": req.body.AddressLine2,
        "AddressHome.Town": req.body.Town,
        "AddressHome.countyORcity": req.body.countyORcity,
        "AddressHome.EIRCODE": req.body.EIRCODE,
        "AddPerDets.DOB":req.body.DOB,
        "AddPerDets.GuardianIfUnder18":req.body.GuardianIfUnder18,
        "AddPerDets.PermissionForMessage":req.body.PermissionForMessage,
        "AddPerDets.DateCreated":req.body.DateCreated,
        "AddPerDets.MaritalStatus":req.body.MaritalStatus,
        "AddPerDets.ReferredBy":req.body.ReferredBy
    }, 
       { new: true })  
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });               
        }
        return res.status(500).send({
            message: "Error updating Client with id " + req.params._id
        });
    });
};


//This function deletes a client based on request id
exports.deleteClient = (req, res) => {
    Client.findByIdAndRemove(req.params._id)
    .then(client => {
        if(!client) 
        {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });
        }
        res.send({message: "Client deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Client with id " + req.params._id
        });
    });
};

//THERAPIST
//This function is to search the database by a specified Title
exports.searchTitleTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Title: "+search)
    Therapist.find({ Title: new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified First Name(s)
exports.searchFirstTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching First Names: "+search)
    Therapist.find({ FirstNames: new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified Surname
exports.searchSurTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Surname: "+search)
    Therapist.find({ Surname: new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified Mobile phone number
exports.searchMobTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Mobile Number: "+search)
    Therapist.find({ MobilePhone: new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified Home phone number
exports.searchHomeTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Home: "+search)
    Therapist.find({ HomePhone: new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified Email
exports.searchEmailTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Email: "+search)
    Therapist.find({ Email: new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified Address Line 1
exports.searchAd1Therapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Address Line 1: "+search)
    Therapist.find({ "AddressHome.AddressLine1": new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified Address Line 2
exports.searchAd2Therapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Address Line 2: "+search)
    Therapist.find({ "AddressHome.AddressLine2": new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified Town
exports.searchTownTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching Town: "+search)
    Therapist.find({ "AddressHome.Town": new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified City/County
exports.searchCCTherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching City/county: "+search)
    Therapist.find({ "AddressHome.countyORcity": new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function is to search the database by a specified eircode
exports.searchEETherapist = (req, res) => {
    var search = req.params.s;
    console.log("Searching EIRCODE: "+search)
    Therapist.find({ "AddressHome.EIRCODE": new RegExp(search,"ig")})
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function creates a new Therapist based on the create request body
exports.createTherapist = (req, res) => {
    // Create if the required fields are not empty
    if(!req.body.Title || !req.body.FirstNames|| !req.body.Surname || !req.body.MobilePhone || !req.body.HomePhone|| !req.body.Email || !req.body.AddressLine1  || !req.body.Town|| !req.body.countyORcity ) {
        return res.status(400).send({
            message: "Therapist content cannot be empty!"
        });
    }

    //Take the information from the request body to build a new Therapist 
    const therapist = new Therapist({
        Title: req.body.Title,
        FirstNames: req.body.FirstNames,
        Surname: req.body.Surname,
        MobilePhone: req.body.MobilePhone,
        HomePhone: req.body.HomePhone,
        Email: req.body.Email,
        "AddressHome.AddressLine1": req.body.AddressLine1,
        "AddressHome.AddressLine2": req.body.AddressLine2,
        "AddressHome.Town": req.body.Town,
        "AddressHome.countyORcity": req.body.countyORcity,
        "AddressHome.EIRCODE": req.body.EIRCODE
    });

    //save it to the database
    therapist.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Therapist."
        });
    });
};

//This function finds all Therapist in the collection 
exports.findAllTherapist = (req, res) => {
    Therapist.find()
    .then(Therapists => {
        res.render('therapist_view',{
            results: Therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

//This function updates a specific Therapist based on the update request id
exports.updateTherapist = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Therapist content cannot be empty"
        });
    }

    //Take information from the request body
    Therapist.findByIdAndUpdate(req.params._id, {
        Title: req.body.Title,
        FirstNames: req.body.FirstNames,
        Surname: req.body.Surname,
        MobilePhone: req.body.MobilePhone,
        HomePhone: req.body.HomePhone,
        Email: req.body.Email,
        "AddressHome.AddressLine1": req.body.AddressLine1,
        "AddressHome.AddressLine2": req.body.AddressLine2,
        "AddressHome.Town": req.body.Town,
        "AddressHome.countyORcity": req.body.countyORcity,
        "AddressHome.EIRCODE": req.body.EIRCODE
    }, 
       { new: true })  
    .then(therapist => {
        if(!therapist) {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });
        }
        res.send(therapist);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });               
        }
        return res.status(500).send({
            message: "Error updating Therapist with id " + req.params._id
        });
    });
};


//This function Deletes a Specific Therapist per the delete request id
exports.deleteTherapist = (req, res) => {
    Therapist.findByIdAndRemove(req.params._id)
    .then(therapist => {
        if(!therapist) 
        {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });
        }
        res.send({message: "Therapist deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Therapist with id " + req.params._id
        });
    });
};




//Sessions
////This function is to search the database by a specified Date
exports.searchDate = (req, res) => {
    var search = req.params.s;
    console.log("Searching Date: "+search)
    Session.find({ SessionDate: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function is to search the database by a specified Time
exports.searchTime = (req, res) => {
    var search = req.params.s;
    console.log("Searching Time: "+search)
    Session.find({ SessionTime: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};


//This function is to search the database by a specified Clients names
exports.searchClients = (req, res) => {
    var search = req.params.s;
    console.log("Searching Clients: "+search)
    Session.find({ Clients: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function is to search the database by a specified Therapist name
exports.searchThera = (req, res) => {
    var search = req.params.s;
    console.log("Searching Therapist: "+search)
    Session.find({ Therapist: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function is to search the database by a specified Fee
exports.searchFee = (req, res) => {
    var search = req.params.s;
    console.log("Searching Fee: "+search)
    Session.find({ Fee: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function is to search the database by a specified Num
exports.searchNum = (req, res) => {
    var search = req.params.s;
    console.log("Searching Session number: "+search)
    Session.find({ SessionNumber: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

////This function is to search the database by a specified Duration
exports.searchDuration = (req, res) => {
    var search = req.params.s;
    console.log("Searching Session Duration: "+search)
    Session.find({ SessionDuration: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function is to search the database by a specified Type
exports.searchType = (req, res) => {
    var search = req.params.s;
    console.log("Searching Session Type: "+search)
    Session.find({ SessionType: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function is to search the database by a specified Flag
exports.searchFlag = (req, res) => {
    var search = req.params.s;
    console.log("Searching Issue Flag: "+search)
    Session.find({ IssueFlag: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function is to search the database by a specified Session notes
exports.searchNotes = (req, res) => {
    var search = req.params.s;
    console.log("Searching Session Notes: "+search)
    Session.find({ SessionNotes: new RegExp(search,"ig")})
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function creates a new session per the request
exports.createSession = (req, res) => {
    //Only create if the required fields are filled for the request
    if(!req.body.SessionDate || !req.body.SessionTime|| !req.body.Clients || !req.body.Therapist || !req.body.Fee|| !req.body.SessionNumber|| !req.body.SessionDuration || !req.body.SessionType || !req.body.IssueFlag|| !req.body.SessionNotes) {
        return res.status(400).send({
            message: "Session content cannot be empty!"
        });
    }

 
    //Construct a new session and retrieve information from the request
    const session = new Session({
        SessionDate: req.body.SessionDate,
        SessionTime: req.body.SessionTime,
        Clients: req.body.Clients,
        Therapist: req.body.Therapist,
        Fee: req.body.Fee,
        SessionNumber: req.body.SessionNumber,
        SessionDuration: req.body.SessionDuration,
        SessionType: req.body.SessionType,
        IssueFlag: req.body.IssueFlag,
        SessionNotes: req.body.SessionNotes
    });

    //save it to the database
    session.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Session."
        });
    });
};


//This function finds all Sessions in the collection
exports.findAllSession = (req, res) => {
    Session.find()
    .then(Sessions => {
        res.render('session_view',{
            results: Sessions
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

//This function updates a specified session based on the request id 
exports.updateSession = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Session content cannot be empty"
        });
    }

    //update by retrieving the new information from the update request
    Session.findByIdAndUpdate(req.params._id, {
        SessionDate: req.body.SessionDate,
        SessionTime: req.body.SessionTime,
        Clients: req.body.Clients,
        Therapist: req.body.Therapist,
        Fee: req.body.Fee,
        SessionNumber: req.body.SessionNumber,
        SessionDuration: req.body.SessionDuration,
        SessionType: req.body.SessionType,
        IssueFlag: req.body.IssueFlag,
        SessionNotes: req.body.SessionNotes
    }, 
       { new: true })  
    .then(session => {
        if(!session) {
            return res.status(404).send({
                message: "Session not found with id " + req.params._id
            });
        }
        res.send(session);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Session not found with id " + req.params._id
            });               
        }
        return res.status(500).send({
            message: "Error updating Session with id " + req.params._id
        });
    });
};

//This function deletes a session by a specified id
exports.deleteSession = (req, res) => {
    Session.findByIdAndRemove(req.params._id)
    .then(session => {
        if(!session) 
        {
            return res.status(404).send({
                message: "Session not found with id " + req.params._id
            });
        }
        res.send({message: "Session deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Session not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Session with id " + req.params._id
        });
    });
};
