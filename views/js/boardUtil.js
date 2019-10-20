function init() {
    const board = new window.Board.prototype.constructor();
    renderBoard(board);
}

function renderBoard(board) {
    let matrix = board.getMemoryMatrix();
    let boardElement = document.getElementById("game-table");

    for (let i = 0; i < board.getTilesY(); i++) {
        let row = document.createElement('tr');
        row.setAttribute('class', 'game-table-row');
        for (let j = 0; j < board.getTilesX(); j++) {
            let tileElement = document.createElement('td');
            tileElement.textContent = '|';

            if (matrix[i][j]) {
                tileElement.setAttribute('class', 'game-table-element highlighted');
            } else {
                tileElement.setAttribute('class', 'game-table-element');
            }
            row.appendChild(tileElement);
        }
        boardElement.appendChild(row);
    }
}

init();