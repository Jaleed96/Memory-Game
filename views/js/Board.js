function Board(tilesX = 5, tilesY = 5, tilesToHighlight = 4) {
    this.tilesToHighlight = tilesToHighlight;
    this.matrix = this.createMemoryMatrix(tilesX, tilesY, tilesToHighlight);
    this.score = 0;
    this.isClickable = false;
}

Board.prototype.createMemoryMatrix = function(tilesX, tilesY, tilesToHighlight) {
    let matrix = [];
    let highlightedTiles = [];

    for (let i = 0; i < tilesToHighlight; i++) {
        let iNum = Math.floor(Math.random() * Math.floor(tilesY));
        let jNum = Math.floor(Math.random() * Math.floor(tilesX));
        highlightedTiles.push(`${jNum}${iNum}`);
    }

    for (let i = 0; i < tilesY; i++) {
        matrix.push([]);
        for (let j = 0; j < tilesX; j++) {
            if (highlightedTiles.includes(`${j}${i}`)) {
                matrix[i].push(true);
            } else {
                matrix[i].push(false);
            }
        }
    }

    return matrix;
}

Board.prototype.getTilesX = function() {
    return this.matrix[0].length;
}

Board.prototype.getTilesY = function() {
    return this.matrix.length;
}

Board.prototype.getTilesHighlighted = function() {
    return this.tilesToHighlight;
}

Board.prototype.getMemoryMatrix = function() {
    return this.matrix;
}

Board.prototype.getScore = function() {
    return this.score;
}

Board.prototype.setScore = function(score) {
    this.score = score;
}

window.Board = Board;