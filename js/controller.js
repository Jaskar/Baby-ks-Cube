function Controller(cube) {

    this.cube = cube;

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
    var scrambleSequence = [];

    for (var i = 0; i < number; i++) {
        var rand = Math.floor((Math.random() * 12) + 1);
        switch (rand) {
            case 1:
                this.turnLeft();
                scrambleSequence.push("L");
                break;
            case 2:
                this.turnLeftReverse();
                scrambleSequence.push("L'");
                break;
            case 3:
                this.turnRight();
                scrambleSequence.push("R");
                break;
            case 4:
                this.turnRightReverse();
                scrambleSequence.push("R'");
                break;
            case 5:
                this.turnFront();
                scrambleSequence.push("F");
                break;
            case 6:
                this.turnFrontReverse();
                scrambleSequence.push("F'");

                break;
            case 7:
                this.turnBack();
                scrambleSequence.push("B");
                break;
            case 8:
                this.turnBackReverse();
                scrambleSequence.push("B'");
                break;
            case 9:
                this.turnUp();
                scrambleSequence.push("U");
                break;
            case 10:
                this.turnUpReverse();
                scrambleSequence.push("U'");
                break;
            case 11:
                this.turnDown();
                scrambleSequence.push("D");
                break;
            case 12:
                this.turnDownReverse();
                scrambleSequence.push("D'");
                break;
            default:
                console.log('Fail to random correct number! >_<" -> ' + rand);
                break;
        }
    }

    console.log("Scramble :");
    console.log(scrambleSequence);

    if (! this.isTurning) {
        this._nextMove();
    }
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