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
    tilesLabel.textContent = `TILES ${board.getTilesHighlighted()}`;

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
        console.log(attributes.id.value);
    }
}

function rotateBoard() {
    let gameBoard = document.getElementById("game-table");
    gameBoard.setAttribute('class', 'spun-game-table')
}

function onTerminateClick(event) {
    event.preventDefault();
}

init();