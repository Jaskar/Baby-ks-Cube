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

    Cube.turnFront();
    Cube.turnFront();
    Cube.turnFront();
    Cube.turnFront();
    Cube.turnFront();

    engine.runRenderLoop(function () {
        Cube.render(engine.getDeltaTime());
        scene.render();
    });
}