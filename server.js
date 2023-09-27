require('dotenv').config(); // import environmental variables from our `.env` file
const express = require('express'); // import express from 'express'
const connectDataBase = require('./config/database'); // import database connection
const routes = require('./routes/router'); // import routes

const app = express();  // create express app


// define port number
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json()); // Parse JSON request bodies

// Mount your router under the /api/v1 prefix
app.use('/api/v1', routes); 

// connect to database
connectDataBase();

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// default route
app.get('/', (req, res) => {
    res.send(`<h1> Backend is running on port ${PORT} </h1>`);
});

