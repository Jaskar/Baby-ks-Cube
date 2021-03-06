function Cube(scene) {

    // FIELDS

    this._scene = scene;
    this._pieces = [];


    // Planes containers (faces)
    this._frontPlanes = [[null, null, null], [null, null, null], [null, null, null]];
    this._backPlanes = [[null, null, null], [null, null, null], [null, null, null]];
    this._upPlanes = [[null, null, null], [null, null, null], [null, null, null]];
    this._downPlanes = [[null, null, null], [null, null, null], [null, null, null]];
    this._leftPlanes = [[null, null, null], [null, null, null], [null, null, null]];
    this._rightPlanes = [[null, null, null], [null, null, null], [null, null, null]];

    this._isExploded = false;

    this._stateBeforeMove = [];
    this._speed = 500;

}

Cube.prototype.setSpeed = function(value) {
    this._speed = value;
};

Cube.prototype.initColors = function() {

    this._matGreen = new BABYLON.StandardMaterial("green", this._scene);
    this._matGreen.specularColor = BABYLON.Color3.Black();
    this._matGreen.diffuseTexture =  new BABYLON.Texture("./assets/green.png", this._scene);
    this._matGreen.diffuseTexture.hasAlpha = true;

    this._matBlue = new BABYLON.StandardMaterial("blue", this._scene);
    this._matBlue.specularColor = BABYLON.Color3.Black();
    this._matBlue.diffuseTexture =  new BABYLON.Texture("./assets/blue.png", this._scene);
    this._matBlue.diffuseTexture.hasAlpha = true;

    this._matWhite = new BABYLON.StandardMaterial("white", this._scene);
    this._matWhite.specularColor = BABYLON.Color3.Black();
    this._matWhite.diffuseTexture =  new BABYLON.Texture("./assets/white.png", this._scene);
    this._matWhite.diffuseTexture.hasAlpha = true;

    this._matYellow = new BABYLON.StandardMaterial("yellow", this._scene);
    this._matYellow.specularColor = BABYLON.Color3.Black();
    this._matYellow.diffuseTexture =  new BABYLON.Texture("./assets/yellow.png", this._scene);
    this._matYellow.diffuseTexture.hasAlpha = true;

    this._matOrange = new BABYLON.StandardMaterial("orange", this._scene);
    this._matOrange.specularColor = BABYLON.Color3.Black();
    this._matOrange.diffuseTexture =  new BABYLON.Texture("./assets/orange.png", this._scene);
    this._matOrange.diffuseTexture.hasAlpha = true;

    this._matRed = new BABYLON.StandardMaterial("red", this._scene);
    this._matRed.specularColor = BABYLON.Color3.Black();
    this._matRed.diffuseTexture =  new BABYLON.Texture("./assets/red.png", this._scene);
    this._matRed.diffuseTexture.hasAlpha = true;


    this._matPieces = new BABYLON.StandardMaterial("centerPieces", this._scene);
    //this._matPieces.specularColor = BABYLON.Color3.Black();
    this._matPieces.diffuseColor = new BABYLON.Color3(0.45,0.45,0.45);
};

Cube.prototype.initFaces = function() {
    var _this = this;
    var pivotCenter = BABYLON.Mesh.CreateBox("pivotCenter", 1, this._scene);
    pivotCenter.visibility = false;
    var x = 0;
    var y = 0;

    var errorFunction = function() {
        console.log("Error while loading 3D parts.")
    };

    // The center piece
    this.centerPiece = BABYLON.Mesh.CreateSphere("centerPiece", 16, 0.5, this._scene);

    // Pieces
    BABYLON.SceneLoader.ImportMesh("", "assets/", "Cube.babylon", this._scene, function (newMeshes) {
        newMeshes.forEach(function(m) {
            m.material = _this._matPieces;
            m.isVisible = false;
            m.scaling.x = 0.025;
            m.scaling.y = 0.025;
            m.scaling.z = 0.025;
            _this._pieces.push(m);
        });
    });

    // Front
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            this._frontPlanes[x][y] = BABYLON.Mesh.CreateBox("G" + x + y, 1, this._scene);
            this._frontPlanes[x][y].position.x = x - 1;
            this._frontPlanes[x][y].position.y = y - 1;
            this._frontPlanes[x][y].position.z = +1.5;
            this._frontPlanes[x][y].scaling.x = 1;
            this._frontPlanes[x][y].scaling.y = 1;
            this._frontPlanes[x][y].scaling.z = 0.00001;
            this._frontPlanes[x][y].material = this._matGreen;
            this._frontPlanes[x][y].parent = pivotCenter;
        }
    }

    // Back
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            this._backPlanes[x][y] = BABYLON.Mesh.CreateBox("B" + x + y, 1, this._scene);
            this._backPlanes[x][y].position.x = x - 1;
            this._backPlanes[x][y].position.y = y - 1;
            this._backPlanes[x][y].position.z = -1.5;
            this._backPlanes[x][y].scaling.x = 1;
            this._backPlanes[x][y].scaling.y = 1;
            this._backPlanes[x][y].scaling.z = 0.00001;
            this._backPlanes[x][y].material = this._matBlue;
            this._backPlanes[x][y].parent = pivotCenter;
        }
    }

    // Up
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            this._upPlanes[x][y] = BABYLON.Mesh.CreateBox("W" + x + y, 1, this._scene);
            this._upPlanes[x][y].position.x = x - 1;
            this._upPlanes[x][y].position.y = +1.5;
            this._upPlanes[x][y].position.z = y - 1;
            this._upPlanes[x][y].scaling.x = 1;
            this._upPlanes[x][y].scaling.y = 0.00001;
            this._upPlanes[x][y].scaling.z = 1;
            this._upPlanes[x][y].material = this._matWhite;
            this._upPlanes[x][y].parent = pivotCenter;
        }
    }

    // Down
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            this._downPlanes[x][y] = BABYLON.Mesh.CreateBox("Y" + x + y, 1, this._scene);
            this._downPlanes[x][y].position.x = x - 1;
            this._downPlanes[x][y].position.y = -1.5;
            this._downPlanes[x][y].position.z = y - 1;
            this._downPlanes[x][y].scaling.x = 1;
            this._downPlanes[x][y].scaling.y = 0.00001;
            this._downPlanes[x][y].scaling.z = 1;
            this._downPlanes[x][y].material = this._matYellow;
            this._downPlanes[x][y].parent = pivotCenter;
        }
    }

    // Left
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            this._leftPlanes[x][y] = BABYLON.Mesh.CreateBox("O" + x + y, 1, this._scene);
            this._leftPlanes[x][y].position.x = 1.5;
            this._leftPlanes[x][y].position.y = y - 1;
            this._leftPlanes[x][y].position.z = x - 1;
            this._leftPlanes[x][y].scaling.x = 0.00001;
            this._leftPlanes[x][y].scaling.y = 1;
            this._leftPlanes[x][y].scaling.z = 1;
            this._leftPlanes[x][y].material = this._matOrange;
            this._leftPlanes[x][y].parent = pivotCenter;
        }
    }

    // Right
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            this._rightPlanes[x][y] = BABYLON.Mesh.CreateBox("R" + x + y, 1, this._scene);
            this._rightPlanes[x][y].position.x = -1.5;
            this._rightPlanes[x][y].position.y = y - 1;
            this._rightPlanes[x][y].position.z = x - 1;
            this._rightPlanes[x][y].scaling.x = 0.00001;
            this._rightPlanes[x][y].scaling.y = 1;
            this._rightPlanes[x][y].scaling.z = 1;
            this._rightPlanes[x][y].material = this._matRed;
            this._rightPlanes[x][y].parent = pivotCenter;
        }
    }
};


Cube.prototype.getFacesColors = function() {
    var colors = {};
    colors._upPlanes = [];
    colors._downPlanes = [];
    colors._leftPlanes = [];
    colors._rightPlanes = [];
    colors._frontPlanes = [];
    colors._backPlanes = [];

    for(var x = 0; x < 3; x++) {
        colors._upPlanes[x] = [];
        colors._downPlanes[x] = [];
        colors._leftPlanes[x] = [];
        colors._rightPlanes[x] = [];
        colors._frontPlanes[x] = [];
        colors._backPlanes[x] = [];

        for(var y = 0; y < 3; y++) {
            colors._upPlanes[x][y] = this._upPlanes[x][y].name.substr(0,1);
            colors._downPlanes[x][y] = this._downPlanes[x][y].name.substr(0,1);
            colors._leftPlanes[x][y] = this._leftPlanes[x][y].name.substr(0,1);
            colors._rightPlanes[x][y] = this._rightPlanes[x][y].name.substr(0,1);
            colors._frontPlanes[x][y] = this._frontPlanes[x][y].name.substr(0,1);
            colors._backPlanes[x][y] = this._backPlanes[x][y].name.substr(0,1);
        }
    }

    return colors;
};


// Function to rotate something around X Axis
Cube.prototype._rotateAroundX = function(object, angle, reverseRotation) {
    reverseRotation = reverseRotation || false;

    object.animations = [];
    var distance = Math.sqrt(
        Math.pow((object.position.z), 2) +
        Math.pow((object.position.y), 2)
    );
    var actualRotation = Math.atan2(object.position.z, object.position.y);

    var animationPosition = new BABYLON.Animation(
        "animationPosition",
        "position",
        this._speed,
        BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    var animationKeys = [];
    animationKeys.push({
        frame: 0,
        value: new BABYLON.Vector3(
            object.position.x,
            object.position.y,
            object.position.z
        )
    });
    for (var i = 1; i <= 100; i++) {
        var stepAngle = (angle / 100) * i;
        animationKeys.push({
            frame: i,
            value: new BABYLON.Vector3(
                object.position.x,
                Math.cos(actualRotation + stepAngle) * distance,
                Math.sin(actualRotation + stepAngle) * distance
            )
        });
    }
    animationPosition.setKeys(animationKeys);

    object.animations.push(animationPosition);

    var animationRotation = new BABYLON.Animation(
        "animationRotation",
        "rotation.x",
        this._speed,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    if (reverseRotation) {
        angle *= -1;
    }
    animationKeys = [
        {frame: 0, value: (object.rotation.x)},
        {frame: 100, value: (object.rotation.x + angle)}
    ];
    animationRotation.setKeys(animationKeys);

    object.animations.push(animationRotation);

    var that = this;
    this._scene.beginAnimation(object, 0, 100, false, 1, function () {
        that._moveBeforeNext--;
        if (that._moveBeforeNext == 0) {
            // Without timeout there is a bug
            setTimeout(function () {
                that._callback();
            }, 2);
        }
    });
    this._moveBeforeNext++;
};

// Function to rotate something around Y Axis
Cube.prototype._rotateAroundY = function(object, angle, reverseRotation) {
    reverseRotation = reverseRotation || false;

    object.animations = [];
    var distance = Math.sqrt(
        Math.pow((object.position.x), 2) +
        Math.pow((object.position.z), 2)
    );
    var actualRotation = Math.atan2(object.position.z, object.position.x);

    var animationPosition = new BABYLON.Animation(
        "animationPosition",
        "position",
        this._speed,
        BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    var animationKeys = [];
    animationKeys.push({
        frame: 0,
        value: new BABYLON.Vector3(
            object.position.x,
            object.position.y,
            object.position.z
        )
    });
    for(var i = 1; i <= 100; i++) {
        var stepAngle = (angle / 100) * i;
        animationKeys.push({
            frame : i,
            value : new BABYLON.Vector3(
                Math.cos(actualRotation + stepAngle) * distance,
                object.position.y,
                Math.sin(actualRotation + stepAngle) * distance
            )
        });
    }
    animationPosition.setKeys(animationKeys);

    object.animations.push(animationPosition);

    var animationRotation = new BABYLON.Animation(
        "animationRotation",
        "rotation.y",
        this._speed,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    if(reverseRotation) {
        angle *= -1;
    }
    animationKeys = [
        { frame : 0, value : (object.rotation.y) },
        { frame : 100, value : (object.rotation.y + angle) }
    ];
    animationRotation.setKeys(animationKeys);

    object.animations.push(animationRotation);

    var that = this;
    this._scene.beginAnimation(object, 0, 100, false, 1, function() {
        that._moveBeforeNext --;
        if(that._moveBeforeNext == 0) {
            // Without timeout there is a bug
            setTimeout(function() {
                that._callback();
            }, 2);
        }
    });
    this._moveBeforeNext ++;
};

// Function to rotate something around Z Axis
Cube.prototype._rotateAroundZ = function(object, angle, reverseRotation) {
    reverseRotation = reverseRotation || false;

    object.animations = [];
    var distance = Math.sqrt(
        Math.pow((object.position.x), 2) +
        Math.pow((object.position.y), 2)
    );
    var actualRotation = Math.atan2(object.position.x, object.position.y);

    var animationKeys = [];
    var animationPosition = new BABYLON.Animation(
        "animationPosition",
        "position",
        this._speed,
        BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    animationKeys = [];
    animationKeys.push({
        frame: 0,
        value: new BABYLON.Vector3(
            object.position.x,
            object.position.y,
            object.position.z
        )
    });
    for (var i = 1; i <= 100; i++) {
        var stepAngle = (angle / 100) * i;
        animationKeys.push({
            frame: i,
            value: new BABYLON.Vector3(
                Math.sin(actualRotation + stepAngle) * distance,
                Math.cos(actualRotation + stepAngle) * distance,
                object.position.z
            )
        });
    }
    animationPosition.setKeys(animationKeys);

    object.animations.push(animationPosition);

    var animationRotation = new BABYLON.Animation(
        "animationRotation",
        "rotation.z",
        this._speed,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    if (reverseRotation) {
        angle *= -1;
    }
    animationKeys = [
        {frame: 0, value: (object.rotation.z)},
        {frame: 100, value: (object.rotation.z + angle)}
    ];
    animationRotation.setKeys(animationKeys);

    object.animations.push(animationRotation);

    var that = this;
    this._scene.beginAnimation(object, 0, 100, false, 1, function () {
        that._moveBeforeNext--;
        if (that._moveBeforeNext == 0) {
            // Without timeout there is a bug
            setTimeout(function () {
                that._callback();
            }, 2);
        }
    });
    this._moveBeforeNext++;
};


/**
 * Turn front face
 * @param callback
 * @param reverse : Default false
 */
Cube.prototype.turnFront = function(callback, reverse) {
    reverse = reverse || false;

    this._moveBeforeNext = 0;
    var coeff = -Math.PI / 2;
    if (reverse) {
        coeff = -coeff;
    }

    this._callback = function () {
        if (reverse) {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._frontPlanes[0][0];
                this._frontPlanes[0][0] = this._frontPlanes[1][0];
                this._frontPlanes[1][0] = this._frontPlanes[2][0];
                this._frontPlanes[2][0] = this._frontPlanes[2][1];
                this._frontPlanes[2][1] = this._frontPlanes[2][2];
                this._frontPlanes[2][2] = this._frontPlanes[1][2];
                this._frontPlanes[1][2] = this._frontPlanes[0][2];
                this._frontPlanes[0][2] = this._frontPlanes[0][1];
                this._frontPlanes[0][1] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._rightPlanes[2][2];
                this._rightPlanes[2][2] = this._rightPlanes[2][1];
                this._rightPlanes[2][1] = this._rightPlanes[2][0];
                this._rightPlanes[2][0] = this._downPlanes[0][2];
                this._downPlanes[0][2] = this._downPlanes[1][2];
                this._downPlanes[1][2] = this._downPlanes[2][2];
                this._downPlanes[2][2] = this._leftPlanes[2][0];
                this._leftPlanes[2][0] = this._leftPlanes[2][1];
                this._leftPlanes[2][1] = this._leftPlanes[2][2];
                this._leftPlanes[2][2] = this._upPlanes[2][2];
                this._upPlanes[2][2] = this._upPlanes[1][2];
                this._upPlanes[1][2] = this._upPlanes[0][2];
                this._upPlanes[0][2] = tempPlane;
            }
        }
        else {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._frontPlanes[0][0];
                this._frontPlanes[0][0] = this._frontPlanes[0][1];
                this._frontPlanes[0][1] = this._frontPlanes[0][2];
                this._frontPlanes[0][2] = this._frontPlanes[1][2];
                this._frontPlanes[1][2] = this._frontPlanes[2][2];
                this._frontPlanes[2][2] = this._frontPlanes[2][1];
                this._frontPlanes[2][1] = this._frontPlanes[2][0];
                this._frontPlanes[2][0] = this._frontPlanes[1][0];
                this._frontPlanes[1][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._rightPlanes[2][2];
                this._rightPlanes[2][2] = this._upPlanes[0][2];
                this._upPlanes[0][2] = this._upPlanes[1][2];
                this._upPlanes[1][2] = this._upPlanes[2][2];
                this._upPlanes[2][2] = this._leftPlanes[2][2];
                this._leftPlanes[2][2] = this._leftPlanes[2][1];
                this._leftPlanes[2][1] = this._leftPlanes[2][0];
                this._leftPlanes[2][0] = this._downPlanes[2][2];
                this._downPlanes[2][2] = this._downPlanes[1][2];
                this._downPlanes[1][2] = this._downPlanes[0][2];
                this._downPlanes[0][2] = this._rightPlanes[2][0];
                this._rightPlanes[2][0] = this._rightPlanes[2][1];
                this._rightPlanes[2][1] = tempPlane;
            }
        }

        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                this._frontPlanes[x][y].rotation.z -= coeff;
            }
        }
        for (var i = 0; i < 3; i++) {
            this._rightPlanes[2][i].rotation.z -= coeff;
            this._rightPlanes[2][i].scaling.x = 0.00001;
            this._rightPlanes[2][i].scaling.y = 1;

            this._upPlanes[i][2].rotation.z -= coeff;
            this._upPlanes[i][2].scaling.y = 0.00001;
            this._upPlanes[i][2].scaling.x = 1;

            this._leftPlanes[2][i].rotation.z -= coeff;
            this._leftPlanes[2][i].scaling.x = 0.00001;
            this._leftPlanes[2][i].scaling.y = 1;

            this._downPlanes[i][2].rotation.z -= coeff;
            this._downPlanes[i][2].scaling.y = 0.00001;
            this._downPlanes[i][2].scaling.x = 1;
        }

        this._callback = null;
        callback();
    };

    this._rotateAroundZ(this._frontPlanes[0][0], coeff, true);
    this._rotateAroundZ(this._frontPlanes[0][1], coeff, true);
    this._rotateAroundZ(this._frontPlanes[0][2], coeff, true);
    this._rotateAroundZ(this._frontPlanes[1][0], coeff, true);
    this._rotateAroundZ(this._frontPlanes[1][1], coeff, true);
    this._rotateAroundZ(this._frontPlanes[1][2], coeff, true);
    this._rotateAroundZ(this._frontPlanes[2][0], coeff, true);
    this._rotateAroundZ(this._frontPlanes[2][1], coeff, true);
    this._rotateAroundZ(this._frontPlanes[2][2], coeff, true);

    this._rotateAroundZ(this._rightPlanes[2][0], coeff, true);
    this._rotateAroundZ(this._rightPlanes[2][1], coeff, true);
    this._rotateAroundZ(this._rightPlanes[2][2], coeff, true);

    this._rotateAroundZ(this._upPlanes[0][2], coeff, true);
    this._rotateAroundZ(this._upPlanes[1][2], coeff, true);
    this._rotateAroundZ(this._upPlanes[2][2], coeff, true);

    this._rotateAroundZ(this._leftPlanes[2][0], coeff, true);
    this._rotateAroundZ(this._leftPlanes[2][1], coeff, true);
    this._rotateAroundZ(this._leftPlanes[2][2], coeff, true);

    this._rotateAroundZ(this._downPlanes[0][2], coeff, true);
    this._rotateAroundZ(this._downPlanes[1][2], coeff, true);
    this._rotateAroundZ(this._downPlanes[2][2], coeff, true);
};

/**
 * Turn back face
 * @param callback
 * @param reverse : Default false
 */
Cube.prototype.turnBack = function(callback, reverse) {
    reverse = reverse || false;

    this._moveBeforeNext = 0;
    var coeff = Math.PI / 2;
    if (reverse) {
        coeff = -coeff;
    }

    this._callback = function () {
        if (reverse) {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._backPlanes[0][0];
                this._backPlanes[0][0] = this._backPlanes[0][1];
                this._backPlanes[0][1] = this._backPlanes[0][2];
                this._backPlanes[0][2] = this._backPlanes[1][2];
                this._backPlanes[1][2] = this._backPlanes[2][2];
                this._backPlanes[2][2] = this._backPlanes[2][1];
                this._backPlanes[2][1] = this._backPlanes[2][0];
                this._backPlanes[2][0] = this._backPlanes[1][0];
                this._backPlanes[1][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._rightPlanes[0][0];
                this._rightPlanes[0][0] = this._rightPlanes[0][1];
                this._rightPlanes[0][1] = this._rightPlanes[0][2];
                this._rightPlanes[0][2] = this._upPlanes[0][0];
                this._upPlanes[0][0] = this._upPlanes[1][0];
                this._upPlanes[1][0] = this._upPlanes[2][0];
                this._upPlanes[2][0] = this._leftPlanes[0][2];
                this._leftPlanes[0][2] = this._leftPlanes[0][1];
                this._leftPlanes[0][1] = this._leftPlanes[0][0];
                this._leftPlanes[0][0] = this._downPlanes[2][0];
                this._downPlanes[2][0] = this._downPlanes[1][0];
                this._downPlanes[1][0] = this._downPlanes[0][0]
                this._downPlanes[0][0] = tempPlane;
            }
        }
        else {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._backPlanes[0][2];
                this._backPlanes[0][2] = this._backPlanes[0][1];
                this._backPlanes[0][1] = this._backPlanes[0][0];
                this._backPlanes[0][0] = this._backPlanes[1][0];
                this._backPlanes[1][0] = this._backPlanes[2][0];
                this._backPlanes[2][0] = this._backPlanes[2][1];
                this._backPlanes[2][1] = this._backPlanes[2][2];
                this._backPlanes[2][2] = this._backPlanes[1][2];
                this._backPlanes[1][2] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._downPlanes[0][0];
                this._downPlanes[0][0] = this._downPlanes[1][0];
                this._downPlanes[1][0] = this._downPlanes[2][0];
                this._downPlanes[2][0] = this._leftPlanes[0][0];
                this._leftPlanes[0][0] = this._leftPlanes[0][1];
                this._leftPlanes[0][1] = this._leftPlanes[0][2];
                this._leftPlanes[0][2] = this._upPlanes[2][0];
                this._upPlanes[2][0] = this._upPlanes[1][0];
                this._upPlanes[1][0] = this._upPlanes[0][0];
                this._upPlanes[0][0] = this._rightPlanes[0][2];
                this._rightPlanes[0][2] = this._rightPlanes[0][1];
                this._rightPlanes[0][1] = this._rightPlanes[0][0];
                this._rightPlanes[0][0] = tempPlane;
            }
        }

        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                this._backPlanes[x][y].rotation.z -= coeff;
            }
        }
        for (var i = 0; i < 3; i++) {
            this._rightPlanes[0][i].rotation.z -= coeff;
            this._rightPlanes[0][i].scaling.x = 0.00001;
            this._rightPlanes[0][i].scaling.y = 1;

            this._upPlanes[i][0].rotation.z -= coeff;
            this._upPlanes[i][0].scaling.y = 0.00001;
            this._upPlanes[i][0].scaling.x = 1;

            this._leftPlanes[0][i].rotation.z -= coeff;
            this._leftPlanes[0][i].scaling.x = 0.00001;
            this._leftPlanes[0][i].scaling.y = 1;

            this._downPlanes[i][0].rotation.z -= coeff;
            this._downPlanes[i][0].scaling.y = 0.00001;
            this._downPlanes[i][0].scaling.x = 1;
        }

        this._callback = null;
        callback();
    };

    this._rotateAroundZ(this._backPlanes[0][0], coeff, true);
    this._rotateAroundZ(this._backPlanes[0][1], coeff, true);
    this._rotateAroundZ(this._backPlanes[0][2], coeff, true);
    this._rotateAroundZ(this._backPlanes[1][0], coeff, true);
    this._rotateAroundZ(this._backPlanes[1][1], coeff, true);
    this._rotateAroundZ(this._backPlanes[1][2], coeff, true);
    this._rotateAroundZ(this._backPlanes[2][0], coeff, true);
    this._rotateAroundZ(this._backPlanes[2][1], coeff, true);
    this._rotateAroundZ(this._backPlanes[2][2], coeff, true);

    this._rotateAroundZ(this._rightPlanes[0][0], coeff, true);
    this._rotateAroundZ(this._rightPlanes[0][1], coeff, true);
    this._rotateAroundZ(this._rightPlanes[0][2], coeff, true);

    this._rotateAroundZ(this._upPlanes[0][0], coeff, true);
    this._rotateAroundZ(this._upPlanes[1][0], coeff, true);
    this._rotateAroundZ(this._upPlanes[2][0], coeff, true);

    this._rotateAroundZ(this._leftPlanes[0][0], coeff, true);
    this._rotateAroundZ(this._leftPlanes[0][1], coeff, true);
    this._rotateAroundZ(this._leftPlanes[0][2], coeff, true);

    this._rotateAroundZ(this._downPlanes[0][0], coeff, true);
    this._rotateAroundZ(this._downPlanes[1][0], coeff, true);
    this._rotateAroundZ(this._downPlanes[2][0], coeff, true);
};

/**
 * Turn left face
 * @param callback
 * @param reverse : Default false
 */
Cube.prototype.turnLeft = function(callback, reverse) {
    reverse = reverse || false;

    this._moveBeforeNext = 0;
    var coeff = Math.PI / 2;
    if (reverse) {
        coeff = -coeff;
    }

    this._callback = function () {
        if (reverse) {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._leftPlanes[0][0];
                this._leftPlanes[0][0] = this._leftPlanes[0][1];
                this._leftPlanes[0][1] = this._leftPlanes[0][2];
                this._leftPlanes[0][2] = this._leftPlanes[1][2];
                this._leftPlanes[1][2] = this._leftPlanes[2][2];
                this._leftPlanes[2][2] = this._leftPlanes[2][1];
                this._leftPlanes[2][1] = this._leftPlanes[2][0];
                this._leftPlanes[2][0] = this._leftPlanes[1][0];
                this._leftPlanes[1][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._frontPlanes[2][2];
                this._frontPlanes[2][2] = this._frontPlanes[2][1];
                this._frontPlanes[2][1] = this._frontPlanes[2][0];
                this._frontPlanes[2][0] = this._downPlanes[2][2];
                this._downPlanes[2][2] = this._downPlanes[2][1];
                this._downPlanes[2][1] = this._downPlanes[2][0];
                this._downPlanes[2][0] = this._backPlanes[2][0];
                this._backPlanes[2][0] = this._backPlanes[2][1];
                this._backPlanes[2][1] = this._backPlanes[2][2];
                this._backPlanes[2][2] = this._upPlanes[2][0];
                this._upPlanes[2][0] = this._upPlanes[2][1];
                this._upPlanes[2][1] = this._upPlanes[2][2];
                this._upPlanes[2][2] = tempPlane;
            }
        }
        else {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._leftPlanes[1][0];
                this._leftPlanes[1][0] = this._leftPlanes[2][0];
                this._leftPlanes[2][0] = this._leftPlanes[2][1];
                this._leftPlanes[2][1] = this._leftPlanes[2][2];
                this._leftPlanes[2][2] = this._leftPlanes[1][2];
                this._leftPlanes[1][2] = this._leftPlanes[0][2];
                this._leftPlanes[0][2] = this._leftPlanes[0][1];
                this._leftPlanes[0][1] = this._leftPlanes[0][0];
                this._leftPlanes[0][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._upPlanes[2][2];
                this._upPlanes[2][2] = this._upPlanes[2][1];
                this._upPlanes[2][1] = this._upPlanes[2][0];
                this._upPlanes[2][0] = this._backPlanes[2][2];
                this._backPlanes[2][2] = this._backPlanes[2][1];
                this._backPlanes[2][1] = this._backPlanes[2][0];
                this._backPlanes[2][0] = this._downPlanes[2][0];
                this._downPlanes[2][0] = this._downPlanes[2][1];
                this._downPlanes[2][1] = this._downPlanes[2][2];
                this._downPlanes[2][2] = this._frontPlanes[2][0];
                this._frontPlanes[2][0] = this._frontPlanes[2][1];
                this._frontPlanes[2][1] = this._frontPlanes[2][2];
                this._frontPlanes[2][2] = tempPlane;
            }
        }

        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                this._leftPlanes[x][y].rotation.x -= coeff;
            }
        }
        for (var i = 0; i < 3; i++) {
            this._frontPlanes[2][i].rotation.x -= coeff;
            this._frontPlanes[2][i].scaling.z = 0.00001;
            this._frontPlanes[2][i].scaling.y = 1;

            this._upPlanes[2][i].rotation.x -= coeff;
            this._upPlanes[2][i].scaling.y = 0.00001;
            this._upPlanes[2][i].scaling.z = 1;

            this._backPlanes[2][i].rotation.x -= coeff;
            this._backPlanes[2][i].scaling.z = 0.00001;
            this._backPlanes[2][i].scaling.y = 1;

            this._downPlanes[2][i].rotation.x -= coeff;
            this._downPlanes[2][i].scaling.y = 0.00001;
            this._downPlanes[2][i].scaling.z = 1;
        }

        this._callback = null;
        callback();
    };

    this._rotateAroundX(this._leftPlanes[0][0], coeff);
    this._rotateAroundX(this._leftPlanes[0][1], coeff);
    this._rotateAroundX(this._leftPlanes[0][2], coeff);
    this._rotateAroundX(this._leftPlanes[1][0], coeff);
    this._rotateAroundX(this._leftPlanes[1][1], coeff);
    this._rotateAroundX(this._leftPlanes[1][2], coeff);
    this._rotateAroundX(this._leftPlanes[2][0], coeff);
    this._rotateAroundX(this._leftPlanes[2][1], coeff);
    this._rotateAroundX(this._leftPlanes[2][2], coeff);

    this._rotateAroundX(this._frontPlanes[2][0], coeff);
    this._rotateAroundX(this._frontPlanes[2][1], coeff);
    this._rotateAroundX(this._frontPlanes[2][2], coeff);

    this._rotateAroundX(this._upPlanes[2][0], coeff);
    this._rotateAroundX(this._upPlanes[2][1], coeff);
    this._rotateAroundX(this._upPlanes[2][2], coeff);

    this._rotateAroundX(this._backPlanes[2][0], coeff);
    this._rotateAroundX(this._backPlanes[2][1], coeff);
    this._rotateAroundX(this._backPlanes[2][2], coeff);

    this._rotateAroundX(this._downPlanes[2][0], coeff);
    this._rotateAroundX(this._downPlanes[2][1], coeff);
    this._rotateAroundX(this._downPlanes[2][2], coeff);
};

/**
 * Turn right face
 * @param callback
 * @param reverse : Default false
 */
Cube.prototype.turnRight = function(callback, reverse) {
    reverse = reverse || false;

    this._moveBeforeNext = 0;
    var coeff = -Math.PI / 2;
    if (reverse) {
        coeff = -coeff;
    }

    this._callback = function () {
        if (reverse) {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._rightPlanes[1][0];
                this._rightPlanes[1][0] = this._rightPlanes[2][0];
                this._rightPlanes[2][0] = this._rightPlanes[2][1];
                this._rightPlanes[2][1] = this._rightPlanes[2][2];
                this._rightPlanes[2][2] = this._rightPlanes[1][2];
                this._rightPlanes[1][2] = this._rightPlanes[0][2];
                this._rightPlanes[0][2] = this._rightPlanes[0][1];
                this._rightPlanes[0][1] = this._rightPlanes[0][0];
                this._rightPlanes[0][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._backPlanes[0][2];
                this._backPlanes[0][2] = this._backPlanes[0][1];
                this._backPlanes[0][1] = this._backPlanes[0][0];
                this._backPlanes[0][0] = this._downPlanes[0][0];
                this._downPlanes[0][0] = this._downPlanes[0][1];
                this._downPlanes[0][1] = this._downPlanes[0][2];
                this._downPlanes[0][2] = this._frontPlanes[0][0];
                this._frontPlanes[0][0] = this._frontPlanes[0][1];
                this._frontPlanes[0][1] = this._frontPlanes[0][2];
                this._frontPlanes[0][2] = this._upPlanes[0][2];
                this._upPlanes[0][2] = this._upPlanes[0][1];
                this._upPlanes[0][1] = this._upPlanes[0][0];
                this._upPlanes[0][0] = tempPlane;
            }
        }
        else {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._rightPlanes[0][0];
                this._rightPlanes[0][0] = this._rightPlanes[0][1];
                this._rightPlanes[0][1] = this._rightPlanes[0][2];
                this._rightPlanes[0][2] = this._rightPlanes[1][2];
                this._rightPlanes[1][2] = this._rightPlanes[2][2];
                this._rightPlanes[2][2] = this._rightPlanes[2][1];
                this._rightPlanes[2][1] = this._rightPlanes[2][0];
                this._rightPlanes[2][0] = this._rightPlanes[1][0];
                this._rightPlanes[1][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._upPlanes[0][0];
                this._upPlanes[0][0] = this._upPlanes[0][1];
                this._upPlanes[0][1] = this._upPlanes[0][2];
                this._upPlanes[0][2] = this._frontPlanes[0][2];
                this._frontPlanes[0][2] = this._frontPlanes[0][1];
                this._frontPlanes[0][1] = this._frontPlanes[0][0];
                this._frontPlanes[0][0] = this._downPlanes[0][2];
                this._downPlanes[0][2] = this._downPlanes[0][1];
                this._downPlanes[0][1] = this._downPlanes[0][0];
                this._downPlanes[0][0] = this._backPlanes[0][0];
                this._backPlanes[0][0] = this._backPlanes[0][1];
                this._backPlanes[0][1] = this._backPlanes[0][2];
                this._backPlanes[0][2] = tempPlane;
            }
        }

        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                this._rightPlanes[x][y].rotation.x -= coeff;
            }
        }
        for (var i = 0; i < 3; i++) {
            this._frontPlanes[0][i].rotation.x -= coeff;
            this._frontPlanes[0][i].scaling.z = 0.00001;
            this._frontPlanes[0][i].scaling.y = 1;

            this._upPlanes[0][i].rotation.x -= coeff;
            this._upPlanes[0][i].scaling.y = 0.00001;
            this._upPlanes[0][i].scaling.z = 1;

            this._backPlanes[0][i].rotation.x -= coeff;
            this._backPlanes[0][i].scaling.z = 0.00001;
            this._backPlanes[0][i].scaling.y = 1;

            this._downPlanes[0][i].rotation.x -= coeff;
            this._downPlanes[0][i].scaling.y = 0.00001;
            this._downPlanes[0][i].scaling.z = 1;
        }

        this._callback = null;
        callback();
    }

    this._rotateAroundX(this._rightPlanes[0][0], coeff);
    this._rotateAroundX(this._rightPlanes[0][1], coeff);
    this._rotateAroundX(this._rightPlanes[0][2], coeff);
    this._rotateAroundX(this._rightPlanes[1][0], coeff);
    this._rotateAroundX(this._rightPlanes[1][1], coeff);
    this._rotateAroundX(this._rightPlanes[1][2], coeff);
    this._rotateAroundX(this._rightPlanes[2][0], coeff);
    this._rotateAroundX(this._rightPlanes[2][1], coeff);
    this._rotateAroundX(this._rightPlanes[2][2], coeff);

    this._rotateAroundX(this._frontPlanes[0][0], coeff);
    this._rotateAroundX(this._frontPlanes[0][1], coeff);
    this._rotateAroundX(this._frontPlanes[0][2], coeff);

    this._rotateAroundX(this._upPlanes[0][0], coeff);
    this._rotateAroundX(this._upPlanes[0][1], coeff);
    this._rotateAroundX(this._upPlanes[0][2], coeff);

    this._rotateAroundX(this._backPlanes[0][0], coeff);
    this._rotateAroundX(this._backPlanes[0][1], coeff);
    this._rotateAroundX(this._backPlanes[0][2], coeff);

    this._rotateAroundX(this._downPlanes[0][0], coeff);
    this._rotateAroundX(this._downPlanes[0][1], coeff);
    this._rotateAroundX(this._downPlanes[0][2], coeff);
};

/**
 * Turn up face
 * @param callback
 * @param reverse : Default false
 */
Cube.prototype.turnUp = function(callback, reverse) {
    reverse = reverse || false;

    this._moveBeforeNext = 0;
    var coeff = -Math.PI / 2;
    if (reverse) {
        coeff = -coeff;
    }

    this._callback = function () {
        if (reverse) {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._upPlanes[0][0];
                this._upPlanes[0][0] = this._upPlanes[0][1];
                this._upPlanes[0][1] = this._upPlanes[0][2];
                this._upPlanes[0][2] = this._upPlanes[1][2];
                this._upPlanes[1][2] = this._upPlanes[2][2];
                this._upPlanes[2][2] = this._upPlanes[2][1];
                this._upPlanes[2][1] = this._upPlanes[2][0];
                this._upPlanes[2][0] = this._upPlanes[1][0];
                this._upPlanes[1][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._frontPlanes[0][2];
                this._frontPlanes[0][2] = this._frontPlanes[1][2];
                this._frontPlanes[1][2] = this._frontPlanes[2][2];
                this._frontPlanes[2][2] = this._leftPlanes[2][2];
                this._leftPlanes[2][2] = this._leftPlanes[1][2];
                this._leftPlanes[1][2] = this._leftPlanes[0][2];
                this._leftPlanes[0][2] = this._backPlanes[2][2];
                this._backPlanes[2][2] = this._backPlanes[1][2];
                this._backPlanes[1][2] = this._backPlanes[0][2];
                this._backPlanes[0][2] = this._rightPlanes[0][2];
                this._rightPlanes[0][2] = this._rightPlanes[1][2];
                this._rightPlanes[1][2] = this._rightPlanes[2][2];
                this._rightPlanes[2][2] = tempPlane;
            }
        }
        else {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._upPlanes[0][0];
                this._upPlanes[0][0] = this._upPlanes[1][0];
                this._upPlanes[1][0] = this._upPlanes[2][0];
                this._upPlanes[2][0] = this._upPlanes[2][1];
                this._upPlanes[2][1] = this._upPlanes[2][2];
                this._upPlanes[2][2] = this._upPlanes[1][2];
                this._upPlanes[1][2] = this._upPlanes[0][2];
                this._upPlanes[0][2] = this._upPlanes[0][1];
                this._upPlanes[0][1] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._rightPlanes[2][2];
                this._rightPlanes[2][2] = this._rightPlanes[1][2];
                this._rightPlanes[1][2] = this._rightPlanes[0][2];
                this._rightPlanes[0][2] = this._backPlanes[0][2];
                this._backPlanes[0][2] = this._backPlanes[1][2];
                this._backPlanes[1][2] = this._backPlanes[2][2];
                this._backPlanes[2][2] = this._leftPlanes[0][2];
                this._leftPlanes[0][2] = this._leftPlanes[1][2];
                this._leftPlanes[1][2] = this._leftPlanes[2][2];
                this._leftPlanes[2][2] = this._frontPlanes[2][2];
                this._frontPlanes[2][2] = this._frontPlanes[1][2];
                this._frontPlanes[1][2] = this._frontPlanes[0][2];
                this._frontPlanes[0][2] = tempPlane;
            }
        }

        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                this._upPlanes[x][y].rotation.y += coeff;
            }
        }
        for (var i = 0; i < 3; i++) {

            this._rightPlanes[i][2].rotation.y += coeff;
            this._rightPlanes[i][2].scaling.x = 0.00001;
            this._rightPlanes[i][2].scaling.z = 1;

            this._backPlanes[i][2].rotation.y += coeff;
            this._backPlanes[i][2].scaling.z = 0.00001;
            this._backPlanes[i][2].scaling.x = 1;

            this._leftPlanes[i][2].rotation.y += coeff;
            this._leftPlanes[i][2].scaling.x = 0.00001;
            this._leftPlanes[i][2].scaling.z = 1;

            this._frontPlanes[i][2].rotation.y += coeff;
            this._frontPlanes[i][2].scaling.z = 0.00001;
            this._frontPlanes[i][2].scaling.x = 1;
        }

        this._callback = null;
        callback();
    };

    this._rotateAroundY(this._upPlanes[0][0], coeff, true);
    this._rotateAroundY(this._upPlanes[0][1], coeff, true);
    this._rotateAroundY(this._upPlanes[0][2], coeff, true);
    this._rotateAroundY(this._upPlanes[1][0], coeff, true);
    this._rotateAroundY(this._upPlanes[1][1], coeff, true);
    this._rotateAroundY(this._upPlanes[1][2], coeff, true);
    this._rotateAroundY(this._upPlanes[2][0], coeff, true);
    this._rotateAroundY(this._upPlanes[2][1], coeff, true);
    this._rotateAroundY(this._upPlanes[2][2], coeff, true);

    this._rotateAroundY(this._rightPlanes[0][2], coeff, true);
    this._rotateAroundY(this._rightPlanes[1][2], coeff, true);
    this._rotateAroundY(this._rightPlanes[2][2], coeff, true);

    this._rotateAroundY(this._backPlanes[0][2], coeff, true);
    this._rotateAroundY(this._backPlanes[1][2], coeff, true);
    this._rotateAroundY(this._backPlanes[2][2], coeff, true);

    this._rotateAroundY(this._leftPlanes[0][2], coeff, true);
    this._rotateAroundY(this._leftPlanes[1][2], coeff, true);
    this._rotateAroundY(this._leftPlanes[2][2], coeff, true);

    this._rotateAroundY(this._frontPlanes[0][2], coeff, true);
    this._rotateAroundY(this._frontPlanes[1][2], coeff, true);
    this._rotateAroundY(this._frontPlanes[2][2], coeff, true);
};

/**
 * Turn down face
 * @param callback
 * @param reverse : Default false
 */
Cube.prototype.turnDown = function(callback, reverse) {
    reverse = reverse || false;

    this._moveBeforeNext = 0;
    var coeff = Math.PI / 2;
    if (reverse) {
        coeff = -coeff;
    }

    this._callback = function () {
        if (reverse) {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._downPlanes[0][0];
                this._downPlanes[0][0] = this._downPlanes[1][0];
                this._downPlanes[1][0] = this._downPlanes[2][0];
                this._downPlanes[2][0] = this._downPlanes[2][1];
                this._downPlanes[2][1] = this._downPlanes[2][2];
                this._downPlanes[2][2] = this._downPlanes[1][2];
                this._downPlanes[1][2] = this._downPlanes[0][2];
                this._downPlanes[0][2] = this._downPlanes[0][1];
                this._downPlanes[0][1] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._frontPlanes[0][0];
                this._frontPlanes[0][0] = this._frontPlanes[1][0];
                this._frontPlanes[1][0] = this._frontPlanes[2][0];
                this._frontPlanes[2][0] = this._rightPlanes[0][0];
                this._rightPlanes[0][0] = this._rightPlanes[1][0];
                this._rightPlanes[1][0] = this._rightPlanes[2][0];
                this._rightPlanes[2][0] = this._backPlanes[2][0];
                this._backPlanes[2][0] = this._backPlanes[1][0];
                this._backPlanes[1][0] = this._backPlanes[0][0];
                this._backPlanes[0][0] = this._leftPlanes[2][0];
                this._leftPlanes[2][0] = this._leftPlanes[1][0];
                this._leftPlanes[1][0] = this._leftPlanes[0][0];
                this._leftPlanes[0][0] = tempPlane;
            }
        }
        else {
            for (var i = 0; i < 2; i++) {
                var tempPlane = this._downPlanes[0][0];
                this._downPlanes[0][0] = this._downPlanes[0][1];
                this._downPlanes[0][1] = this._downPlanes[0][2];
                this._downPlanes[0][2] = this._downPlanes[1][2];
                this._downPlanes[1][2] = this._downPlanes[2][2];
                this._downPlanes[2][2] = this._downPlanes[2][1];
                this._downPlanes[2][1] = this._downPlanes[2][0];
                this._downPlanes[2][0] = this._downPlanes[1][0];
                this._downPlanes[1][0] = tempPlane;
            }
            for (var i = 0; i < 3; i++) {
                tempPlane = this._leftPlanes[0][0];
                this._leftPlanes[0][0] = this._leftPlanes[1][0];
                this._leftPlanes[1][0] = this._leftPlanes[2][0];
                this._leftPlanes[2][0] = this._backPlanes[0][0];
                this._backPlanes[0][0] = this._backPlanes[1][0];
                this._backPlanes[1][0] = this._backPlanes[2][0];
                this._backPlanes[2][0] = this._rightPlanes[2][0];
                this._rightPlanes[2][0] = this._rightPlanes[1][0];
                this._rightPlanes[1][0] = this._rightPlanes[0][0];
                this._rightPlanes[0][0] = this._frontPlanes[2][0];
                this._frontPlanes[2][0] = this._frontPlanes[1][0];
                this._frontPlanes[1][0] = this._frontPlanes[0][0];
                this._frontPlanes[0][0] = tempPlane;
            }
        }

        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                this._downPlanes[x][y].rotation.y += coeff;
            }
        }
        for (var i = 0; i < 3; i++) {
            this._rightPlanes[i][0].rotation.y += coeff;
            this._rightPlanes[i][0].scaling.x = 0.00001;
            this._rightPlanes[i][0].scaling.z = 1;

            this._backPlanes[i][0].rotation.y += coeff;
            this._backPlanes[i][0].scaling.z = 0.00001;
            this._backPlanes[i][0].scaling.x = 1;

            this._leftPlanes[i][0].rotation.y += coeff;
            this._leftPlanes[i][0].scaling.x = 0.00001;
            this._leftPlanes[i][0].scaling.z = 1;

            this._frontPlanes[i][0].rotation.y += coeff;
            this._frontPlanes[i][0].scaling.z = 0.00001;
            this._frontPlanes[i][0].scaling.x = 1;
            this._frontPlanes[i][0].scaling.x = 1;
        }

        this._callback = null;
        callback();
    }

    this._rotateAroundY(this._downPlanes[0][0], coeff, true);
    this._rotateAroundY(this._downPlanes[0][1], coeff, true);
    this._rotateAroundY(this._downPlanes[0][2], coeff, true);
    this._rotateAroundY(this._downPlanes[1][0], coeff, true);
    this._rotateAroundY(this._downPlanes[1][1], coeff, true);
    this._rotateAroundY(this._downPlanes[1][2], coeff, true);
    this._rotateAroundY(this._downPlanes[2][0], coeff, true);
    this._rotateAroundY(this._downPlanes[2][1], coeff, true);
    this._rotateAroundY(this._downPlanes[2][2], coeff, true);

    this._rotateAroundY(this._rightPlanes[0][0], coeff, true);
    this._rotateAroundY(this._rightPlanes[1][0], coeff, true);
    this._rotateAroundY(this._rightPlanes[2][0], coeff, true);

    this._rotateAroundY(this._backPlanes[0][0], coeff, true);
    this._rotateAroundY(this._backPlanes[1][0], coeff, true);
    this._rotateAroundY(this._backPlanes[2][0], coeff, true);

    this._rotateAroundY(this._leftPlanes[0][0], coeff, true);
    this._rotateAroundY(this._leftPlanes[1][0], coeff, true);
    this._rotateAroundY(this._leftPlanes[2][0], coeff, true);

    this._rotateAroundY(this._frontPlanes[0][0], coeff, true);
    this._rotateAroundY(this._frontPlanes[1][0], coeff, true);
    this._rotateAroundY(this._frontPlanes[2][0], coeff, true);
};


/** Exploded view */
// True to go to exploded view, false to rearrange it
Cube.prototype.explodedView = function() {
    var x = 0, y = 0;
    this._isExploded = this._isExploded ? false : true;

    // Explode the cube
    if(this._isExploded) {
        // Front
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._frontPlanes[x][y].position.x = (x - 1) * 1.5;
                this._frontPlanes[x][y].position.y = (y - 1) * 1.5;
                this._frontPlanes[x][y].position.z = (+ 1.5) * 1.5;
            }
        }
        // Back
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._backPlanes[x][y].position.x = (x - 1) * 1.5;
                this._backPlanes[x][y].position.y = (y - 1) * 1.5;
                this._backPlanes[x][y].position.z = (- 1.5) * 1.5;
            }
        }
        // Up
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._upPlanes[x][y].position.x = (x - 1) * 1.5;
                this._upPlanes[x][y].position.y = (+ 1.5) * 1.5;
                this._upPlanes[x][y].position.z = (y - 1) * 1.5;
            }
        }
        // Down
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._downPlanes[x][y].position.x = (x - 1) * 1.5;
                this._downPlanes[x][y].position.y = (- 1.5) * 1.5;
                this._downPlanes[x][y].position.z = (y - 1) * 1.5;
            }
        }
        // Left
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._leftPlanes[x][y].position.x = ( 1.5) * 1.5;
                this._leftPlanes[x][y].position.y = (y - 1) * 1.5;
                this._leftPlanes[x][y].position.z = (x - 1) * 1.5;
            }
        }
        // Right
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._rightPlanes[x][y].position.x = (- 1.5) * 1.5;
                this._rightPlanes[x][y].position.y = (y - 1) * 1.5;
                this._rightPlanes[x][y].position.z = (x - 1) * 1.5;
            }
        }

        // Show pieces
        this._pieces.forEach(function(m) {
            m.isVisible = true;
        });
    }
    // Reconstruct the cube
    else {
        // Front
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._frontPlanes[x][y].position.x = x - 1;
                this._frontPlanes[x][y].position.y = y - 1;
                this._frontPlanes[x][y].position.z = +1.5;
            }
        }
        // Back
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._backPlanes[x][y].position.x = x - 1;
                this._backPlanes[x][y].position.y = y - 1;
                this._backPlanes[x][y].position.z = -1.5;
            }
        }
        // Up
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._upPlanes[x][y].position.x = x - 1;
                this._upPlanes[x][y].position.y = +1.5;
                this._upPlanes[x][y].position.z = y - 1;
            }
        }
        // Down
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._downPlanes[x][y].position.x = x - 1;
                this._downPlanes[x][y].position.y = -1.5;
                this._downPlanes[x][y].position.z = y - 1;
            }
        }
        // Left
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._leftPlanes[x][y].position.x = 1.5;
                this._leftPlanes[x][y].position.y = y - 1;
                this._leftPlanes[x][y].position.z = x - 1;
            }
        }
        // Right
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                this._rightPlanes[x][y].position.x = -1.5;
                this._rightPlanes[x][y].position.y = y - 1;
                this._rightPlanes[x][y].position.z = x - 1;
            }
        }

        // Hide pieces
        this._pieces.forEach(function(m) {
            m.isVisible = false;
        });
    }
};