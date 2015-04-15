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

    var myCube = new Cube(scene);
    myCube.initColors();
    myCube.initColors();
    myCube.initFaces();

    var myController = new Controller(myCube);

    var mySolver = new Solver(myController);

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener("resize", function () {
        engine.resize();
    });

    //scene.debugLayer.show();

    document.getElementById("button_scramble").addEventListener('click', function () {
        myController.scramble(15);
    });
    document.getElementById("button_solve").addEventListener('click', function () {
        mySolver.solve();
    });
    document.getElementById("button_left").addEventListener('click', function () {
        myController.turnLeft();
    });
    document.getElementById("button_leftprime").addEventListener('click', function () {
        myController.turnLeftReverse();
    });
    document.getElementById("button_right").addEventListener('click', function () {
        myController.turnRight();
    });
    document.getElementById("button_rightprime").addEventListener('click', function () {
        myController.turnRightReverse();
    });
    document.getElementById("button_up").addEventListener('click', function () {
        myController.turnUp();
    });
    document.getElementById("button_upprime").addEventListener('click', function () {
        myController.turnUpReverse();
    });
    document.getElementById("button_front").addEventListener('click', function () {
        myController.turnFront();
    });
    document.getElementById("button_frontprime").addEventListener('click', function () {
        myController.turnFrontReverse();
    });
    document.getElementById("button_down").addEventListener('click', function () {
        myController.turnDown();
    });
    document.getElementById("button_downprime").addEventListener('click', function () {
        myController.turnDownReverse();
    });
    document.getElementById("button_back").addEventListener('click', function () {
        myController.turnBack();
    });
    document.getElementById("button_backprime").addEventListener('click', function () {
        myController.turnBackReverse();
    });
}