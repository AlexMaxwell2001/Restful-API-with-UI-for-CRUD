module.exports = (app) => {
    const Controller = require('../controllers/All.controllers.js');
    //This route is for the root location
    app.get('/', Controller.root);
    //These Roots are the basic CRUD operation Create,Retrieve,Update and Delete
    app.post('/Clients', Controller.createClient);
    app.get('/Clients', Controller.findAllClient);
    app.put('/Clients/:_id', Controller.updateClient);
    app.delete('/Clients/:_id', Controller.deleteClient);
    app.post('/Therapists', Controller.createTherapist);
    app.get('/Therapists', Controller.findAllTherapist);
    app.put('/Therapists/:_id', Controller.updateTherapist);
    app.delete('/Therapists/:_id', Controller.deleteTherapist);
    app.post('/Sessions', Controller.createSession);
    app.get('/Sessions', Controller.findAllSession);
    app.put('/Sessions/:_id', Controller.updateSession);
    app.delete('/Sessions/:_id', Controller.deleteSession);
    
    //These routes are for the database search functionality
    app.get('/Clients/Title/:s', Controller.searchTitle); 
    app.get('/Clients/FirstNames/:s', Controller.searchFirst); 
    app.get('/Clients/Surname/:s', Controller.searchSur);
    app.get('/Clients/MobilePhone/:s', Controller.searchMob);
    app.get('/Clients/HomePhone/:s', Controller.searchHome);
    app.get('/Clients/Email/:s', Controller.searchEmail);
    app.get('/Clients/AddressHome.AddressLine1/:s', Controller.searchAd1);
    app.get('/Clients/AddressHome.AddressLine2/:s', Controller.searchAd2);  
    app.get('/Clients/AddressHome.Town/:s', Controller.searchTown);  
    app.get('/Clients/AddressHome.cityORcounty/:s', Controller.searchCC);
    app.get('/Clients/AddressHome.EIRCODE/:s', Controller.searchEE);
    app.get('/Clients/AddPerDets.DOB/:s', Controller.searchDOB);
    app.get('/Clients/AddPerDets.GuardianIfUnder18/:s', Controller.searchG);  
    app.get('/Clients/AddPerDets.PermissionForMessage/:s', Controller.searchPFM);  
    app.get('/Clients/AddPerDets.DateCreated/:s', Controller.searchDC);  
    app.get('/Clients/AddPerDets.MaritalStatus/:s', Controller.searchMS);
    app.get('/Clients/AddPerDets.ReferredBy/:s', Controller.searchRB);

    app.get('/Therapists/Title/:s', Controller.searchTitleTherapist); 
    app.get('/Therapists/FirstNames/:s', Controller.searchFirstTherapist); 
    app.get('/Therapists/Surname/:s', Controller.searchSurTherapist);
    app.get('/Therapists/MobilePhone/:s', Controller.searchMobTherapist);
    app.get('/Therapists/HomePhone/:s', Controller.searchHomeTherapist);
    app.get('/Therapists/Email/:s', Controller.searchEmailTherapist);   
    app.get('/Therapists/AddressHome.AddressLine1/:s', Controller.searchAd1Therapist);
    app.get('/Therapists/AddressHome.AddressLine2/:s', Controller.searchAd2Therapist);  
    app.get('/Therapists/AddressHome.Town/:s', Controller.searchTownTherapist);  
    app.get('/Therapists/AddressHome.cityORcounty/:s', Controller.searchCCTherapist);
    app.get('/Therapists/AddressHome.EIRCODE/:s', Controller.searchEETherapist); 

    app.get('/Sessions/SessionDate/:s', Controller.searchDate); 
    app.get('/Sessions/SessionTime/:s', Controller.searchTime); 
    app.get('/Sessions/Clients/:s', Controller.searchClients);
    app.get('/Sessions/Therapist/:s', Controller.searchThera);
    app.get('/Sessions/Fee/:s', Controller.searchFee);
    app.get('/Sessions/SessionNumber/:s', Controller.searchNum);   
    app.get('/Sessions/SessionDuration/:s', Controller.searchDuration);
    app.get('/Sessions/SessionType/:s', Controller.searchType);  
    app.get('/Sessions/IssueFlag/:s', Controller.searchFlag);  
    app.get('/Sessions/SessionNotes/:s', Controller.searchNotes);
    
}