function Board(tilesX = 5, tilesY = 5, tilesToHighlight = 4) {
    this.matrix = this.generateMemoryMatrix(tilesX, tilesY, tilesToHighlight);
    this.score = 0;
    this.isClickable = false;
    this.tilesLeft = this.highlightedTiles.length;
}

Board.prototype.generateMemoryMatrix = function (tilesX, tilesY, tilesToHighlight) {
    let matrix = [];
    let highlightedTiles = [];

    for (let i = 0; i < tilesToHighlight; i++) {
        let iNum = Math.floor(Math.random() * Math.floor(tilesY));
        let jNum = Math.floor(Math.random() * Math.floor(tilesX));
        
        if (!highlightedTiles.includes(`${jNum}${iNum}`)) {
            highlightedTiles.push(`${jNum}${iNum}`);
        }
    }

    this.highlightedTiles = highlightedTiles;

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

    this.matrix = matrix;

    return matrix;
}

Board.prototype.getTilesX = function () {
    return this.matrix[0].length;
}

Board.prototype.getTilesY = function () {
    return this.matrix.length;
}

Board.prototype.getHighlightedTiles = function () {
    return this.highlightedTiles;
}

Board.prototype.getMemoryMatrix = function () {
    return this.matrix;
}

Board.prototype.getTilesLeft = function () {
    return this.tilesLeft;
}

Board.prototype.getScore = function () {
    return this.score;
}

Board.prototype.setScore = function (score) {
    this.score = score;
}

Board.prototype.setTilesLeft = function (tiles) {
    this.tilesLeft = tiles;
}

window.Board = Board;