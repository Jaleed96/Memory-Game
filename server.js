const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Score = require('./controllers/score');

// Database setup
const DB_PASSWORD = process.env.DB_PASSWORD;
const url = `mongodb+srv://generalUser:${DB_PASSWORD}@mem-game-giphu.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true} ).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error(error);
});
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
    Score.listAllScores().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        console.error(error);
        res.status(404).send(error);
    })
});

app.post('/score', (req, res) => {
    let entry = {
        "timestamp": Date.now(),
        ...req.body
    };

    if (!entry) res.status(400).send("Please enter a valid entry");

    Score.createScore(entry).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        console.error(error);
        res.status(404).send(error);
    })
});