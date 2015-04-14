// CORNERS *************************************************************************************************************

Solver.prototype.not_a_function_corner = function(object, sens) {
    console.log("Fail : " + sens);
    console.log(object);
};

Solver.prototype.step_corner_generic = function(that, color_1, color_2, color_3, methods) {
    // Corner A - 0
    if (that.faceColors._downPlanes[2][2] == color_1
        && that.faceColors._leftPlanes[2][0] == color_2
        && that.faceColors._frontPlanes[2][0] == color_3) {
        methods[0](that, 0);
    }
    // Corner A - 1
    else if (that.faceColors._downPlanes[2][2] == color_2
        && that.faceColors._leftPlanes[2][0] == color_3
        && that.faceColors._frontPlanes[2][0] == color_1) {
        methods[0](that, 1);
    }
    // Corner A - 2
    else if (that.faceColors._downPlanes[2][2] == color_3
        && that.faceColors._leftPlanes[2][0] == color_1
        && that.faceColors._frontPlanes[2][0] == color_2) {
        methods[0](that, 2);
    }

    // Corner B - 0
    else if (that.faceColors._downPlanes[0][2] == color_1
        && that.faceColors._frontPlanes[0][0] == color_2
        && that.faceColors._rightPlanes[2][0] == color_3) {
        methods[1](that, 0);
    }
    // Corner B - 1
    else if (that.faceColors._downPlanes[0][2] == color_2
        && that.faceColors._frontPlanes[0][0] == color_3
        && that.faceColors._rightPlanes[2][0] == color_1) {
        methods[1](that, 1);
    }
    // Corner B - 2
    else if (that.faceColors._downPlanes[0][2] == color_3
        && that.faceColors._frontPlanes[0][0] == color_1
        && that.faceColors._rightPlanes[2][0] == color_2) {
        methods[1](that, 2);
    }

    // Corner C - 0
    else if (that.faceColors._downPlanes[0][0] == color_1
        && that.faceColors._rightPlanes[0][0] == color_2
        && that.faceColors._backPlanes[0][0] == color_3) {
        methods[2](that, 0);
    }
    // Corner C - 1
    else if (that.faceColors._downPlanes[0][0] == color_2
        && that.faceColors._rightPlanes[0][0] == color_3
        && that.faceColors._backPlanes[0][0] == color_1) {
        methods[2](that, 1);
    }
    // Corner C - 2
    else if (that.faceColors._downPlanes[0][0] == color_3
        && that.faceColors._rightPlanes[0][0] == color_1
        && that.faceColors._backPlanes[0][0] == color_2) {
        methods[2](that, 2);
    }

    // Corner D - 0
    else if (that.faceColors._downPlanes[2][0] == color_1
        && that.faceColors._backPlanes[2][0] == color_2
        && that.faceColors._leftPlanes[0][0] == color_3) {
        methods[3](that, 0);
    }
    // Corner D - 1
    else if (that.faceColors._downPlanes[2][0] == color_1
        && that.faceColors._backPlanes[2][0] == color_2
        && that.faceColors._leftPlanes[0][0] == color_3) {
        methods[3](that, 1);
    }
    // Corner D - 2
    else if (that.faceColors._downPlanes[2][0] == color_1
        && that.faceColors._backPlanes[2][0] == color_2
        && that.faceColors._leftPlanes[0][0] == color_3) {
        methods[3](that, 2);
    }
};

// Solve the Yellow - Orange - Green corner
Solver.prototype.step_corner_A = function(that) {
    var color_1 = "Y";
    var color_2 = "O";
    var color_3 = "G";

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



// CORNERS MOVES *********************************************************************************************************


// A
Solver.prototype.corner_A_to_A = function(that, sens) {
    console.log("Corner A to A - " + sens);
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
    console.log("Corner B to A - " + sens);
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
    console.log("Corner B to B - " + sens);
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
    console.log("Corner C to A - " + sens);
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
    console.log("Corner C to B - " + sens);
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
        that.corner_C_to_B(that, 0);
    }
    else if (sens == 2) {
        that.corner_C_to_C(that, 2);
        that.corner_C_to_B(that, 0);
    }
};
Solver.prototype.corner_C_to_C = function(that, sens) {
    console.log("Corner C to C - " + sens);
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
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_D_to_B = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_D_to_C = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_D_to_D = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};

// E
Solver.prototype.corner_E_to_A = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_E_to_B = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_E_to_C = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_E_to_D = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};

// F
Solver.prototype.corner_F_to_A = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_F_to_B = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_F_to_C = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_F_to_D = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};

// G
Solver.prototype.corner_G_to_A = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_G_to_B = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_G_to_C = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_G_to_D = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};

// H
Solver.prototype.corner_H_to_A = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_H_to_B = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_H_to_C = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
Solver.prototype.corner_H_to_D = function(that, sens) {
    console.log("Corner A to A - " + sens);
    if (sens == 0) {
        // Already in place
    }
    else if (sens == 1) {

    }
    else if (sens == 2) {

    }
};
