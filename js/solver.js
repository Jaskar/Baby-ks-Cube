function Solver(controller) {

    this.controller = controller;

    this.faceColors = null;

    this.resolveSequence = [];
    this.steps = [
        this.step_edge_0,
        this.step_edge_1,
        this.step_edge_2,
        this.step_edge_3,
        this.step_corner_A,
        this.step_corner_B,
        this.step_corner_C,
        this.step_corner_D,
        this.step_edge_4,
        this.step_edge_5,
        this.step_edge_6,
        this.step_edge_7,
        this.step_edge_8,
        this.step_edge_9,
        this.step_corner_Y,
        this.step_corner_Z
    ];
}

Solver.prototype.solve = function() {
    this.resolveSequence = [];

    this.faceColors = this.controller.getFacesColors();

    var that = this;
    this.steps.forEach(function(step) {
        step(that);
    });

    this.doMoves(that);

    return this.resolveSequence;
};

Solver.prototype.doMoves = function(that) {

    // Minimize the sequence by deleting contrary moves
    //for(var i = this.resolveSequence.length-1; i > 0; i--) {
    //    switch(this.resolveSequence[i]) {
    //        case "U":
    //            if(this.resolveSequence[i-1] == "U'") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "U'":
    //            if(this.resolveSequence[i-1] == "U") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "D":
    //            if(this.resolveSequence[i-1] == "D'") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "D'":
    //            if(this.resolveSequence[i-1] == "D") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "L":
    //            if(this.resolveSequence[i-1] == "L'") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "L'":
    //            if(this.resolveSequence[i-1] == "L") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "R":
    //            if(this.resolveSequence[i-1] == "F'") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "R'":
    //            if(this.resolveSequence[i-1] == "R") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "F":
    //            if(this.resolveSequence[i-1] == "F'") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "F'":
    //            if(this.resolveSequence[i-1] == "F") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "B":
    //            if(this.resolveSequence[i-1] == "B'") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        case "B'":
    //            if(this.resolveSequence[i-1] == "B") {
    //                this.resolveSequence.splice(i-1, 2);
    //                i = this.resolveSequence.length;
    //            }
    //            break;
    //        default:
    //            console.log("Problem during minimize resolve sequence");
    //            break;
    //    }
    //}

    this.resolveSequence.forEach(function(move) {
        switch(move) {
            case "U":
                that.controller.turnUp();
                break;
            case "U'":
                that.controller.turnUpReverse();
                break;
            case "D":
                that.controller.turnDown();
                break;
            case "D'":
                that.controller.turnDownReverse();
                break;
            case "F":
                that.controller.turnFront();
                break;
            case "F'":
                that.controller.turnFrontReverse();
                break;
            case "B":
                that.controller.turnBack();
                break;
            case "B'":
                that.controller.turnBackReverse();
                break;
            case "L":
                that.controller.turnLeft();
                break;
            case "L'":
                that.controller.turnLeftReverse();
                break;
            case "R":
                that.controller.turnRight();
                break;
            case "R'":
                that.controller.turnRightReverse();
                break;
            default:
                console.log("Fail on doMoves.");
                break;
        }
    });
};

// MOVES ***************************************************************************************************************

Solver.prototype.turnUp = function(that, sens) {
    if(sens) {
        that.resolveSequence.push("U");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._upPlanes[0][0];
            that.faceColors._upPlanes[0][0] = that.faceColors._upPlanes[1][0];
            that.faceColors._upPlanes[1][0] = that.faceColors._upPlanes[2][0];
            that.faceColors._upPlanes[2][0] = that.faceColors._upPlanes[2][1];
            that.faceColors._upPlanes[2][1] = that.faceColors._upPlanes[2][2];
            that.faceColors._upPlanes[2][2] = that.faceColors._upPlanes[1][2];
            that.faceColors._upPlanes[1][2] = that.faceColors._upPlanes[0][2];
            that.faceColors._upPlanes[0][2] = that.faceColors._upPlanes[0][1];
            that.faceColors._upPlanes[0][1] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._rightPlanes[2][2];
            that.faceColors._rightPlanes[2][2] = that.faceColors._rightPlanes[1][2];
            that.faceColors._rightPlanes[1][2] = that.faceColors._rightPlanes[0][2];
            that.faceColors._rightPlanes[0][2] = that.faceColors._backPlanes[0][2];
            that.faceColors._backPlanes[0][2] = that.faceColors._backPlanes[1][2];
            that.faceColors._backPlanes[1][2] = that.faceColors._backPlanes[2][2];
            that.faceColors._backPlanes[2][2] = that.faceColors._leftPlanes[0][2];
            that.faceColors._leftPlanes[0][2] = that.faceColors._leftPlanes[1][2];
            that.faceColors._leftPlanes[1][2] = that.faceColors._leftPlanes[2][2];
            that.faceColors._leftPlanes[2][2] = that.faceColors._frontPlanes[2][2];
            that.faceColors._frontPlanes[2][2] = that.faceColors._frontPlanes[1][2];
            that.faceColors._frontPlanes[1][2] = that.faceColors._frontPlanes[0][2];
            that.faceColors._frontPlanes[0][2] = tempPlane;
        }
    }
    else {
        that.resolveSequence.push("U'");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._upPlanes[0][0];
            that.faceColors._upPlanes[0][0] = that.faceColors._upPlanes[0][1];
            that.faceColors._upPlanes[0][1] = that.faceColors._upPlanes[0][2];
            that.faceColors._upPlanes[0][2] = that.faceColors._upPlanes[1][2];
            that.faceColors._upPlanes[1][2] = that.faceColors._upPlanes[2][2];
            that.faceColors._upPlanes[2][2] = that.faceColors._upPlanes[2][1];
            that.faceColors._upPlanes[2][1] = that.faceColors._upPlanes[2][0];
            that.faceColors._upPlanes[2][0] = that.faceColors._upPlanes[1][0];
            that.faceColors._upPlanes[1][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._frontPlanes[0][2];
            that.faceColors._frontPlanes[0][2] = that.faceColors._frontPlanes[1][2];
            that.faceColors._frontPlanes[1][2] = that.faceColors._frontPlanes[2][2];
            that.faceColors._frontPlanes[2][2] = that.faceColors._leftPlanes[2][2];
            that.faceColors._leftPlanes[2][2] = that.faceColors._leftPlanes[1][2];
            that.faceColors._leftPlanes[1][2] = that.faceColors._leftPlanes[0][2];
            that.faceColors._leftPlanes[0][2] = that.faceColors._backPlanes[2][2];
            that.faceColors._backPlanes[2][2] = that.faceColors._backPlanes[1][2];
            that.faceColors._backPlanes[1][2] = that.faceColors._backPlanes[0][2];
            that.faceColors._backPlanes[0][2] = that.faceColors._rightPlanes[0][2];
            that.faceColors._rightPlanes[0][2] = that.faceColors._rightPlanes[1][2];
            that.faceColors._rightPlanes[1][2] = that.faceColors._rightPlanes[2][2];
            that.faceColors._rightPlanes[2][2] = tempPlane;
        }
    }
};
Solver.prototype.turnDown = function(that, sens) {
    if(sens) {
        that.resolveSequence.push("D");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._downPlanes[0][0];
            that.faceColors._downPlanes[0][0] = that.faceColors._downPlanes[0][1];
            that.faceColors._downPlanes[0][1] = that.faceColors._downPlanes[0][2];
            that.faceColors._downPlanes[0][2] = that.faceColors._downPlanes[1][2];
            that.faceColors._downPlanes[1][2] = that.faceColors._downPlanes[2][2];
            that.faceColors._downPlanes[2][2] = that.faceColors._downPlanes[2][1];
            that.faceColors._downPlanes[2][1] = that.faceColors._downPlanes[2][0];
            that.faceColors._downPlanes[2][0] = that.faceColors._downPlanes[1][0];
            that.faceColors._downPlanes[1][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._leftPlanes[0][0];
            that.faceColors._leftPlanes[0][0] = that.faceColors._leftPlanes[1][0];
            that.faceColors._leftPlanes[1][0] = that.faceColors._leftPlanes[2][0];
            that.faceColors._leftPlanes[2][0] = that.faceColors._backPlanes[0][0];
            that.faceColors._backPlanes[0][0] = that.faceColors._backPlanes[1][0];
            that.faceColors._backPlanes[1][0] = that.faceColors._backPlanes[2][0];
            that.faceColors._backPlanes[2][0] = that.faceColors._rightPlanes[2][0];
            that.faceColors._rightPlanes[2][0] = that.faceColors._rightPlanes[1][0];
            that.faceColors._rightPlanes[1][0] = that.faceColors._rightPlanes[0][0];
            that.faceColors._rightPlanes[0][0] = that.faceColors._frontPlanes[2][0];
            that.faceColors._frontPlanes[2][0] = that.faceColors._frontPlanes[1][0];
            that.faceColors._frontPlanes[1][0] = that.faceColors._frontPlanes[0][0];
            that.faceColors._frontPlanes[0][0] = tempPlane;
        }
    }
    else {
        that.resolveSequence.push("D'");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._downPlanes[0][0];
            that.faceColors._downPlanes[0][0] = that.faceColors._downPlanes[1][0];
            that.faceColors._downPlanes[1][0] = that.faceColors._downPlanes[2][0];
            that.faceColors._downPlanes[2][0] = that.faceColors._downPlanes[2][1];
            that.faceColors._downPlanes[2][1] = that.faceColors._downPlanes[2][2];
            that.faceColors._downPlanes[2][2] = that.faceColors._downPlanes[1][2];
            that.faceColors._downPlanes[1][2] = that.faceColors._downPlanes[0][2];
            that.faceColors._downPlanes[0][2] = that.faceColors._downPlanes[0][1];
            that.faceColors._downPlanes[0][1] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._frontPlanes[0][0];
            that.faceColors._frontPlanes[0][0] = that.faceColors._frontPlanes[1][0];
            that.faceColors._frontPlanes[1][0] = that.faceColors._frontPlanes[2][0];
            that.faceColors._frontPlanes[2][0] = that.faceColors._rightPlanes[0][0];
            that.faceColors._rightPlanes[0][0] = that.faceColors._rightPlanes[1][0];
            that.faceColors._rightPlanes[1][0] = that.faceColors._rightPlanes[2][0];
            that.faceColors._rightPlanes[2][0] = that.faceColors._backPlanes[2][0];
            that.faceColors._backPlanes[2][0] = that.faceColors._backPlanes[1][0];
            that.faceColors._backPlanes[1][0] = that.faceColors._backPlanes[0][0];
            that.faceColors._backPlanes[0][0] = that.faceColors._leftPlanes[2][0];
            that.faceColors._leftPlanes[2][0] = that.faceColors._leftPlanes[1][0];
            that.faceColors._leftPlanes[1][0] = that.faceColors._leftPlanes[0][0];
            that.faceColors._leftPlanes[0][0] = tempPlane;
        }
    }
};
Solver.prototype.turnFront = function(that, sens) {
    if(sens) {
        that.resolveSequence.push("F");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._frontPlanes[0][0];
            that.faceColors._frontPlanes[0][0] = that.faceColors._frontPlanes[0][1];
            that.faceColors._frontPlanes[0][1] = that.faceColors._frontPlanes[0][2];
            that.faceColors._frontPlanes[0][2] = that.faceColors._frontPlanes[1][2];
            that.faceColors._frontPlanes[1][2] = that.faceColors._frontPlanes[2][2];
            that.faceColors._frontPlanes[2][2] = that.faceColors._frontPlanes[2][1];
            that.faceColors._frontPlanes[2][1] = that.faceColors._frontPlanes[2][0];
            that.faceColors._frontPlanes[2][0] = that.faceColors._frontPlanes[1][0];
            that.faceColors._frontPlanes[1][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._rightPlanes[2][2];
            that.faceColors._rightPlanes[2][2] = that.faceColors._upPlanes[0][2];
            that.faceColors._upPlanes[0][2] = that.faceColors._upPlanes[1][2];
            that.faceColors._upPlanes[1][2] = that.faceColors._upPlanes[2][2];
            that.faceColors._upPlanes[2][2] = that.faceColors._leftPlanes[2][2];
            that.faceColors._leftPlanes[2][2] = that.faceColors._leftPlanes[2][1];
            that.faceColors._leftPlanes[2][1] = that.faceColors._leftPlanes[2][0];
            that.faceColors._leftPlanes[2][0] = that.faceColors._downPlanes[2][2];
            that.faceColors._downPlanes[2][2] = that.faceColors._downPlanes[1][2];
            that.faceColors._downPlanes[1][2] = that.faceColors._downPlanes[0][2];
            that.faceColors._downPlanes[0][2] = that.faceColors._rightPlanes[2][0];
            that.faceColors._rightPlanes[2][0] = that.faceColors._rightPlanes[2][1];
            that.faceColors._rightPlanes[2][1] = tempPlane;
        }
    }
    else {
        that.resolveSequence.push("F'");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._frontPlanes[0][0];
            that.faceColors._frontPlanes[0][0] = that.faceColors._frontPlanes[1][0];
            that.faceColors._frontPlanes[1][0] = that.faceColors._frontPlanes[2][0];
            that.faceColors._frontPlanes[2][0] = that.faceColors._frontPlanes[2][1];
            that.faceColors._frontPlanes[2][1] = that.faceColors._frontPlanes[2][2];
            that.faceColors._frontPlanes[2][2] = that.faceColors._frontPlanes[1][2];
            that.faceColors._frontPlanes[1][2] = that.faceColors._frontPlanes[0][2];
            that.faceColors._frontPlanes[0][2] = that.faceColors._frontPlanes[0][1];
            that.faceColors._frontPlanes[0][1] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._rightPlanes[2][2];
            that.faceColors._rightPlanes[2][2] = that.faceColors._rightPlanes[2][1];
            that.faceColors._rightPlanes[2][1] = that.faceColors._rightPlanes[2][0];
            that.faceColors._rightPlanes[2][0] = that.faceColors._downPlanes[0][2];
            that.faceColors._downPlanes[0][2] = that.faceColors._downPlanes[1][2];
            that.faceColors._downPlanes[1][2] = that.faceColors._downPlanes[2][2];
            that.faceColors._downPlanes[2][2] = that.faceColors._leftPlanes[2][0];
            that.faceColors._leftPlanes[2][0] = that.faceColors._leftPlanes[2][1];
            that.faceColors._leftPlanes[2][1] = that.faceColors._leftPlanes[2][2];
            that.faceColors._leftPlanes[2][2] = that.faceColors._upPlanes[2][2];
            that.faceColors._upPlanes[2][2] = that.faceColors._upPlanes[1][2];
            that.faceColors._upPlanes[1][2] = that.faceColors._upPlanes[0][2];
            that.faceColors._upPlanes[0][2] = tempPlane;
        }
    }
};
Solver.prototype.turnBack = function(that, sens) {
    if(sens) {
        that.resolveSequence.push("B");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._backPlanes[0][2];
            that.faceColors._backPlanes[0][2] = that.faceColors._backPlanes[0][1];
            that.faceColors._backPlanes[0][1] = that.faceColors._backPlanes[0][0];
            that.faceColors._backPlanes[0][0] = that.faceColors._backPlanes[1][0];
            that.faceColors._backPlanes[1][0] = that.faceColors._backPlanes[2][0];
            that.faceColors._backPlanes[2][0] = that.faceColors._backPlanes[2][1];
            that.faceColors._backPlanes[2][1] = that.faceColors._backPlanes[2][2];
            that.faceColors._backPlanes[2][2] = that.faceColors._backPlanes[1][2];
            that.faceColors._backPlanes[1][2] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._downPlanes[0][0];
            that.faceColors._downPlanes[0][0] = that.faceColors._downPlanes[1][0];
            that.faceColors._downPlanes[1][0] = that.faceColors._downPlanes[2][0];
            that.faceColors._downPlanes[2][0] = that.faceColors._leftPlanes[0][0];
            that.faceColors._leftPlanes[0][0] = that.faceColors._leftPlanes[0][1];
            that.faceColors._leftPlanes[0][1] = that.faceColors._leftPlanes[0][2];
            that.faceColors._leftPlanes[0][2] = that.faceColors._upPlanes[2][0];
            that.faceColors._upPlanes[2][0] = that.faceColors._upPlanes[1][0];
            that.faceColors._upPlanes[1][0] = that.faceColors._upPlanes[0][0];
            that.faceColors._upPlanes[0][0] = that.faceColors._rightPlanes[0][2];
            that.faceColors._rightPlanes[0][2] = that.faceColors._rightPlanes[0][1];
            that.faceColors._rightPlanes[0][1] = that.faceColors._rightPlanes[0][0];
            that.faceColors._rightPlanes[0][0] = tempPlane;
        }
    }
    else {
        that.resolveSequence.push("B'");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._backPlanes[0][0];
            that.faceColors._backPlanes[0][0] = that.faceColors._backPlanes[0][1];
            that.faceColors._backPlanes[0][1] = that.faceColors._backPlanes[0][2];
            that.faceColors._backPlanes[0][2] = that.faceColors._backPlanes[1][2];
            that.faceColors._backPlanes[1][2] = that.faceColors._backPlanes[2][2];
            that.faceColors._backPlanes[2][2] = that.faceColors._backPlanes[2][1];
            that.faceColors._backPlanes[2][1] = that.faceColors._backPlanes[2][0];
            that.faceColors._backPlanes[2][0] = that.faceColors._backPlanes[1][0];
            that.faceColors._backPlanes[1][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._rightPlanes[0][0];
            that.faceColors._rightPlanes[0][0] = that.faceColors._rightPlanes[0][1];
            that.faceColors._rightPlanes[0][1] = that.faceColors._rightPlanes[0][2];
            that.faceColors._rightPlanes[0][2] = that.faceColors._upPlanes[0][0];
            that.faceColors._upPlanes[0][0] = that.faceColors._upPlanes[1][0];
            that.faceColors._upPlanes[1][0] = that.faceColors._upPlanes[2][0];
            that.faceColors._upPlanes[2][0] = that.faceColors._leftPlanes[0][2];
            that.faceColors._leftPlanes[0][2] = that.faceColors._leftPlanes[0][1];
            that.faceColors._leftPlanes[0][1] = that.faceColors._leftPlanes[0][0];
            that.faceColors._leftPlanes[0][0] = that.faceColors._downPlanes[2][0];
            that.faceColors._downPlanes[2][0] = that.faceColors._downPlanes[1][0];
            that.faceColors._downPlanes[1][0] = that.faceColors._downPlanes[0][0]
            that.faceColors._downPlanes[0][0] = tempPlane;
        }
    }
};
Solver.prototype.turnLeft = function(that, sens) {
    if(sens) {
        that.resolveSequence.push("L");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._leftPlanes[1][0];
            that.faceColors._leftPlanes[1][0] = that.faceColors._leftPlanes[2][0];
            that.faceColors._leftPlanes[2][0] = that.faceColors._leftPlanes[2][1];
            that.faceColors._leftPlanes[2][1] = that.faceColors._leftPlanes[2][2];
            that.faceColors._leftPlanes[2][2] = that.faceColors._leftPlanes[1][2];
            that.faceColors._leftPlanes[1][2] = that.faceColors._leftPlanes[0][2];
            that.faceColors._leftPlanes[0][2] = that.faceColors._leftPlanes[0][1];
            that.faceColors._leftPlanes[0][1] = that.faceColors._leftPlanes[0][0];
            that.faceColors._leftPlanes[0][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._upPlanes[2][2];
            that.faceColors._upPlanes[2][2] = that.faceColors._upPlanes[2][1];
            that.faceColors._upPlanes[2][1] = that.faceColors._upPlanes[2][0];
            that.faceColors._upPlanes[2][0] = that.faceColors._backPlanes[2][2];
            that.faceColors._backPlanes[2][2] = that.faceColors._backPlanes[2][1];
            that.faceColors._backPlanes[2][1] = that.faceColors._backPlanes[2][0];
            that.faceColors._backPlanes[2][0] = that.faceColors._downPlanes[2][0];
            that.faceColors._downPlanes[2][0] = that.faceColors._downPlanes[2][1];
            that.faceColors._downPlanes[2][1] = that.faceColors._downPlanes[2][2];
            that.faceColors._downPlanes[2][2] = that.faceColors._frontPlanes[2][0];
            that.faceColors._frontPlanes[2][0] = that.faceColors._frontPlanes[2][1];
            that.faceColors._frontPlanes[2][1] = that.faceColors._frontPlanes[2][2];
            that.faceColors._frontPlanes[2][2] = tempPlane;
        }
    }
    else {
        that.resolveSequence.push("L'");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._leftPlanes[0][0];
            that.faceColors._leftPlanes[0][0] = that.faceColors._leftPlanes[0][1];
            that.faceColors._leftPlanes[0][1] = that.faceColors._leftPlanes[0][2];
            that.faceColors._leftPlanes[0][2] = that.faceColors._leftPlanes[1][2];
            that.faceColors._leftPlanes[1][2] = that.faceColors._leftPlanes[2][2];
            that.faceColors._leftPlanes[2][2] = that.faceColors._leftPlanes[2][1];
            that.faceColors._leftPlanes[2][1] = that.faceColors._leftPlanes[2][0];
            that.faceColors._leftPlanes[2][0] = that.faceColors._leftPlanes[1][0];
            that.faceColors._leftPlanes[1][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._frontPlanes[2][2];
            that.faceColors._frontPlanes[2][2] = that.faceColors._frontPlanes[2][1];
            that.faceColors._frontPlanes[2][1] = that.faceColors._frontPlanes[2][0];
            that.faceColors._frontPlanes[2][0] = that.faceColors._downPlanes[2][2];
            that.faceColors._downPlanes[2][2] = that.faceColors._downPlanes[2][1];
            that.faceColors._downPlanes[2][1] = that.faceColors._downPlanes[2][0];
            that.faceColors._downPlanes[2][0] = that.faceColors._backPlanes[2][0];
            that.faceColors._backPlanes[2][0] = that.faceColors._backPlanes[2][1];
            that.faceColors._backPlanes[2][1] = that.faceColors._backPlanes[2][2];
            that.faceColors._backPlanes[2][2] = that.faceColors._upPlanes[2][0];
            that.faceColors._upPlanes[2][0] = that.faceColors._upPlanes[2][1];
            that.faceColors._upPlanes[2][1] = that.faceColors._upPlanes[2][2];
            that.faceColors._upPlanes[2][2] = tempPlane;
        }
    }
};
Solver.prototype.turnRight = function(that, sens) {
    if(sens) {
        that.resolveSequence.push("R");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._rightPlanes[0][0];
            that.faceColors._rightPlanes[0][0] = that.faceColors._rightPlanes[0][1];
            that.faceColors._rightPlanes[0][1] = that.faceColors._rightPlanes[0][2];
            that.faceColors._rightPlanes[0][2] = that.faceColors._rightPlanes[1][2];
            that.faceColors._rightPlanes[1][2] = that.faceColors._rightPlanes[2][2];
            that.faceColors._rightPlanes[2][2] = that.faceColors._rightPlanes[2][1];
            that.faceColors._rightPlanes[2][1] = that.faceColors._rightPlanes[2][0];
            that.faceColors._rightPlanes[2][0] = that.faceColors._rightPlanes[1][0];
            that.faceColors._rightPlanes[1][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._upPlanes[0][0];
            that.faceColors._upPlanes[0][0] = that.faceColors._upPlanes[0][1];
            that.faceColors._upPlanes[0][1] = that.faceColors._upPlanes[0][2];
            that.faceColors._upPlanes[0][2] = that.faceColors._frontPlanes[0][2];
            that.faceColors._frontPlanes[0][2] = that.faceColors._frontPlanes[0][1];
            that.faceColors._frontPlanes[0][1] = that.faceColors._frontPlanes[0][0];
            that.faceColors._frontPlanes[0][0] = that.faceColors._downPlanes[0][2];
            that.faceColors._downPlanes[0][2] = that.faceColors._downPlanes[0][1];
            that.faceColors._downPlanes[0][1] = that.faceColors._downPlanes[0][0];
            that.faceColors._downPlanes[0][0] = that.faceColors._backPlanes[0][0];
            that.faceColors._backPlanes[0][0] = that.faceColors._backPlanes[0][1];
            that.faceColors._backPlanes[0][1] = that.faceColors._backPlanes[0][2];
            that.faceColors._backPlanes[0][2] = tempPlane;
        }
    }
    else {
        that.resolveSequence.push("R'");

        for (var i = 0; i < 2; i++) {
            var tempPlane = that.faceColors._rightPlanes[1][0];
            that.faceColors._rightPlanes[1][0] = that.faceColors._rightPlanes[2][0];
            that.faceColors._rightPlanes[2][0] = that.faceColors._rightPlanes[2][1];
            that.faceColors._rightPlanes[2][1] = that.faceColors._rightPlanes[2][2];
            that.faceColors._rightPlanes[2][2] = that.faceColors._rightPlanes[1][2];
            that.faceColors._rightPlanes[1][2] = that.faceColors._rightPlanes[0][2];
            that.faceColors._rightPlanes[0][2] = that.faceColors._rightPlanes[0][1];
            that.faceColors._rightPlanes[0][1] = that.faceColors._rightPlanes[0][0];
            that.faceColors._rightPlanes[0][0] = tempPlane;
        }
        for (var i = 0; i < 3; i++) {
            tempPlane = that.faceColors._backPlanes[0][2];
            that.faceColors._backPlanes[0][2] = that.faceColors._backPlanes[0][1];
            that.faceColors._backPlanes[0][1] = that.faceColors._backPlanes[0][0];
            that.faceColors._backPlanes[0][0] = that.faceColors._downPlanes[0][0];
            that.faceColors._downPlanes[0][0] = that.faceColors._downPlanes[0][1];
            that.faceColors._downPlanes[0][1] = that.faceColors._downPlanes[0][2];
            that.faceColors._downPlanes[0][2] = that.faceColors._frontPlanes[0][0];
            that.faceColors._frontPlanes[0][0] = that.faceColors._frontPlanes[0][1];
            that.faceColors._frontPlanes[0][1] = that.faceColors._frontPlanes[0][2];
            that.faceColors._frontPlanes[0][2] = that.faceColors._upPlanes[0][2];
            that.faceColors._upPlanes[0][2] = that.faceColors._upPlanes[0][1];
            that.faceColors._upPlanes[0][1] = that.faceColors._upPlanes[0][0];
            that.faceColors._upPlanes[0][0] = tempPlane;
        }
    }
};
