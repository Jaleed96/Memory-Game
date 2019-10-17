const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Database setup
const DB_PASSWORD = process.env.DB_PASSWORD;
console.log(DB_PASSWORD);
const url = `mongodb+srv://generalUser:${DB_PASSWORD}@mem-game-scores-giphu.gcp.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true} );
// Server configuration

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});

// Express routes

app.get('/score', (req, res) => {
    
});

app.post('/score', (req, res) => {
    
});