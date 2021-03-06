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
    scene.clearColor = BABYLON.Color3.FromInts(149, 165, 166);
    //scene.debugLayer.show();

    // Create the camera
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 8 * 5.5, Math.PI / 3, 8, BABYLON.Vector3.Zero(), scene);
    camera.wheelPrecision = 200;
    camera.attachControl(canvas);
    camera.lowerAlphaLimit = null;
    camera.upperAlphaLimit = null;
    camera.upperBetaLimit = null;
    camera.lowerBetaLimit = null;

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

    var myView = new View(myCube, myController, mySolver);

    engine.runRenderLoop(function () {

        // Prevent the camera to go in the cube
        if(camera.radius < 3.15) {
            camera.radius = 3.15;
        }

        scene.render();
    });

    window.addEventListener("resize", function () {
        engine.resize();
    });

    //scene.debugLayer.show();
}