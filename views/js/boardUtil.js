const board = new window.Board.prototype.constructor();

function init() {
    renderBoard(board);
    toggleHighlightedTiles(true);

    setTimeout(function () {
        toggleHighlightedTiles(false);
        rotateBoard();
        board.isClickable = true;
    }, 3000);
}

function renderBoard(board) {
    let boardElement = document.getElementById("game-table");

    for (let i = 0; i < board.getTilesY(); i++) {
        let row = document.createElement('tr');
        row.setAttribute('class', 'game-table-row');
        for (let j = 0; j < board.getTilesX(); j++) {
            let tileElement = document.createElement('td');
            let buttonElement = document.createElement('button');
            buttonElement.setAttribute('class', 'game-table-button btn');
            buttonElement.setAttribute('id', `${j}${i}`);
            buttonElement.setAttribute('onclick', "onTileClick(event, this.attributes)");

            tileElement.appendChild(buttonElement);
            tileElement.setAttribute('class', 'game-table-element');
            row.appendChild(tileElement);
        }
        boardElement.appendChild(row);
    }

    let tilesLabel = document.getElementById("tiles-label");
    tilesLabel.textContent = `TILES ${board.getHighlightedTiles().length}`;

    let scoreLabel = document.getElementById("score-label");
    scoreLabel.textContent = `SCORE ${board.getScore()}`;
}

function toggleHighlightedTiles(isHidden = false) {
    let matrix = board.getMemoryMatrix();

    for (let i = 0; i < board.getTilesY(); i++) {
        for (let j = 0; j < board.getTilesX(); j++) {
            if (isHidden) {
                let tile = document.getElementById(`${j}${i}`).parentElement;
                if (matrix[i][j]) {
                    tile.setAttribute('class', 'game-table-element highlighted');
                }
            } else {
                let tile = document.getElementById(`${j}${i}`).parentElement;
                if (matrix[i][j]) {
                    tile.setAttribute('class', 'game-table-element');
                }
            }
        }
    }
}

function onTileClick(event, attributes) {
    if (board.isClickable) {
        event.preventDefault();
        let tile = document.getElementById(attributes.id.value).parentElement;
        let curScore = board.getScore();

        if (board.getHighlightedTiles().includes(attributes.id.value) && !board.getSelectedTiles().includes(attributes.id.value)) {

            board.addSelectedTile(attributes.id.value);
            tile.setAttribute('class', 'game-table-element highlighted');

            board.setScore(curScore + 1);
            board.setTilesLeft(board.getTilesLeft() - 1);
            onScoreUpdate();

            if (board.getTilesLeft() == 0) {
                onBoardSolved();
            }

        } else if (board.getSelectedTiles().includes(attributes.id.value)) {} else {
            tile.setAttribute('class', 'game-table-element wrong-tile');
            if (curScore >= 1) {
                board.setScore(curScore - 1);
                onScoreUpdate();
            }
            if (board.getScore() < 1) {
                terminateGame();
            }
        }
    }
}

function onScoreUpdate() {
    let scoreLabel = document.getElementById('score-label');
    scoreLabel.textContent = `SCORE ${board.getScore()}`
}

function terminateGame() {
    board.isClickable = false;
    toggleHighlightedTiles(true);
}

function rotateBoard() {
    let gameBoard = document.getElementById("game-table");
    gameBoard.setAttribute('class', 'spun-game-table');
}

function onTerminateClick(event) {
    event.preventDefault();
    let confirmation = confirm("Are you sure you want to terminate the game?");
    if (confirmation) {
        localStorage.setItem('score', board.getScore());
        location.href = './summary.html';
    }
}

function onRestartClick(event) {
    event.preventDefault();
    location.href = './index.html';
}

function onBoardSolved() {
    board.isClickable = false;
    let curTilesX = board.getTilesX();
    let curTilesY = board.getTilesY();
    let curHighlightedTiles = board.getHighlightedTiles().length;

    let difficultyCategory = Math.floor(Math.random() * Math.floor(8));
    
    switch(difficultyCategory) {
        case 0:
        case 1:
            board.generateMemoryMatrix(curTilesX + 1, curTilesY, curHighlightedTiles);
            console.log(curTilesX+1, curTilesY, curHighlightedTiles);
            break;
        case 2:
        case 3:
            board.generateMemoryMatrix(curTilesX, curTilesY + 1, curHighlightedTiles);
            console.log(curTilesX, curTilesY+1, curHighlightedTiles);
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            board.generateMemoryMatrix(curTilesX, curTilesY, curHighlightedTiles + 1);
            console.log(curTilesX, curTilesY, curHighlightedTiles+1);
            break;
    }

    cleanUpBoard();

    init();
}

function cleanUpBoard() {
    let gameTable = document.getElementById('game-table');
    gameTable.className = '';

    while (gameTable.firstChild) {
        gameTable.removeChild(gameTable.firstChild);
    }
}


let curLocation = location.href.split('/')[location.href.split('/').length - 1];

if (curLocation === "index.html") {
    init();
}