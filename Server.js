const express = require('express');         
const bodyParser = require('body-parser');  
const app = express();                     
const hbs = require('hbs');                
const path = require('path');               


app.use(bodyParser.json())                         
app.use(bodyParser.urlencoded({ extended: true }))  

app.set('views',path.join(__dirname,'views'));             
app.set('view engine', 'hbs');                            
app.use('/assets',express.static(__dirname + '/public'));   


const dbConnect = require('./config/connect.js');
const mongoose = require('mongoose');


mongoose.connect(dbConnect.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the MongoDB database");    
}).catch(err => {
    console.log('Unable to connect to the MongoDB database', err);
    process.exit();
});

require('./app/routes/All.routes.js')(app);


app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

/*Brief Description on the database design and modeling: There are three collections 
in the database Exam, clients,therapists,and sessions. For the session collection the 
data is normal fields in the documents .But for the clients and therapists collections 
i took an embedded data modelling approach, this was suitable for both the client and 
the therapists as each of them would have an unique address. So within each document 
in the collections they both have the standard (Title,First Name(S), surname,home phone, 
mobile phone and email ) as fields but also have an AddressHome object embedded in the 
document containing their address(Address Line 1, Address Line 2, Town, City/county, Eircode). 
Also for the client collection the document has another embedded object in the document as the database needs 
the hold additional client information (DOB, Guardian if under 18 , Permission for message,Date created Marital status , and referred by).
Each Collection will have 5 documents of sample data each.

Browser Description: This solution works in both firefox and chrome, Windows(OS), Browser Version(Chrome):81.0.4044.138*/