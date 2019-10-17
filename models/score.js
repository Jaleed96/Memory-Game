const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: String,
    score: Number,
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;