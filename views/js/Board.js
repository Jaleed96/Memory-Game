class Board {
    constructor(tilesX, tilesY, tilesToHighlight) {
        this.tilesX = tilesX;
        this.tilesY = tilesY;
        this.tilesToHighlight = tilesToHighlight;
    }

    getTilesX() {
        return this.tilesX;
    }

    getTilesY() {
        return this.tilesY;
    }

    getTilesHighlighted() {
        return this.tilesToHighlight;
    }
}