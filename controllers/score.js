const Score = require('../models/score');

function createScore(scoreEntry) {
    let dbEntry = new Score(scoreEntry);

    console.log(`Adding ${dbEntry} to the database...`);

    return new Promise((resolve, reject) => {
        dbEntry.save((err) => {
            if (err) reject(err);
            resolve("Entry added successfully");
        })
    })
}

function listAllScores() {
    return new Promise((resolve, reject) => {
        Score.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    });
}

module.exports.createScore = createScore;
module.exports.listAllScores = listAllScores;