const baseUrl = 'https://memory-game-256104.appspot.com'

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