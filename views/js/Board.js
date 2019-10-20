function Board(tilesX = 5, tilesY = 5, tilesToHighlight = 4) {
    this.tilesToHighlight = tilesToHighlight;
    this.matrix = this.createMemoryMatrix(tilesX, tilesY, tilesToHighlight);
    this.score = 0;
}

Board.prototype.createMemoryMatrix = function(tilesX, tilesY, tilesToHighlight) {
    let matrix = [];

    for (let i = 0; i < tilesY; i++) {
        matrix.push([]);
        for (let j = 0; j < tilesX; j++) {
            if (j % 2 != 0) {
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