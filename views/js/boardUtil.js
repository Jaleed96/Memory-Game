function init() {
    const board = new window.Board.prototype.constructor(7, 7, 8);
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
            let buttonElement = document.createElement('button');
            buttonElement.setAttribute('class', 'game-table-button btn');
            buttonElement.setAttribute('id', `${j}${i}`);
            buttonElement.setAttribute('onclick', "onTileClick(event, this.attributes)");
            
            tileElement.appendChild(buttonElement);

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

function onTileClick(event, attributes) {
    event.preventDefault();
    console.log(attributes.id.value);
}

init();