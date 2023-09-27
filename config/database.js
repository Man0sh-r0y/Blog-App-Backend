// import mongoose
const mongoose = require('mongoose');

// import environmental variables from our `.env` file
require('dotenv').config();

// Connect to our Database and handle any bad connections
function connectDataBase() {
    // connect to the database
    mongoose.connect(process.env.DataBaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('DataBase Connected Succesfully!'))
    .catch(err => {
        console.log(`DataBase Connection Error: ${err.message}`);
    });
}

// export the module
module.exports = connectDataBase;