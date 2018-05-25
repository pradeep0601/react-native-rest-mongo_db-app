const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbConfig = require('./config/dbConfig');
const index = require('./routes/index');
const smartshopping = require('./routes/smartshopping');

const app = express();
const port = 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log('Successfully connected to the database..');    
}).catch(err => {
    console.log(`Could not connect to the database. Exiting now...with error: ${err}`);
    process.exit();
});

// Launch the smart shopping server on port 3000
const server = app.listen(port, () => {
  const { address } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

//routes
app.use('/', index);
app.use('/v1/shopping', smartshopping);
