// @ts-check
export default class Player {
    /**
     * @readonly
     * @type {Field}
     * @private
     */
    map;

    /**
     * @readonly
     * @type {Position}
     * @private
     */
    startPos;

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
     * Create a player
     * @param {Field} map 
     * @param {Position} startPos 
     * @param {Direction} direction 
     */
    constructor(map, startPos, direction = "down") {
        this.map = map;
        this.startPos = this.playerPos = startPos;
        this.currentDirection = direction;
    }

    /**
     * Move the player to the start position
     */
    restart() {
        this.playerPos = this.startPos;
        return true;
    }

    /**
     * Get the current position of the player
     * @readonly
     */
    get position() {
        return this.playerPos;
    }

    /**
     * Go to the next position
     * @param {Direction} direction
     */
    go(direction) {
        if (!this.move(direction))
            return false;

        // If touch X, game over
        if (this.map[this.playerPos.row][this.playerPos.col] === "x")
            return this.restart();

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