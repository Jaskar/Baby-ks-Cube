// EDGES ***************************************************************************************************************

Solver.prototype.not_a_function = function(object, sens) {
    console.log("Fail : " + sens);
    console.log(object);
};

Solver.prototype.step_edge_generic = function(that, color_1, color_2, methods) {
    // Edge 0
    if (that.faceColors._downPlanes[1][2] == color_1
        && that.faceColors._frontPlanes[1][0] == color_2) {
    }
    // Edge 0 - inverse
    else if (that.faceColors._downPlanes[1][2] == color_2
        && that.faceColors._frontPlanes[1][0] == color_1) {
        methods[0](that, false);
    }
    // Edge 1
    else if (that.faceColors._downPlanes[0][1] == color_1
        && that.faceColors._rightPlanes[1][0] == color_2) {
        methods[1](that, true);
    }
    // Edge 1 - inverse
    else if (that.faceColors._downPlanes[0][1] == color_2
        && that.faceColors._rightPlanes[1][0] == color_1) {
        methods[1](that, false);
    }
    // Edge 2
    else if (that.faceColors._downPlanes[1][0] == color_1
        && that.faceColors._backPlanes[1][0] == color_2) {
        methods[2](that, true);
    }
    // Edge 2 - inverse
    else if (that.faceColors._downPlanes[1][0] == color_2
        && that.faceColors._backPlanes[1][0] == color_1) {
        methods[2](that, false);
    }
    // Edge 3
    else if (that.faceColors._downPlanes[2][1] == color_1
        && that.faceColors._leftPlanes[1][0] == color_2) {
        methods[3](that, true);
    }
    // Edge 3 - inverse
    else if (that.faceColors._downPlanes[2][1] == color_2
        && that.faceColors._leftPlanes[1][0] == color_1) {
        methods[3](that, false);
    }

    // Edge 4
    else if (that.faceColors._frontPlanes[0][1] == color_1
        && that.faceColors._rightPlanes[2][1] == color_2) {
        methods[4](that, true);
    }
    // Edge 4 - inverse
    else if (that.faceColors._frontPlanes[0][1] == color_2
        && that.faceColors._rightPlanes[2][1] == color_1) {
        methods[4](that, false);
    }
    // Edge 5
    else if (that.faceColors._rightPlanes[0][1] == color_1
        && that.faceColors._backPlanes[0][1] == color_2) {
        methods[5](that, true);
    }
    // Edge 5 - inverse
    else if (that.faceColors._rightPlanes[0][1] == color_2
        && that.faceColors._backPlanes[0][1] == color_1) {
        methods[5](that, false);
    }
    // Edge 6
    else if (that.faceColors._backPlanes[2][1] == color_1
        && that.faceColors._leftPlanes[0][1] == color_2) {
        methods[6](that, true);
    }
    // Edge 6 - inverse
    else if (that.faceColors._backPlanes[2][1] == color_2
        && that.faceColors._leftPlanes[0][1] == color_1) {
        methods[6](that, false);
    }
    // Edge 7
    else if (that.faceColors._leftPlanes[2][1] == color_1
        && that.faceColors._frontPlanes[2][1] == color_2) {
        methods[7](that, true);
    }
    // Edge 7 - inverse
    else if (that.faceColors._leftPlanes[2][1] == color_2
        && that.faceColors._frontPlanes[2][1] == color_1) {
        methods[7](that, false);
    }

    // Edge 8
    else if (that.faceColors._upPlanes[1][2] == color_1
        && that.faceColors._frontPlanes[1][2] == color_2) {
        methods[8](that, true);
    }
    // Edge 8 - inverse
    else if (that.faceColors._upPlanes[1][2] == color_2
        && that.faceColors._frontPlanes[1][2] == color_1) {
        methods[8](that, false);
    }
    // Edge 9
    else if (that.faceColors._upPlanes[0][1] == color_1
        && that.faceColors._rightPlanes[1][2] == color_2) {
        methods[9](that, true);
    }
    // Edge 9 - inverse
    else if (that.faceColors._upPlanes[0][1] == color_2
        && that.faceColors._rightPlanes[1][2] == color_1) {
        methods[9](that, false);
    }
    // Edge 10
    else if (that.faceColors._upPlanes[1][0] == color_1
        && that.faceColors._backPlanes[1][2] == color_2) {
        methods[10](that, true);
    }
    // Edge 10 - inverse
    else if (that.faceColors._upPlanes[1][0] == color_2
        && that.faceColors._backPlanes[1][2] == color_1) {
        methods[10](that, false);
    }
    // Edge 11
    else if (that.faceColors._upPlanes[2][1] == color_1
        && that.faceColors._leftPlanes[1][2] == color_2) {
        methods[11](that, true);
    }
    // Edge 11 - inverse
    else if (that.faceColors._upPlanes[2][1] == color_2
        && that.faceColors._leftPlanes[1][2] == color_1) {
        methods[11](that, false);
    }
};

// Solve the Green-Yellow edge
Solver.prototype.step_edge_0 = function(that) {
    var color_1 = "Y";
    var color_2 = "G";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.edge_0_to_0,
            that.edge_1_to_0,
            that.edge_2_to_0,
            that.edge_3_to_0,
            that.edge_4_to_0,
            that.edge_5_to_0,
            that.edge_6_to_0,
            that.edge_7_to_0,
            that.edge_8_to_0,
            that.edge_9_to_0,
            that.edge_10_to_0,
            that.edge_11_to_0
        ]
    );
};
// Solve the Red-Yellow edge
Solver.prototype.step_edge_1 = function(that) {
    var color_1 = "Y";
    var color_2 = "R";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.not_a_function,
            that.edge_1_to_1,
            that.edge_2_to_1,
            that.edge_3_to_1,
            that.edge_4_to_1,
            that.edge_5_to_1,
            that.edge_6_to_1,
            that.edge_7_to_1,
            that.edge_8_to_1,
            that.edge_9_to_1,
            that.edge_10_to_1,
            that.edge_11_to_1
        ]
    );
};
// Solve the Blue-Yellow edge
Solver.prototype.step_edge_2 = function(that) {
    var color_1 = "Y";
    var color_2 = "B";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.not_a_function,
            that.not_a_function,
            that.edge_2_to_2,
            that.edge_3_to_2,
            that.edge_4_to_2,
            that.edge_5_to_2,
            that.edge_6_to_2,
            that.edge_7_to_2,
            that.edge_8_to_2,
            that.edge_9_to_2,
            that.edge_10_to_2,
            that.edge_11_to_2
        ]
    );
};
// Solve the Orange-Yellow edge
Solver.prototype.step_edge_3 = function(that) {
    var color_1 = "Y";
    var color_2 = "O";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.edge_3_to_3,
            that.edge_4_to_3,
            that.edge_5_to_3,
            that.edge_6_to_3,
            that.edge_7_to_3,
            that.edge_8_to_3,
            that.edge_9_to_3,
            that.edge_10_to_3,
            that.edge_11_to_3
        ]
    );
};

// Solve the Green-Red edge
Solver.prototype.step_edge_4 = function(that) {
    var color_1 = "G";
    var color_2 = "R";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.edge_4_to_4,
            that.edge_5_to_4,
            that.edge_6_to_4,
            that.edge_7_to_4,
            that.edge_8_to_4,
            that.edge_9_to_4,
            that.edge_10_to_4,
            that.edge_11_to_4
        ]
    );
};
// Solve the Red-Blue edge
Solver.prototype.step_edge_5 = function(that) {
    var color_1 = "R";
    var color_2 = "B";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.edge_5_to_5,
            that.edge_6_to_5,
            that.edge_7_to_5,
            that.edge_8_to_5,
            that.edge_9_to_5,
            that.edge_10_to_5,
            that.edge_11_to_5
        ]
    );
};
// Solve the Blue-Orange edge
Solver.prototype.step_edge_6 = function(that) {
    var color_1 = "B";
    var color_2 = "O";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.edge_6_to_6,
            that.edge_7_to_6,
            that.edge_8_to_6,
            that.edge_9_to_6,
            that.edge_10_to_6,
            that.edge_11_to_6
        ]
    );
};
// Solve the Orange-Green edge
Solver.prototype.step_edge_7 = function(that) {
    var color_1 = "O";
    var color_2 = "G";

    that.step_edge_generic(
        that,
        color_1,
        color_2,
        [
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.not_a_function,
            that.edge_7_to_7,
            that.edge_8_to_7,
            that.edge_9_to_7,
            that.edge_10_to_7,
            that.edge_11_to_7
        ]
    );
};

// Solve the White up edge
Solver.prototype.step_edge_8 = function(that) {
    var move = function() {
        that.turnLeft(that, true);
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, false);
    };

    // Cross ok
    if(that.faceColors._upPlanes[0][1] == "W"
        && that.faceColors._upPlanes[1][0] == "W"
        && that.faceColors._upPlanes[1][2] == "W"
        && that.faceColors._upPlanes[2][1] == "W") {
        // Already in place
        console.log("Top cross ok");
    }

    // Line 9 / 11
    else if(that.faceColors._upPlanes[0][1] == "W"
        && that.faceColors._upPlanes[2][1] == "W") {
        console.log("Top cross line 9 / 11");
        that.turnUp(that, true);
        move();
    }
    // Line 8 / 10
    else if(that.faceColors._upPlanes[1][0] == "W"
        && that.faceColors._upPlanes[1][2] == "W") {
        console.log("Top cross line 8 / 10");
        move();
    }

    // Corner 9 / 10
    else if(that.faceColors._upPlanes[0][1] == "W"
        && that.faceColors._upPlanes[1][0] == "W") {
        console.log("Top cross corner 9 / 10");
        move();
        move();
    }
    // Corner 10 / 11
    else if(that.faceColors._upPlanes[1][0] == "W"
        && that.faceColors._upPlanes[2][1] == "W") {
        console.log("Top cross corner 10 / 11");
        that.turnUp(that, true);
        move();
        move();
    }
    // Corner 11 / 8
    else if(that.faceColors._upPlanes[2][1] == "W"
        && that.faceColors._upPlanes[1][2] == "W") {
        console.log("Top cross 11 / 8");
        that.turnUp(that, true);
        that.turnUp(that, true);
        move();
        move();
    }
    // Corner 8 / 9
    else if(that.faceColors._upPlanes[1][2] == "W"
        && that.faceColors._upPlanes[0][1] == "W") {
        console.log("Top cross 8 / 9");
        that.turnUp(that, false);
        move();
        move();
    }

    // None
    else {
        console.log("Top cross none");
        move();
        that.turnUp(that, true);
        that.turnUp(that, true);
        move();
        move();
    }
};
// Solve the Up edges
Solver.prototype.step_edge_9 = function(that) {
    var move = function() {
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.turnLeft(that, true);
    };
    var colors = [];

    colors = ["G", "O", "B", "R"]
    for(var i = 0; i < 4; i++) {
        if(that.faceColors._frontPlanes[1][2] == colors[0]
            && that.faceColors._leftPlanes[1][2] == colors[1]
            && that.faceColors._backPlanes[1][2] == colors[2]
            && that.faceColors._rightPlanes[1][2] == colors[3])
        {
            console.log("Correctly placed.");

            for(var x = 0; x < i; x++) {
                console.log("Turn up a bit");
                that.turnUp(that, true);
            }

            return;
        }

        var tempColor = colors[0];
        colors[0] = colors[1];
        colors[1] = colors[2];
        colors[2] = colors[3];
        colors[3] = tempColor;
    }

    // Else, place the green correctly
    if(that.faceColors._frontPlanes[1][2] == "G") {
        console.log("Cross placement ok");
    }
    else if(that.faceColors._rightPlanes[1][2] == "G") {
        console.log("Cross placement 1");
        that.turnUp(that, true);
    }
    else if(that.faceColors._backPlanes[1][2] == "G") {
        console.log("Cross placement 2");
        that.turnUp(that, true);
        that.turnUp(that, true);
    }
    else if(that.faceColors._leftPlanes[1][2] == "G") {
        console.log("Cross placement 3");
        that.turnUp(that, false);
    }

    // If green and blue correctly placed, permute orange / red
    if(that.faceColors._backPlanes[1][2] == "B") {
        console.log("Permute orange / red");

        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnFront(that, true);
        that.turnRight(that, true);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnFront(that, false);

        return;
    }

    // If orange is correcly placed, permute blue / red
    if(that.faceColors._leftPlanes[1][2] == "O") {
        console.log("Permutre blue / red");

        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnBack(that, false);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnBack(that, true);
        that.turnRight(that, false);
        that.turnRight(that, false);
        that.turnUp(that, true);

        return;
    }

    // If red is correctly placed, permute blue / orange
    if(that.faceColors._rightPlanes[1][2] == "R") {
        console.log("Permutre blue / orange");

        that.turnFront(that, true);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnFront(that, false);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnFront(that, true);
        that.turnRight(that, true);
        that.turnFront(that, false);

        return;
    }

    // Else, permute 3 until it's OK
    for(var i = 0; i < 2; i++) {
        if(that.faceColors._leftPlanes[1][2] == "O"
            && that.faceColors._rightPlanes[1][2] == "R") {
            return;
        } else {
            console.log("Turn all");
            move();
        }
    }
};


// EDGES MOVES *********************************************************************************************************


// 0
Solver.prototype.edge_0_to_0 = function(that, sens) {
    if(sens) {
        // Already in place
    }
    else {
        that.turnFront(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
};

// 1
Solver.prototype.edge_1_to_0 = function(that, sens) {
    if(sens) {
        that.turnRight(that, true);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
    else {
        that.turnRight(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_1_to_1 = function(that, sens) {
    console.log("Edge 1 to 1");
    if(sens) {
        // Already in place
    }
    else {
        that.turnRight(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnFront(that, true);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
};

// 2
Solver.prototype.edge_2_to_0 = function(that, sens) {
    if(sens) {
        that.turnBack(that, true);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
    else {
        that.turnBack(that, true);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnFront(that, true);
        that.turnRight(that, true);
    }
};
Solver.prototype.edge_2_to_1 = function(that, sens) {
    console.log("Edge 2 to 1");
    if(sens) {
        that.turnBack(that, true);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
    else {
        that.turnBack(that, true);
        that.turnRight(that, true);
    }
};
Solver.prototype.edge_2_to_2 = function(that, sens) {
    console.log("Edge 2 to 2 " + sens);
    if(sens) {
        // Already in place
    }
    else {
        that.turnBack(that, true);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnBack(that, false);
        that.turnRight(that, false);
    }
};

// 3
Solver.prototype.edge_3_to_0 = function(that, sens) {
    if(sens) {
        that.turnLeft(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, false);
        that.turnFront(that, true);
        that.turnFront(that, true);
    } else {
        that.turnLeft(that, false);
        that.turnFront(that, false);
    }
};
Solver.prototype.edge_3_to_1 = function(that, sens) {
    console.log("Edge 3 to 1");
    if(sens) {
        that.turnLeft(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
    else {
        that.turnFront(that, false);
        that.turnLeft(that, false);
        that.turnFront(that, true);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
};
Solver.prototype.edge_3_to_2 = function(that, sens) {
    console.log("Edge 3 to 2 " + sens);
    if(sens) {
        that.turnLeft(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnLeft(that, true);
        that.turnBack(that, true);
    }
};
Solver.prototype.edge_3_to_3 = function(that, sens) {
    console.log("Edge 3 to 3 " + sens);
    if(sens) {
        // Already in place
    }
    else {
        that.turnLeft(that, false);
        that.turnDown(that, true);
        that.turnFront(that, false);
        that.turnDown(that, false);
    }
};

// 4
Solver.prototype.edge_4_to_0 = function(that, sens) {
    if(sens) {
        that.turnFront(that, false);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnFront(that, true);
    }
    else {
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_4_to_1 = function(that, sens) {
    console.log("Edge 4 to 1");
    if(sens) {
        that.turnRight(that, false);
    }
    else {
        that.turnDown(that, false);
        that.turnFront(that, true);
        that.turnDown(that, true);
    }
};
Solver.prototype.edge_4_to_2 = function(that, sens) {
    console.log("Edge 4 to 2 " + sens);
    if(sens) {
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnRight(that, true);
        that.turnRight(that, true);
        that.turnBack(that, false);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
};
Solver.prototype.edge_4_to_3 = function(that, sens) {
    console.log("Edge 4 to 3 " + sens);
    if(sens) {
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
    else {
        that.turnFront(that, false);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
};
Solver.prototype.edge_4_to_4 = function(that, sens) {
    console.log("Edge 4 to 4 " + sens);
    if(sens) {
        // Already in place
    }
    else {
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnFront(that, true);
    }
};

// 5
Solver.prototype.edge_5_to_0 = function(that, sens) {
    if(sens) {
        that.turnRight(that, true);
        that.turnRight(that, true);
        that.turnFront(that, true);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
    else {
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_5_to_1 = function(that, sens) {
    console.log("Edge 5 to 1");
    if(sens) {
        that.turnDown(that, true);
        that.turnBack(that, false);
        that.turnDown(that, false);
    }
    else {
        that.turnRight(that, true);
    }
};
Solver.prototype.edge_5_to_2 = function(that, sens) {
    console.log("Edge 5 to 2 " + sens);
    if(sens) {
        that.turnBack(that, false);
    }
    else {
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
};
Solver.prototype.edge_5_to_3 = function(that, sens) {
    console.log("Edge 5 to 3 " + sens);
    if(sens) {
        that.turnBack(that, true);
        that.turnUp(that, false);
        that.turnBack(that, false);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
    else {
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
};
Solver.prototype.edge_5_to_4 = function(that, sens) {
    console.log("Edge 5 to 4 " + sens);
    if(sens) {
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.edge_10_to_4(that, true);
    }
    else {
        that.edge_5_to_5(that, false);
        that.edge_5_to_4(that, true);
    }
};
Solver.prototype.edge_5_to_5 = function(that, sens) {
    if(sens) {
        // Already in place
    }
    else {
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnUp(that, true);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
    }
};

// 6
Solver.prototype.edge_6_to_0 = function(that, sens) {
    if(sens) {
        that.turnLeft(that, true);
        that.turnUp(that, false);
        that.turnLeft(that, false);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
    else {
        that.turnLeft(that, true);
        that.turnLeft(that, true);
        that.turnFront(that, false);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
};
Solver.prototype.edge_6_to_1 = function(that, sens) {
    console.log("Edge 6 to 1");
    if(sens) {
        that.turnDown(that, true);
        that.turnDown(that, true);
        that.turnLeft(that, false);
        that.turnDown(that, true);
        that.turnDown(that, true);
    }
    else {
        that.turnDown(that, true);
        that.turnBack(that, true);
        that.turnDown(that, false);
    }
};
Solver.prototype.edge_6_to_2 = function(that, sens) {
    console.log("Edge 6 to 2 " + sens);
    if(sens) {
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnBack(that, true);
    }
};
Solver.prototype.edge_6_to_3 = function(that, sens) {
    console.log("Edge 6 to 3 " + sens);
    if(sens) {
        that.turnLeft(that, false);
    }
    else {
        that.turnDown(that, false);
        that.turnBack(that, true);
        that.turnDown(that, true);
    }
};
Solver.prototype.edge_6_to_4 = function(that, sens) {
    console.log("Edge 6 to 4 " + sens);
    if(sens) {
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.edge_8_to_4(that, true);
    }
    else {
        that.edge_6_to_6(that, false);
        that.edge_6_to_4(that, true);
    }
};
Solver.prototype.edge_6_to_5 = function(that, sens) {
    console.log("Edge 6 to 5 " + sens);
    if(sens) {
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.edge_8_to_5(that, true);
    }
    else {
        that.edge_6_to_6(that, false);
        that.edge_6_to_5(that, true);
    }
};
Solver.prototype.edge_6_to_6 = function(that, sens) {
    console.log("Edge 6 to 6 " + sens);
    if(sens) {
        // Already in place
    }
    else {
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnBack(that, true);
    }
};

// 7
Solver.prototype.edge_7_to_0 = function(that, sens) {
    if(sens) {
        that.turnFront(that, false);
    }
    else {
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_7_to_1 = function(that, sens) {
    console.log("Edge 7 to 1");
    if(sens) {
        that.turnDown(that, false);
        that.turnFront(that, false);
        that.turnDown(that, true);
    }
    else {
        that.turnDown(that, true);
        that.turnDown(that, true);
        that.turnLeft(that, true);
        that.turnDown(that, true);
        that.turnDown(that, true);
    }
};
Solver.prototype.edge_7_to_2 = function(that, sens) {
    console.log("Edge 7 to 2 " + sens);
    if(sens) {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.turnLeft(that, true);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
};
Solver.prototype.edge_7_to_3 = function(that, sens) {
    console.log("Edge 7 to 3 " + sens);
    if(sens) {
        that.turnDown(that, true);
        that.turnFront(that, false);
        that.turnDown(that, false);
    }
    else {
        that.turnLeft(that, true);
    }
};
Solver.prototype.edge_7_to_4 = function(that, sens) {
    console.log("Edge 7 to 4 " + sens);
    if(sens) {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.edge_9_to_4(that, true);
    }
    else {
        that.edge_7_to_7(that, false);
        that.edge_7_to_4(that, true);
    }
};
Solver.prototype.edge_7_to_5 = function(that, sens) {
    console.log("Edge 7 to 5 " + sens);
    if(sens) {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.edge_9_to_5(that, true);
    }
    else {
        that.edge_7_to_7(that, false);
        that.edge_7_to_5(that, true);
    }
};
Solver.prototype.edge_7_to_6 = function(that, sens) {
    console.log("Edge 7 to 6 " + sens);
    if(sens) {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.edge_9_to_6(that, true);
    }
    else {
        that.edge_7_to_7(that, false);
        that.edge_7_to_6(that, true);
    }
};
Solver.prototype.edge_7_to_7 = function(that, sens) {
    console.log("Edge 7 to 7 " + sens);
    if(sens) {
        // Already in place
    }
    else {
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, true);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, true);
    }
};

// 8
Solver.prototype.edge_8_to_0 = function(that, sens) {
    if(sens) {
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
    else {
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_8_to_1 = function(that, sens) {
    console.log("Edge 8 to 1");
    if(sens) {
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
    else {
        that.turnFront(that, true);
        that.turnRight(that, false);
        that.turnFront(that, false);
    }
};
Solver.prototype.edge_8_to_2 = function(that, sens) {
    console.log("Edge 8 to 2 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnBack(that, false);
        that.turnRight(that, false);
    }
};
Solver.prototype.edge_8_to_3 = function(that, sens) {
    console.log("Edge 8 to 3 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
    else {
        that.turnFront(that, false);
        that.turnLeft(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_8_to_4 = function(that, sens) {
    console.log("Edge 8 to 4 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_10_to_4(that, true);
    }
    else {
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.edge_10_to_4(that, true);
    }
};
Solver.prototype.edge_8_to_5 = function(that, sens) {
    console.log("Edge 8 to 5 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.edge_11_to_5(that, true);
    }
    else {
        that.turnBack(that, true);
        that.turnUp(that, false);
        that.turnBack(that, false);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnRight(that, true);
    }
};
Solver.prototype.edge_8_to_6 = function(that, sens) {
    console.log("Edge 8 to 6 " + sens);
    if(sens) {
        that.turnBack(that, false);
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, false);
        that.turnLeft(that, false);
    }
    else {
        that.turnUp(that, false);
        that.edge_9_to_6(that, false);
    }
};
Solver.prototype.edge_8_to_7 = function(that, sens) {
    console.log("Edge 8 to 7 " + sens);
    if(sens) {
        that.turnUp(that, false);
        that.edge_9_to_7(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_10_to_7(that, false);
    }
};

// 9
Solver.prototype.edge_9_to_0 = function(that, sens) {
    if(sens) {
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_9_to_1 = function(that, sens) {
    console.log("Edge 9 to 1");
    if(sens) {
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnRight(that, false);
        that.turnFront(that, false);
    }
};
Solver.prototype.edge_9_to_2 = function(that, sens) {
    console.log("Edge 9 to 2 " + sens);
    if(sens) {
        that.turnUp(that, false);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnRight(that, true);
        that.turnBack(that, false);
        that.turnRight(that, false);
    }
};
Solver.prototype.edge_9_to_3 = function(that, sens) {
    console.log("Edge 9 to 3 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnLeft(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_9_to_4 = function(that, sens) {
    console.log("Edge 9 to 4 " + sens);
    if(sens) {
        that.turnUp(that, false);
        that.edge_10_to_4(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_11_to_4(that, false);
    }
};
Solver.prototype.edge_9_to_5 = function(that, sens) {
    console.log("Edge 9 to 5 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_11_to_5(that, true);
    }
    else {
        that.turnUp(that, true);
        that.edge_8_to_5(that, false);
    }
};
Solver.prototype.edge_9_to_6 = function(that, sens) {
    console.log("Edge 9 to 6 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.edge_8_to_6(that, true);
    }
    else {
        that.turnLeft(that, true);
        that.turnUp(that, false);
        that.turnLeft(that, false);
        that.turnUp(that, false);
        that.turnBack(that, false);
        that.turnUp(that, true);
        that.turnBack(that, true);
    }
};
Solver.prototype.edge_9_to_7 = function(that, sens) {
    console.log("Edge 9 to 7 " + sens);
    if(sens) {
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.turnLeft(that, true);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnUp(that, false);
        that.turnFront(that, false);
    }
    else {
        that.turnUp(that, false);
        that.edge_10_to_7(that, false);
    }
};

// 10
Solver.prototype.edge_10_to_0 = function(that, sens) {
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_10_to_1 = function(that, sens) {
    console.log("Edge 10 to 1");
    if(sens) {
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnRight(that, false);
        that.turnFront(that, false);
    }
};
Solver.prototype.edge_10_to_2 = function(that, sens) {
    console.log("Edge 10 to 2 " + sens);
    if(sens) {
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnBack(that, false);
        that.turnRight(that, false);
    }
};
Solver.prototype.edge_10_to_3 = function(that, sens) {
    console.log("Edge 10 to 3 " + sens);
    if(sens) {
        that.turnUp(that, false);
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnFront(that, false);
        that.turnLeft(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_10_to_4 = function(that, sens) {
    console.log("Edge 10 to 4 " + sens);
    if(sens) {
        that.turnFront(that, false);
        that.turnUp(that, true);
        that.turnFront(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
    }
    else {
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnFront(that, false);
        that.turnUp(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_10_to_5 = function(that, sens) {
    console.log("Edge 10 to 5 " + sens);
    if(sens) {
        that.turnUp(that, false);
        that.edge_11_to_5(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_8_to_5(that, false);
    }
};
Solver.prototype.edge_10_to_6 = function(that, sens) {
    console.log("Edge 10 to 6 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_8_to_6(that, true);
    }
    else {
        that.turnUp(that, true);
        that.edge_9_to_6(that, false);
    }
};
Solver.prototype.edge_10_to_7 = function(that, sens) {
    console.log("Edge 10 to 7 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.edge_9_to_7(that, true);
    }
    else {
        that.turnFront(that, true);
        that.turnUp(that, false);
        that.turnFront(that, false);
        that.turnUp(that, false);
        that.turnLeft(that, false);
        that.turnUp(that, true);
        that.turnLeft(that, true);
    }
};

// 11
Solver.prototype.edge_11_to_0 = function(that, sens) {
    if(sens) {
        that.turnUp(that, false);
        that.turnFront(that, true);
        that.turnFront(that, true);
    }
    else {
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_11_to_1 = function(that, sens) {
    console.log("Edge 11 to 1");
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnRight(that, true);
    }
    else {
        that.turnUp(that, false);
        that.turnFront(that, true);
        that.turnRight(that, false);
        that.turnFront(that, false);
    }
};
Solver.prototype.edge_11_to_2 = function(that, sens) {
    console.log("Edge 11 to 2 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnBack(that, true);
    }
    else {
        that.turnUp(that, false);
        that.turnUp(that, false);
        that.turnRight(that, true);
        that.turnBack(that, false);
        that.turnRight(that, false);
    }
};
Solver.prototype.edge_11_to_3 = function(that, sens) {
    console.log("Edge 11 to 3 " + sens);
    if(sens) {
        that.turnLeft(that, true);
        that.turnLeft(that, true);
    }
    else {
        that.turnUp(that, false);
        that.turnFront(that, false);
        that.turnLeft(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_11_to_4 = function(that, sens) {
    console.log("Edge 11 to 4 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.edge_10_to_4(that, true);
    }
    else {
        that.turnRight(that, true);
        that.turnUp(that, false);
        that.turnRight(that, false);
        that.turnUp(that, false);
        that.turnFront(that, false);
        that.turnUp(that, true);
        that.turnFront(that, true);
    }
};
Solver.prototype.edge_11_to_5 = function(that, sens) {
    console.log("Edge 11 to 5 " + sens);
    if(sens) {
        that.turnRight(that, false);
        that.turnUp(that, true);
        that.turnRight(that, true);
        that.turnUp(that, true);
        that.turnBack(that, true);
        that.turnUp(that, false);
        that.turnBack(that, false);
    }
    else {
        that.turnUp(that, false);
        that.edge_8_to_5(that, false);
    }
};
Solver.prototype.edge_11_to_6 = function(that, sens) {
    console.log("Edge 11 to 6 " + sens);
    if(sens) {
        that.turnUp(that, false);
        that.edge_8_to_6(that, true);
    }
    else {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_9_to_6(that, false);
    }
};
Solver.prototype.edge_11_to_7 = function(that, sens) {
    console.log("Edge 11 to 7 " + sens);
    if(sens) {
        that.turnUp(that, true);
        that.turnUp(that, true);
        that.edge_9_to_7(that, true);
    }
    else {
        that.turnUp(that, true);
        that.edge_10_to_7(that, false);
    }
};
