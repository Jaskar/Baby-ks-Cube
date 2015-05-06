function Controller(cube) {

    this.cube = cube;
    this.scrambler = new Scrambler();

    this.moves = [];
    this.isTurning = false;
}

// INTERNAL FUNCTIONS **************************************************************************************************

// Get the cube actual position
Controller.prototype.getFacesColors = function() {
    return this.cube.getFacesColors();
};

// Continue the sequence to the next move
Controller.prototype._nextMove = function () {

    if (typeof this.moves[0] !== 'undefined') {
        this.isTurning = true;
        this.moves[0](this);
        this.moves.shift();
    } else {
        this.isTurning = false;
    }
};

// Turn the faces
Controller.prototype._turnFront = function (that) {
    that.cube.turnFront(function () {
        that._nextMove();
    });
};
Controller.prototype._turnFrontReverse = function (that) {
    that.cube.turnFront(function () {
        that._nextMove();
    }, true);
};
Controller.prototype._turnBack = function (that) {
    that.cube.turnBack(function () {
        that._nextMove();
    });
};
Controller.prototype._turnBackReverse = function (that) {
    that.cube.turnBack(function () {
        that._nextMove();
    }, true);
};
Controller.prototype._turnRight = function (that) {
    that.cube.turnRight(function () {
        that._nextMove();
    });
};
Controller.prototype._turnRightReverse = function (that) {
    that.cube.turnRight(function () {
        that._nextMove();
    }, true);
};
Controller.prototype._turnLeft = function (that) {
    that.cube.turnLeft(function () {
        that._nextMove();
    });
};
Controller.prototype._turnLeftReverse = function (that) {
    that.cube.turnLeft(function () {
        that._nextMove();
    }, true);
};
Controller.prototype._turnUp = function (that) {
    that.cube.turnUp(function () {
        that._nextMove();
    });
};
Controller.prototype._turnUpReverse = function (that) {
    that.cube.turnUp(function () {
        that._nextMove();
    }, true);
};
Controller.prototype._turnDown = function (that) {
    that.cube.turnDown(function () {
        that._nextMove();
    });
};
Controller.prototype._turnDownReverse = function (that) {
    that.cube.turnDown(function () {
        that._nextMove();
    }, true);
};


// EXTERNAL FUNCTIONS TO CALL MOVEMENTS ********************************************************************************

Controller.prototype.scramble = function(number) {
    var _that = this;
    var scrambleSequence = this.scrambler.getScramble();

    scrambleSequence.forEach(function (move) {
        switch (move) {
            case "L":
                _that.turnLeft();
                break;
            case "L'":
                _that.turnLeftReverse();
                break;
            case "R":
                _that.turnRight();
                break;
            case "R'":
                _that.turnRightReverse();
                break;
            case "F":
                _that.turnFront();
                break;
            case "F'":
                _that.turnFrontReverse();
                break;
            case "B":
                _that.turnBack();
                break;
            case "B'":
                _that.turnBackReverse();
                break;
            case "U":
                _that.turnUp();
                break;
            case "U'":
                _that.turnUpReverse();
                break;
            case "D":
                _that.turnDown();
                break;
            case "D'":
                _that.turnDownReverse();
                break;
            default:
                console.log('Fail to random correct number! >_<" -> ' + rand);
                break;
        }
    });

    if (! this.isTurning) {
        this._nextMove();
    }

    return scrambleSequence;
};

Controller.prototype.awesomeScramble = function(name) {

    var _that = this;
    var scrambleSequence = this.scrambler.pattern_3x3(name);

    scrambleSequence.forEach(function (move) {
        switch (move) {
            case "L":
                _that.turnLeft();
                break;
            case "L'":
                _that.turnLeftReverse();
                break;
            case "R":
                _that.turnRight();
                break;
            case "R'":
                _that.turnRightReverse();
                break;
            case "F":
                _that.turnFront();
                break;
            case "F'":
                _that.turnFrontReverse();
                break;
            case "B":
                _that.turnBack();
                break;
            case "B'":
                _that.turnBackReverse();
                break;
            case "U":
                _that.turnUp();
                break;
            case "U'":
                _that.turnUpReverse();
                break;
            case "D":
                _that.turnDown();
                break;
            case "D'":
                _that.turnDownReverse();
                break;
            default:
                console.log('Fail to random correct number! >_<" -> ' + rand);
                break;
        }
    });

    if (! this.isTurning) {
        this._nextMove();
    }

    return scrambleSequence;
};

Controller.prototype.turnFront = function() {
    this.moves.push(this._turnFront);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnFrontReverse = function() {
    this.moves.push(this._turnFrontReverse);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnBack = function() {
    this.moves.push(this._turnBack);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnBackReverse = function() {
    this.moves.push(this._turnBackReverse);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnRight = function() {
    this.moves.push(this._turnRight);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnRightReverse = function() {
    this.moves.push(this._turnRightReverse);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnLeft = function() {
    this.moves.push(this._turnLeft);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnLeftReverse = function() {
    this.moves.push(this._turnLeftReverse);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnUp = function() {
    this.moves.push(this._turnUp);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnUpReverse = function() {
    this.moves.push(this._turnUpReverse);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnDown = function() {
    this.moves.push(this._turnDown);
    if (! this.isTurning) {
        this._nextMove();
    }
};
Controller.prototype.turnDownReverse = function() {
        this.moves.push(this._turnDownReverse);
        if (! this.isTurning) {
            this._nextMove();
        }
    };