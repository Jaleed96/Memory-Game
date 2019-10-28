const baseUrl = 'https://memory-game-256104.appspot.com'

function renderLeaderboard() {
    const leaderBoardTable = document.getElementById('leaderboard-table');

    getScores().then((response) => {
        let latestEntry;
        let index;
        for (let i = 0; i < response.length; i++) {
            if (i < 5) {
                let scoreRow = document.createElement('tr');
                scoreRow.setAttribute('class', 'score-row');

                let scorePosition = document.createElement('td');
                scorePosition.textContent = i + 1;

                let score = document.createElement('td');
                score.textContent = response[i].score;

                let playerName = document.createElement('td');
                playerName.textContent = response[i].name;

                scoreRow.appendChild(scorePosition);
                scoreRow.appendChild(playerName);
                scoreRow.appendChild(score);
                leaderBoardTable.appendChild(scoreRow);
            }
            if (!latestEntry) latestEntry = response[i];
            if (latestEntry.timestamp < response[i].timestamp) {
                latestEntry = response[i];
                index = i;
            }
        }
        renderCurScore(latestEntry, index);
        console.log(latestEntry);
    }).catch((error) => {
        console.error(error);
    });
}

function renderCurScore(entry, i) {
    let rank = document.getElementById('cur-score-rank');
    let name = document.getElementById('cur-score-name');
    let score = document.getElementById('cur-score');

    rank.textContent = i + 1;
    name.textContent = entry.name;
    score.textContent = entry.score;
}

async function getScores() {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors'
    }

    const request = await fetch(`${baseUrl}/score`, options).catch(e => Promise.reject(e));
    const response = await request.json().catch(e => Promise.reject(e));

    return Promise.resolve(response);
}

async function postScore(player, score) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": player,
            "score": score
        })
    };

    const response = await fetch(`${baseUrl}/score`, options).catch(e => Promise.reject(e));

    return Promise.resolve(response);
}

renderLeaderboard();