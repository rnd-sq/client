import findStart from "./findStart";

// @ts-check
export default class Player {
    /**
     * @type {number}
     * @private
     */
    moves;

    /**
     * @readonly
     * @type {Field}
     * @private
     */
    map;

    /**
     * @type {Position}
     * @private
     */
    playerPos;

    /**
     * @private
     * @type {Direction}
     */
    currentDirection;

    /**
     * Check whether the player touched the X
     * @type {boolean}
     * @private
     */
    lose;

    /**
     * Check whether the player has reached the end
     * @type {boolean}
     * @private
     */
    win;

    /**
     * Create a player
     * @param {Field} map 
     * @param {Position} startPos 
     * @param {Direction} direction 
     * @param {number} movesLeft
     */
    constructor(map, direction = "down", movesLeft = 0) {
        this.map = map;
        this.playerPos = findStart(map);
        this.currentDirection = direction;
        this.moves = movesLeft;
        this.lose = false;
        this.win = false;
    }

    /**
     * Set the position of the player
     * @param {Position} pos
     */
    setPosition(pos) {
        this.playerPos = pos;
    }

    /**
     * Restart the game
     */
    restart() {
        this.lose = false;
        this.win = false;
        this.setPosition(findStart(this.map));
        this.setMovesLeft(0);
    }

    /**
     * Check whether the player has touched X
     */
    hasLost() {
        return this.lose;
    }

    /**
     * Check whether the player has reached the end
     */
    hasWin() {
        return this.win;
    }

    /**
     * @param {number} moves
     */
    setMovesLeft(moves) {
        this.moves = Math.abs(moves);
    }

    /**
     * Get the moves left that the player has
     * @readonly
     */
    get movesLeft() {
        return this.moves;
    }

    /**
     * Get the current position of the player
     * @readonly
     */
    get position() {
        return this.playerPos;
    }

    /**
     * @readonly
     */
    get field() {
        return this.map;
    }

    /**
     * Go to the next position
     * @param {Direction} direction
     */
    go(direction) {
        if (this.moves === 0 || !this.move(direction))
            return false;

        this.moves--;

        // If touch X, game over
        if (this.map[this.playerPos.row][this.playerPos.col] === "x" && this.moves === 0) 
            return (this.lose = true);

        // If reach the end, game win
        if (this.map[this.playerPos.row][this.playerPos.col] === "win")
            return (this.win = true);

        // Successfully move
        return true;
    }

    /**
     * Move the player to another position
     * @param {Direction} direction
     * @private 
     */
    move(direction) {
        if (this.isOpposite(this.currentDirection, direction))
            return false;

        switch (direction) {
            case "up":
                return this.moveUp();
            case "down":
                return this.moveDown();
            case "left":
                return this.moveLeft();
            case "right":
                return this.moveRight();
        }
    }

    /**
     * Move the player to the right
     * @private
     */
    moveRight() {
        if (this.checkPosition({ row: this.playerPos.row, col: this.playerPos.col + 1 })) {
            this.playerPos.col++;
            this.currentDirection = "right";
            return true;
        }
        return false;
    }

    /**
     * Move the player to the downwards
     * @private
     */
    moveDown() {
        if (this.checkPosition({ row: this.playerPos.row + 1, col: this.playerPos.col })) {
            this.playerPos.row++;
            this.currentDirection = "down";
            return true;
        }
        return false;
    }

    /**
     * Move the player upwards
     * @private
     */
    moveUp() {
        if (this.checkPosition({ row: this.playerPos.row - 1, col: this.playerPos.col })) {
            this.playerPos.row--;
            this.currentDirection = "up";
            return true;
        }
        return false;
    }

    /**
     * Move the player to the left
     * @private
     */
    moveLeft() {
        if (this.checkPosition({ row: this.playerPos.row, col: this.playerPos.col - 1 })) {
            this.playerPos.col--;
            this.currentDirection = "left";
            return true;
        }
        return false;
    }

    /**
     * Check whether the player can move to the next position
     * @param {Position} position 
     * @private
     */
    checkPosition(position) {
        return this.map[position.row] &&
            this.map[position.row][position.col] &&
            this.map[position.row][position.col] !== "empty";
    }

    /**
     * Check whether two direction is opposite
     * @param {Direction} direction1 
     * @param {Direction} direction2 
     * @private
     */
    isOpposite(direction1, direction2) {
        return (direction1 === "up" && direction2 === "down") ||
            (direction1 === "down" && direction2 === "up") ||
            (direction1 === "left" && direction2 === "right") ||
            (direction1 === "right" && direction2 === "left");
    }
}