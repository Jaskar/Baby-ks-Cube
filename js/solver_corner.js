// CORNERS *************************************************************************************************************

Solver.prototype.not_a_function_corner = function(object, sens) {
    //console.log("Fail : " + sens);
    //console.log(object);
};

Solver.prototype.step_corner_generic = function(that, color_1, color_2, color_3, methods) {

    // Corner A - 0
    if (that.faceColors._downPlanes[2][2] == color_1
        && that.faceColors._leftPlanes[2][0] == color_2
        && that.faceColors._frontPlanes[2][0] == color_3) {
        methods[0](that, 0);
        return;
    }
    // Corner A - 1
    else if (that.faceColors._downPlanes[2][2] == color_2
        && that.faceColors._leftPlanes[2][0] == color_3
        && that.faceColors._frontPlanes[2][0] == color_1) {
        methods[0](that, 1);
        return;
    }
    // Corner A - 2
    else if (that.faceColors._downPlanes[2][2] == color_3
        && that.faceColors._leftPlanes[2][0] == color_1
        && that.faceColors._frontPlanes[2][0] == color_2) {
        methods[0](that, 2);
        return;
    }

    // Corner B - 0
    else if (that.faceColors._downPlanes[0][2] == color_1
        && that.faceColors._frontPlanes[0][0] == color_2
        && that.faceColors._rightPlanes[2][0] == color_3) {
        methods[1](that, 0);
        return;
    }
    // Corner B - 1
    else if (that.faceColors._downPlanes[0][2] == color_2
        && that.faceColors._frontPlanes[0][0] == color_3
        && that.faceColors._rightPlanes[2][0] == color_1) {
        methods[1](that, 1);
        return;
    }
    // Corner B - 2
    else if (that.faceColors._downPlanes[0][2] == color_3
        && that.faceColors._frontPlanes[0][0] == color_1
        && that.faceColors._rightPlanes[2][0] == color_2) {
        methods[1](that, 2);
        return;
    }

    // Corner C - 0
    else if (that.faceColors._downPlanes[0][0] == color_1
        && that.faceColors._rightPlanes[0][0] == color_2
        && that.faceColors._backPlanes[0][0] == color_3) {
        methods[2](that, 0);
        return;
    }
    // Corner C - 1
    else if (that.faceColors._downPlanes[0][0] == color_2
        && that.faceColors._rightPlanes[0][0] == color_3
        && that.faceColors._backPlanes[0][0] == color_1) {
        methods[2](that, 1);
        return;
    }
    // Corner C - 2
    else if (that.faceColors._downPlanes[0][0] == color_3
        && that.faceColors._rightPlanes[0][0] == color_1
        && that.faceColors._backPlanes[0][0] == color_2) {
        methods[2](that, 2);
        return;
    }

    // Corner D - 0
    else if (that.faceColors._downPlanes[2][0] == color_1
        && that.faceColors._backPlanes[2][0] == color_2
        && that.faceColors._leftPlanes[0][0] == color_3) {
        methods[3](that, 0);
        return;
    }
    // Corner D - 1
    else if (that.faceColors._downPlanes[2][0] == color_2
        && that.faceColors._backPlanes[2][0] == color_3
        && that.faceColors._leftPlanes[0][0] == color_1) {
        methods[3](that, 1);
        return;
    }
    // Corner D - 2
    else if (that.faceColors._downPlanes[2][0] == color_3
        && that.faceColors._backPlanes[2][0] == color_1
        && that.faceColors._leftPlanes[0][0] == color_2) {
        methods[3](that, 2);
        return;
    }

    // Corner E - 0
    if (that.faceColors._upPlanes[2][2] == color_1
        && that.faceColors._frontPlanes[2][2] == color_2
        && that.faceColors._leftPlanes[2][2] == color_3) {
        methods[4](that, 0);
        return;
    }
    // Corner E - 1
    else if (that.faceColors._upPlanes[2][2] == color_2
        && that.faceColors._frontPlanes[2][2] == color_3
        && that.faceColors._leftPlanes[2][2] == color_1) {
        methods[4](that, 1);
        return;
    }
    // Corner E - 2
    else if (that.faceColors._upPlanes[2][2] == color_3
        && that.faceColors._frontPlanes[2][2] == color_1
        && that.faceColors._leftPlanes[2][2] == color_2) {
        methods[4](that, 2);
        return;
    }

    // Corner F - 0
    else if (that.faceColors._upPlanes[0][2] == color_1
        && that.faceColors._rightPlanes[2][2] == color_2
        && that.faceColors._frontPlanes[0][2] == color_3) {
        methods[5](that, 0);
        return;
    }
    // Corner F - 1
    else if (that.faceColors._upPlanes[0][2] == color_2
        && that.faceColors._rightPlanes[2][2] == color_3
        && that.faceColors._frontPlanes[0][2] == color_1) {
        methods[5](that, 1);
        return;
    }
    // Corner F - 2
    else if (that.faceColors._upPlanes[0][2] == color_3
        && that.faceColors._rightPlanes[2][2] == color_1
        && that.faceColors._frontPlanes[0][2] == color_2) {
        methods[5](that, 2);
        return;
    }

    // Corner G - 0
    else if (that.faceColors._upPlanes[0][0] == color_1
        && that.faceColors._backPlanes[0][2] == color_2
        && that.faceColors._rightPlanes[0][2] == color_3) {
        methods[6](that, 0);
        return;
    }
    // Corner G - 1
    else if (that.faceColors._upPlanes[0][0] == color_2
        && that.faceColors._backPlanes[0][2] == color_3
        && that.faceColors._rightPlanes[0][2] == color_1) {
        methods[6](that, 1);
        return;
    }
    // Corner G - 2
    else if (that.faceColors._upPlanes[0][0] == color_3
        && that.faceColors._backPlanes[0][2] == color_1
        && that.faceColors._rightPlanes[0][2] == color_2) {
        methods[6](that, 2);
        return;
    }

    // Corner H - 0
    else if (that.faceColors._upPlanes[2][0] == color_1
        && that.faceColors._leftPlanes[0][2] == color_2
        && that.faceColors._backPlanes[2][2] == color_3) {
        methods[7](that, 0);
        return;
    }
    // Corner H - 1
    else if (that.faceColors._upPlanes[2][0] == color_2
        && that.faceColors._leftPlanes[0][2] == color_3
        && that.faceColors._backPlanes[2][2] == color_1) {
        methods[7](that, 1);
        return;
    }
    // Corner H - 2
    else if (that.faceColors._upPlanes[2][0] == color_3
        && that.faceColors._leftPlanes[0][2] == color_1
        && that.faceColors._backPlanes[2][2] == color_2) {
        methods[7](that, 2);
        return;
    }


    //console.log("Fail to find the position.");

};

// Solve the Yellow - Orange - Green corner
Solver.prototype.step_corner_A = function(that) {
    var color_1 = "Y";
    var color_2 = "O";
    var color_3 = "G";

    //console.log("Corner A : ");

    that.step_corner_generic(
        that,
        color_1,
        color_2,
        color_3,
        [
            that.corner_A_to_A,
            that.corner_B_to_A,
            that.corner_C_to_A,
            that.corner_D_to_A,
            that.corner_E_to_A,
            that.corner_F_to_A,
            that.corner_G_to_A,
            that.corner_H_to_A
        ]
    );
};
// Solve the Yellow - Green - Red corner
Solver.prototype.step_corner_B = function(that) {
    var color_1 = "Y";
    var color_2 = "G";
    var color_3 = "R";

    //console.log("Corner B : ");

    that.step_corner_generic(
        that,
        color_1,
        color_2,
        color_3,
        [
            that.not_a_function_corner,
            that.corner_B_to_B,
            that.corner_C_to_B,
            that.corner_D_to_B,
            that.corner_E_to_B,
            that.corner_F_to_B,
            that.corner_G_to_B,
            that.corner_H_to_B
        ]
    );
};
// Solve the Yellow - Red - Blue corner
Solver.prototype.step_corner_C = function(that) {
    var color_1 = "Y";
    var color_2 = "R";
    var color_3 = "B";

    //console.log("Corner C : ");

    that.step_corner_generic(
        that,
        color_1,
        color_2,
        color_3,
        [
            that.not_a_function_corner,
            that.not_a_function_corner,
            that.corner_C_to_C,
            that.corner_D_to_C,
            that.corner_E_to_C,
            that.corner_F_to_C,
            that.corner_G_to_C,
            that.corner_H_to_C
        ]
    );
};
// Solve the Yellow - Blue - Orange corner
Solver.prototype.step_corner_D = function(that) {
    var color_1 = "Y";
    var color_2 = "B";
    var color_3 = "O";

    //console.log("Corner D : ");

    that.step_corner_generic(
        that,
        color_1,
        color_2,
        color_3,
        [
            that.not_a_function_corner,
            that.not_a_function_corner,
            that.not_a_function_corner,
            that.corner_D_to_D,
            that.corner_E_to_D,
            that.corner_F_to_D,
            that.corner_G_to_D,
            that.corner_H_to_D
        ]
    );
};



        // Top corners orientation ok
        if(that.faceColors._upPlanes[0][2] == 'W'
            && that.faceColors._upPlanes[0][0] == 'W'
            && that.faceColors._upPlanes[2][0] == 'W'
            && that.faceColors._upPlanes[2][2] == 'W') {
            corners = true;
            return;
        }

        // If cube is correctly oriented, turn the face
        if(that.faceColors._upPlanes[0][2] == 'W') {
            that.turnUp(that, true);
            numberUp++;
        }
        // Else, try to match it with another piece
        else {

            if(that.faceColors._upPlanes[0][0] != 'W') {
                that.corner_orient_UP_RIGHT(that);
            }
            else if(that.faceColors._upPlanes[2][0] != 'W') {
                that.turnBack(that, false);
                that.corner_orient_UP_RIGHT(that);
                that.turnBack(that, true);
            }
            else if(that.faceColors._upPlanes[2][2] != 'W') {
                that.turnLeft(that, false);
                that.turnBack(that, false);
                that.corner_orient_UP_RIGHT(that);
                that.turnBack(that, true);
                that.turnLeft(that, true);
            }
        }

        // Top corners orientation ok
        if(that.faceColors._upPlanes[0][2] == 'W'
        && that.faceColors._upPlanes[0][0] == 'W'
        && that.faceColors._upPlanes[2][0] == 'W'
        && that.faceColors._upPlanes[2][2] == 'W') {
            corners = true;
        }
    }while(!corners);

    for(var i = 0; i < numberUp; i++) {
        that.turnUp(that, false);
    }
};
// Last 4 corners - placement
Solver.prototype.step_corner_Z = function(that) {
    var corners = false;
    var number = 0;

    do {

        if(that.faceColors._frontPlanes[2][2] == 'G') {
            if(that.faceColors._frontPlanes[0][2] == 'R') {
                //console.log("G - R");
                that.turnUp(that, true);
                that.corner_placement_B(that);
                that.turnUp(that, false);
            }
            else if(that.faceColors._frontPlanes[0][2] == 'B') {
                //console.log("G - B");
                that.corner_placement_A(that);
            }
        }
        else if(that.faceColors._leftPlanes[0][2] == 'O') {
            if(that.faceColors._leftPlanes[2][2] == 'G') {
                //console.log("O - G");
                that.turnUp(that, false);
                that.corner_placement_B(that);
                that.turnUp(that, true);
            }
            else if(that.faceColors._leftPlanes[2][2] == 'R') {
                //console.log("O - R");
                that.turnUp(that, false);
                that.corner_placement_A(that);
                that.turnUp(that, true);
            }
        }
        else if(that.faceColors._backPlanes[0][2] == 'B') {
            if (that.faceColors._backPlanes[2][2] == 'O') {
                //console.log("B - O");
                that.corner_placement_B(that);
            }
            else if (that.faceColors._backPlanes[2][2] == 'G') {
                //console.log("B - G");
                that.turnUp(that, false);
                that.turnUp(that, false);
                that.corner_placement_A(that);
                that.turnUp(that, true);
                that.turnUp(that, true);
            }
        }
        else if(that.faceColors._rightPlanes[2][2] == 'R') {
            if(that.faceColors._rightPlanes[0][2] == 'B') {
                //console.log("R - B");
                that.turnUp(that, false);
                that.turnUp(that, false);
                that.corner_placement_B(that);
                that.turnUp(that, true);
                that.turnUp(that, true);
            }
            else if(that.faceColors._rightPlanes[0][2] == 'O') {
                //console.log("R - O");
                that.turnUp(that, true);
                that.corner_placement_A(that);
                that.turnUp(that, false);
            }
        }
        else {
            //console.log("E");
            //that.corner_placement_E(that);
            that.corner_placement_A(that);
        }

        // Top corners orientation ok
        if(that.faceColors._frontPlanes[2][2] == 'G'
            && that.faceColors._leftPlanes[0][2] == 'O'
            && that.faceColors._backPlanes[0][2] == 'B'
            && that.faceColors._rightPlanes[2][2] == 'R') {
            corners = true;
        }

        number++;
        if(number > 10) {
            return;
        }
    }while(!corners);
};
// CORNERS MOVES *********************************************************************************************************


// A
Solver.prototype.corner_A_to_A = function(that, sens) {
    ////console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
    }
    else if (sens == 2) {
        that.corner_A_to_A(that, 1);
        that.corner_A_to_A(that, 1);
    }
};

// B
Solver.prototype.corner_B_to_A = function(that, sens) {
    ////console.log("Corner B to A - " + sens);
    if (sens == 0) {
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnUp(that, false);
        that.turnFront(that, false);
    }
    else if (sens == 1) {
        that.corner_B_to_B(that, 1);
        that.corner_B_to_A(that, 0);
    }
    else if (sens == 2) {
        that.corner_B_to_B(that, 2);
        that.corner_B_to_A(that, 0);
    }
};
Solver.prototype.corner_B_to_B = function(that, sens) {
    ////console.log("Corner B to B - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
    }
    else if (sens == 2) {
        that.corner_B_to_B(that, 1);
        that.corner_B_to_B(that, 1);
    }
};

// C
Solver.prototype.corner_C_to_A = function(that, sens) {
    ////console.log("Corner C to A - " + sens);
    if (sens == 0) {
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnUp(that, false);
        that.turnFront(that, false);
    }
    else if (sens == 1) {
        that.corner_C_to_C(that, 1);
        that.corner_C_to_A(that, 0);
    }
    else if (sens == 2) {
        that.corner_C_to_C(that, 2);
        that.corner_C_to_A(that, 0);

    }
};
Solver.prototype.corner_C_to_B = function(that, sens) {
    ////console.log("Corner C to B - " + sens);
    if (sens == 0) {
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
    }
    else if (sens == 1) {
        that.corner_C_to_C(that, 1);
        that.corner_C_to_B(that, 0);
    }
    else if (sens == 2) {
        that.corner_C_to_C(that, 2);
        that.corner_C_to_B(that, 0);
    }
};
Solver.prototype.corner_C_to_C = function(that, sens) {
    ////console.log("Corner C to C - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
    }
    else if (sens == 2) {
        that.corner_C_to_C(that, 1);
        that.corner_C_to_C(that, 1);
    }
};

// D
Solver.prototype.corner_D_to_A = function(that, sens) {
    ////console.log("Corner D to A - " + sens);
    if (sens == 0) {
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
    }
    else if (sens == 1) {
        that.corner_D_to_D(that, 1);
        that.corner_D_to_A(that, 0);
    }
    else if (sens == 2) {
        that.corner_D_to_D(that, 2);
        that.corner_D_to_A(that, 0);
    }
};
Solver.prototype.corner_D_to_B = function(that, sens) {
    //console.log("Corner D to B - " + sens);
    if (sens == 0) {
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
    }
    else if (sens == 1) {
        that.corner_D_to_D(that, 1);
        that.corner_D_to_B(that, 0);
    }
    else if (sens == 2) {
        that.corner_D_to_D(that, 2);
        that.corner_D_to_B(that, 0);
    }
};
Solver.prototype.corner_D_to_C = function(that, sens) {
    //console.log("Corner D to C - " + sens);
    if (sens == 0) {
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
    }
    else if (sens == 1) {
        that.corner_D_to_D(that, 1);
        that.corner_D_to_C(that, 0);
    }
    else if (sens == 2) {
        that.corner_D_to_D(that, 2);
        that.corner_D_to_C(that, 0);
    }
};
Solver.prototype.corner_D_to_D = function(that, sens) {
    //console.log("Corner D to D - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
    }
    else if (sens == 2) {
        that.corner_D_to_D(that, 1);
        that.corner_D_to_D(that, 1);
    }
};

// E
Solver.prototype.corner_E_to_A = function(that, sens) {
    //console.log("Corner E to A - " + sens);
    if (sens == 0) {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
    }
    else if (sens == 1) {
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnUp(that, false);
        that.turnFront(that, false);
    }
    else if (sens == 2) {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
    }
};
Solver.prototype.corner_E_to_B = function(that, sens) {
    //console.log("Corner E to B - " + sens);

    that.turnUp(that, false);
    if (sens == 0) {
        that.corner_F_to_B(that, 0);
    }
    else if (sens == 1) {
        that.corner_F_to_B(that, 1);
    }
    else if (sens == 2) {
        that.corner_F_to_B(that, 2);
    }
};
Solver.prototype.corner_E_to_C = function(that, sens) {
    //console.log("Corner E to C - " + sens);

    that.turnUp(that, false);
    that.turnUp(that, false);
    if (sens == 0) {
        that.corner_G_to_C(that, 0);
    }
    else if (sens == 1) {
        that.corner_G_to_C(that, 1);
    }
    else if (sens == 2) {
        that.corner_G_to_C(that, 2);
    }
};
Solver.prototype.corner_E_to_D = function(that, sens) {
    //console.log("Corner E to D - " + sens);

    that.turnUp(that, true);
    if (sens == 0) {
        that.corner_H_to_D(that, 0);
    }
    else if (sens == 1) {
        that.corner_H_to_D(that, 1);
    }
    else if (sens == 2) {
        that.corner_H_to_D(that, 2);
    }
};

// F
Solver.prototype.corner_F_to_A = function(that, sens) {
    //console.log("Corner F to A - " + sens);

    that.turnUp(that, true);
    if (sens == 0) {
        that.corner_E_to_A(that, 0);
    }
    else if (sens == 1) {
        that.corner_E_to_A(that, 1);
    }
    else if (sens == 2) {
        that.corner_E_to_A(that, 2);
    }
};
Solver.prototype.corner_F_to_B = function(that, sens) {
    //console.log("Corner F to B - " + sens);
    if (sens == 0) {
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
    }
    else if (sens == 1) {
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnFront(that, true);
    }
    else if (sens == 2) {
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
    }
};
Solver.prototype.corner_F_to_C = function(that, sens) {
    //console.log("Corner F to C - " + sens);

    that.turnUp(that, false);
    if (sens == 0) {
        that.corner_G_to_C(that, 0);
    }
    else if (sens == 1) {
        that.corner_G_to_C(that, 1);
    }
    else if (sens == 2) {
        that.corner_G_to_C(that, 2);
    }
};
Solver.prototype.corner_F_to_D = function(that, sens) {
    //console.log("Corner F to D - " + sens);

    that.turnUp(that, true);
    that.turnUp(that, true);
    if (sens == 0) {
        that.corner_H_to_D(that, 0);
    }
    else if (sens == 1) {
        that.corner_H_to_D(that, 1);
    }
    else if (sens == 2) {
        that.corner_H_to_D(that, 2);
    }
};

// G
Solver.prototype.corner_G_to_A = function(that, sens) {
    //console.log("Corner G to A - " + sens);

    that.turnUp(that, true);
    that.turnUp(that, true);
    if (sens == 0) {
        that.corner_E_to_A(that, 0);
    }
    else if (sens == 1) {
        that.corner_E_to_A(that, 1);
    }
    else if (sens == 2) {
        that.corner_E_to_A(that, 2);
    }
};
Solver.prototype.corner_G_to_B = function(that, sens) {
    //console.log("Corner G to B - " + sens);

    that.turnUp(that, true);
    if (sens == 0) {
        that.corner_F_to_B(that, 0);
    }
    else if (sens == 1) {
        that.corner_F_to_B(that, 1);
    }
    else if (sens == 2) {
        that.corner_F_to_B(that, 2);
    }
};
Solver.prototype.corner_G_to_C = function(that, sens) {
    //console.log("Corner G to C - " + sens);
    if (sens == 0) {
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
    }
    else if (sens == 1) {
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
    }
    else if (sens == 2) {
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
    }
};
Solver.prototype.corner_G_to_D = function(that, sens) {
    //console.log("Corner G to D - " + sens);

    that.turnUp(that, false);
    if (sens == 0) {
        that.corner_H_to_D(that, 0);
    }
    else if (sens == 1) {
        that.corner_H_to_D(that, 1);
    }
    else if (sens == 2) {
        that.corner_H_to_D(that, 2);
    }
};

// H
Solver.prototype.corner_H_to_A = function(that, sens) {
    //console.log("Corner H to A - " + sens);

    that.turnUp(that, false);
    if (sens == 0) {
        that.corner_E_to_A(that, 0);
    }
    else if (sens == 1) {
        that.corner_E_to_A(that, 1);
    }
    else if (sens == 2) {
        that.corner_E_to_A(that, 2);
    }
};
Solver.prototype.corner_H_to_B = function(that, sens) {
    //console.log("Corner H to B - " + sens);

    that.turnUp(that, false);
    that.turnUp(that, false);
    if (sens == 0) {
        that.corner_F_to_B(that, 0);
    }
    else if (sens == 1) {
        that.corner_F_to_B(that, 1);
    }
    else if (sens == 2) {
        that.corner_F_to_B(that, 2);
    }
};
Solver.prototype.corner_H_to_C = function(that, sens) {
    //console.log("Corner H to C - " + sens);

    that.turnUp(that, true);
    if (sens == 0) {
        that.corner_G_to_C(that, 0);
    }
    else if (sens == 1) {
        that.corner_G_to_C(that, 1);
    }
    else if (sens == 2) {
        that.corner_G_to_C(that, 2);
    }
};
Solver.prototype.corner_H_to_D = function(that, sens) {
    //console.log("Corner H to D - " + sens);
    if (sens == 0) {
        that.turnBack(that, false);
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
    }
    else if (sens == 1) {
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
    }
    else if (sens == 2) {
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
    }
};
