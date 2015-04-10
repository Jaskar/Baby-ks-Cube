var Controller = {

    moves : [],
    isTurning : false,

    // Constructor
    init : function(paramCube) {
        this.cube = paramCube;
    },

    // Continue the sequence to the next move
    _nextMove : function () {
        if (typeof this.moves[0] !== 'undefined') {
            this.isTurning = true;
            this.moves[0]();
            this.moves.shift();
        } else {
            this.isTurning = false;
        }
    },

    /** INTERNAL FUNCTIONS TO TURN FACES **/
    _turnFront : function () {
        this.cube.turnFront(function () {
            this.nextMove();
        });
    },
    _turnFrontReverse : function () {
        this.cube.turnFront(function () {
            this.nextMove();
        }, true);
    },
    _turnBack : function () {
        this.cube.turnBack(function () {
            this.nextMove();
        });
    },
    _turnBackReverse : function () {
        this.cube.turnBack(function () {
            this.nextMove();
        }, true);
    },
    _turnRight : function () {
        this.cube.turnRight(function () {
            this.nextMove();
        });
    },
    _turnRightReverse : function () {
        this.cube.turnRight(function () {
            this.nextMove();
        }, true);
    },
    _turnLeft : function () {
        this.cube.turnLeft(function () {
            this.nextMove();
        });
    },
    _turnLeftReverse : function () {
        this.cube.turnLeft(function () {
            this.nextMove();
        }, true);
    },
    _turnUp : function () {
        this.cube.turnUp(function () {
            this.nextMove();
        });
    },
    _turnUpReverse : function () {
        this.cube.turnUp(function () {
            this.nextMove();
        }, true);
    },
    _turnDown : function () {
        this.cube.turnDown(function () {
            this.nextMove();
        });
    },
    _turnDownReverse : function () {
        this.cube.turnDown(function () {
            this.nextMove();
        }, true);
    },


    /** EXTERNAL FUNCTIONS TO CALL MOVEMENTS **/
    scramble : function(number) {
        for (var i = 0; i < number; i++) {
            var rand = Math.floor((Math.random() * 12) + 1);
            switch (rand) {
                case 1:
                    this._turnLeft();
                    break;
                case 2:
                    this._turnLeftReverse();
                    break;
                case 3:
                    this._turnRight();
                    break;
                case 4:
                    this._turnRightReverse();
                    break;
                case 5:
                    this._turnFront();
                    break;
                case 6:
                    this._turnFrontReverse();
                    break;
                case 7:
                    this._turnBack();
                    break;
                case 8:
                    this._turnBackReverse();
                    break;
                case 9:
                    this._turnUp();
                    break;
                case 10:
                    this._turnUpReverse();
                    break;
                case 11:
                    this._turnDown();
                    break;
                case 12:
                    this._turnDownReverse();
                    break;
                default:
                    console.log('Fail to random correct number! >_<" -> ' + rand);
                    break;
            }
        }
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnFront : function() {
        this.moves.push(this._turnFront);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnFrontReverse : function() {
        this.moves.push(this._turnFrontReverse);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnBack : function() {
        this.moves.push(this._turnBack);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnBackReverse : function() {
        this.moves.push(this._turnBackReverse);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnRight : function() {
        this.moves.push(this._turnRight);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnRightReverse : function() {
        this.moves.push(this._turnRightReverse);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnLeft : function() {
        this.moves.push(this._turnLeft);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnLeftReverse : function() {
        this.moves.push(this._turnLeftReverse);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnUp : function() {
        this.moves.push(this._turnUp);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnUpReverse : function() {
        this.moves.push(this._turnUpReverse);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnDown : function() {
        this.moves.push(this._turnDown);
        if (! this.isTurning) {
            this._nextMove();
        }
    },
    turnDownReverse : function() {
        this.moves.push(this._turnDownReverse);
        if (! this.isTurning) {
            this._nextMove();
        }
    }
}
;