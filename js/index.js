/**
 * Load the scene when the canvas is fully loaded
 */
document.addEventListener("DOMContentLoaded", function () {
    if (BABYLON.Engine.isSupported()) {
        initScene();
    }
}, false);

/**
 * Creates a new BABYLON Engine and initialize the scene
 */
function initScene() {

    // Get canvas
    var canvas = document.getElementById("game_canvas");

    // Create babylon engine
    var engine = new BABYLON.Engine(canvas, true);

    // Create scene
    var scene = new BABYLON.Scene(engine);

    // Create the camera
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 8 * 5.5, Math.PI / 3, 8, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas);

    // Create light
    var light1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(-1,0,0), scene);
    var light2 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1,0,0), scene);
    var light3 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,1,0), scene);
    var light3 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,-1,0), scene);

    Cube.initColors(scene);
    Cube.initFaces(scene);

    var moves = [];

    var isTurning = false;

    var nextMove = function() {
        if(typeof moves[0] !== 'undefined') {
            isTurning = true;
            moves[0]();
            moves.shift();
        } else {
            isTurning = false;
        }
    };

    var sens = false;

    var turnFront = function() {
        Cube.turnFront(function() {
            nextMove();
        });
    };
    var turnFrontReverse = function() {
        Cube.turnFront(function() {
            nextMove();
        }, true);
    };
    var turnBack = function() {
        Cube.turnBack(function() {
            nextMove();
        });
    };
    var turnBackReverse = function() {
        Cube.turnBack(function() {
            nextMove();
        }, true);
    };
    var turnRight = function() {
        Cube.turnRight(function() {
            nextMove();
        });
    };
    var turnRightReverse = function() {
        Cube.turnRight(function() {
            nextMove();
        }, true);
    };
    var turnLeft = function() {
        Cube.turnLeft(function() {
            nextMove();
        });
    };
    var turnLeftReverse = function() {
        Cube.turnLeft(function() {
            nextMove();
        }, true);
    };
    var turnUp = function() {
        Cube.turnUp(function() {
            nextMove();
        });
    };
    var turnUpReverse = function() {
        Cube.turnUp(function() {
            nextMove();
        }, true);
    };
    var turnDown = function() {
        Cube.turnDown(function() {
            nextMove();
        });
    };
    var turnDownReverse = function() {
        Cube.turnDown(function() {
            nextMove();
        }, true);
    };

    //Rand sequence of \|/ moves
    var randomSequence = function(numberOfMove) {
        for (var i = 0; i < numberOfMove; i++) {
            var rand = Math.floor((Math.random() * 12) + 1);

            switch (rand) {
                case 1:
                    moves.push(turnLeft);
                    break;
                case 2:
                    moves.push(turnLeftReverse);
                    break;
                case 3:
                    moves.push(turnRight);
                    break;
                case 4:
                    moves.push(turnRightReverse);
                    break;
                case 5:
                    moves.push(turnFront);
                    break;
                case 6:
                    moves.push(turnFrontReverse);
                    break;
                case 7:
                    moves.push(turnBack);
                    break;
                case 8:
                    moves.push(turnBackReverse);
                    break;
                case 9:
                    moves.push(turnUp);
                    break;
                case 10:
                    moves.push(turnUpReverse);
                    break;
                case 11:
                    moves.push(turnDown);
                    break;
                case 12:
                    moves.push(turnDownReverse);
                    break;
                default:
                    console.log('Fail to random correct number! >_<" -> ' + rand);
                    break;
            }
        }
    };

    document.getElementById("button_left").addEventListener('click', function() {
        moves.push(turnLeft);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_leftprime").addEventListener('click', function() {
        moves.push(turnLeftReverse);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_right").addEventListener('click', function() {
        moves.push(turnRight);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_rightprime").addEventListener('click', function() {
        moves.push(turnRightReverse);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_up").addEventListener('click', function() {
        moves.push(turnUp);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_upprime").addEventListener('click', function() {
        moves.push(turnUpReverse);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_front").addEventListener('click', function() {
        moves.push(turnFront);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_frontprime").addEventListener('click', function() {
        moves.push(turnFrontReverse);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_down").addEventListener('click', function() {
        moves.push(turnDown);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_downprime").addEventListener('click', function() {
        moves.push(turnDownReverse);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_back").addEventListener('click', function() {
        moves.push(turnBack);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_backprime").addEventListener('click', function() {
        moves.push(turnBackReverse);
        if(!isTurning) { nextMove() };
    });
    document.getElementById("button_scramble").addEventListener('click', function() {
        randomSequence(15);
        if(!isTurning) { nextMove() };
    });

    engine.runRenderLoop(function () {
        scene.render();
    });

    //scene.debugLayer.show();
}