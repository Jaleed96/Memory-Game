const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});

app.get('/score', (req, res) => {
    
});

app.post('/score', (req, res) => {
    
});