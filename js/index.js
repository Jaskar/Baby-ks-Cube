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

    var nextMove = function() {
        if(typeof moves[0] !== 'undefined') {
            moves[0]();
            moves.shift();
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

    moves.push(turnFront);
    moves.push(turnRight);
    moves.push(turnBack);
    moves.push(turnLeft);
    moves.push(turnRightReverse);
    moves.push(turnBackReverse);
    moves.push(turnFrontReverse);
    moves.push(turnLeftReverse);
    nextMove();

    engine.runRenderLoop(function () {
        scene.render();
    });

    scene.debugLayer.show();
}