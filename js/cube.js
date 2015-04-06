Cube = {

    /********* FIELDS *********/

    // Faces informations
    _frontFace : [['G','G','G'],
                  ['G','G','G'],
                  ['G','G','G']],
    _backFace  : [['B','B','B'],
                  ['B','B','B'],
                  ['B','B','B']],
    _upFace    : [['W','W','W'],
                  ['W','W','W'],
                  ['W','W','W']],
    _downFace  : [['Y','Y','Y'],
                  ['Y','Y','Y'],
                  ['Y','Y','Y']],
    _leftFace  : [['O','O','O'],
                  ['O','O','O'],
                  ['O','O','O']],
    _rightFace : [['R','R','R'],
                  ['R','R','R'],
                  ['R','R','R']],

    // Planes containers (faces)
    _frontPlanes : [[null,null,null],[null,null,null],[null,null,null]],
    _backPlanes  : [[null,null,null],[null,null,null],[null,null,null]],
    _upPlanes    : [[null,null,null],[null,null,null],[null,null,null]],
    _downPlanes  : [[null,null,null],[null,null,null],[null,null,null]],
    _leftPlanes  : [[null,null,null],[null,null,null],[null,null,null]],
    _rightPlanes : [[null,null,null],[null,null,null],[null,null,null]],

    _stateBeforeMove : [],
    _speed : 50,


    /********* FUNCTIONS *********/

    initColors : function(scene) {
        this._scene = scene;

        this._matGreen = new BABYLON.StandardMaterial("green", scene);
        this._matGreen.diffuseColor = new BABYLON.Color3(0, 1, 0);
        this._matGreen.specularColor = new BABYLON.Color3.Black();

        this._matBlue = new BABYLON.StandardMaterial("green", scene);
        this._matBlue.diffuseColor = new BABYLON.Color3(0, 0, 1);
        this._matBlue.specularColor = new BABYLON.Color3.Black();

        this._matWhite = new BABYLON.StandardMaterial("green", scene);
        this._matWhite.diffuseColor = new BABYLON.Color3(1, 1, 1);
        this._matWhite.specularColor = new BABYLON.Color3.Black();

        this._matYellow = new BABYLON.StandardMaterial("green", scene);
        this._matYellow.diffuseColor = new BABYLON.Color3(1, 1, 0);
        this._matYellow.specularColor = new BABYLON.Color3.Black();

        this._matOrange = new BABYLON.StandardMaterial("green", scene);
        this._matOrange.diffuseColor = new BABYLON.Color3(0.6, 0.3, 0);
        this._matOrange.specularColor = new BABYLON.Color3.Black();

        this._matRed = new BABYLON.StandardMaterial("green", scene);
        this._matRed.diffuseColor = new BABYLON.Color3(1, 0, 0);
        this._matRed.specularColor = new BABYLON.Color3.Black();
    },

    initFaces : function(scene) {
        var pivotCenter = BABYLON.Mesh.CreateBox("pivotCenter", 1, scene);
        pivotCenter.visibility = false;

        // Front
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._frontPlanes[x][y] = BABYLON.Mesh.CreateBox("front" + x + y, 1, scene);
                this._frontPlanes[x][y].position.x = x-1;
                this._frontPlanes[x][y].position.y = y-1;
                this._frontPlanes[x][y].position.z =  +1.5;
                this._frontPlanes[x][y].scaling.x = 0.95;
                this._frontPlanes[x][y].scaling.y = 0.95;
                this._frontPlanes[x][y].scaling.z = 0.01;
                this._frontPlanes[x][y].material = this._matGreen;
                this._frontPlanes[x][y].parent = pivotCenter;
            }
        }

        // Back
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._backPlanes[x][y] = BABYLON.Mesh.CreateBox("back" + x + y, 1, scene);
                this._backPlanes[x][y].position.x = x-1;
                this._backPlanes[x][y].position.y = y-1;
                this._backPlanes[x][y].position.z =  -1.5;
                this._backPlanes[x][y].scaling.x = 0.95;
                this._backPlanes[x][y].scaling.y = 0.95;
                this._backPlanes[x][y].scaling.z = 0.01;
                this._backPlanes[x][y].material = this._matBlue;
                this._backPlanes[x][y].parent = pivotCenter;
            }
        }

        // Up
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._upPlanes[x][y] = BABYLON.Mesh.CreateBox("up" + x + y, 1, scene);
                this._upPlanes[x][y].position.x = x-1;
                this._upPlanes[x][y].position.y =  +1.5;
                this._upPlanes[x][y].position.z = y-1;
                this._upPlanes[x][y].scaling.x = 0.95;
                this._upPlanes[x][y].scaling.y = 0.01;
                this._upPlanes[x][y].scaling.z = 0.95;
                this._upPlanes[x][y].material = this._matWhite;
                this._upPlanes[x][y].parent = pivotCenter;
            }
        }

        // Down
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._downPlanes[x][y] = BABYLON.Mesh.CreateBox("down" + x + y, 1, scene);
                this._downPlanes[x][y].position.x = x-1;
                this._downPlanes[x][y].position.y =  -1.5;
                this._downPlanes[x][y].position.z = y-1;
                this._downPlanes[x][y].scaling.x = 0.95;
                this._downPlanes[x][y].scaling.y = 0.01;
                this._downPlanes[x][y].scaling.z = 0.95;
                this._downPlanes[x][y].material = this._matYellow;
                this._downPlanes[x][y].parent = pivotCenter;
            }
        }

        // Left
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._leftPlanes[x][y] = BABYLON.Mesh.CreateBox("down" + x + y, 1, scene);
                this._leftPlanes[x][y].position.x =   1.5;
                this._leftPlanes[x][y].position.y = y-1;
                this._leftPlanes[x][y].position.z = x-1;
                this._leftPlanes[x][y].scaling.x = 0.01;
                this._leftPlanes[x][y].scaling.y = 0.95;
                this._leftPlanes[x][y].scaling.z = 0.95;
                this._leftPlanes[x][y].material = this._matOrange;
                this._leftPlanes[x][y].parent = pivotCenter;
            }
        }

        // Right
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._rightPlanes[x][y] = BABYLON.Mesh.CreateBox("down" + x + y, 1, scene);
                this._rightPlanes[x][y].position.x =  -1.5;
                this._rightPlanes[x][y].position.y = y-1;
                this._rightPlanes[x][y].position.z = x-1;
                this._rightPlanes[x][y].scaling.x = 0.01;
                this._rightPlanes[x][y].scaling.y = 0.95;
                this._rightPlanes[x][y].scaling.z = 0.95;
                this._rightPlanes[x][y].material = this._matRed;
                this._rightPlanes[x][y].parent = pivotCenter;
            }
        }
    },


    // Function to rotate something around X Axis
    _rotateAroundX : function(object, angle, reverseRotation) {
        reverseRotation = reverseRotation || false;

        object.animations = [];
        var distance = Math.sqrt(
            Math.pow((object.position.z), 2) +
            Math.pow((object.position.y), 2)
        );
        var actualRotation = Math.atan2(object.position.z, object.position.y);

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
        for(var i = 1; i <= 100; i++) {
            var stepAngle = (angle / 100) * i;
            animationKeys.push({
                frame : i,
                value : new BABYLON.Vector3(
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

        if(reverseRotation) {
            angle *= -1;
        }
        animationKeys = [
            { frame : 0, value : (object.rotation.x) },
            { frame : 100, value : (object.rotation.x + angle) }
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
    },

    // Function to rotate something around Y Axis
    _rotateAroundY : function(object, angle, reverseRotation) {
        reverseRotation = reverseRotation || false;

        object.animations = [];
        var distance = Math.sqrt(
            Math.pow((object.position.x), 2) +
            Math.pow((object.position.z), 2)
        );
        var actualRotation = Math.atan2(object.position.z, object.position.x);

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
    },

    // Function to rotate something around Z Axis
    _rotateAroundZ : function(object, angle, reverseRotation) {
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
        for(var i = 1; i <= 100; i++) {
            var stepAngle = (angle / 100) * i;
            animationKeys.push({
                frame : i,
                value : new BABYLON.Vector3(
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
        if(reverseRotation) {
            angle *= -1;
        }
        animationKeys = [
            { frame : 0, value : (object.rotation.z) },
            { frame : 100, value : (object.rotation.z + angle) }
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
    },


    /**
     * Turn front face
     * @param callback
     * @param reverse : Default false
     */
    turnFront : function(callback, reverse) {
        reverse = reverse || false;

        this._moveBeforeNext = 0;
        var coeff = -Math.PI / 2;
        if(reverse) { coeff = -coeff; }

        if(reverse) {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }
        else {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }

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
    },

    /**
     * Turn back face
     * @param callback
     * @param reverse : Default false
     */
    turnBack : function(callback, reverse) {
        reverse = reverse || false;

        this._moveBeforeNext = 0;
        var coeff = Math.PI / 2;
        if(reverse) { coeff = -coeff; }

        if(reverse) {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }
        else {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }

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
    },

    /**
     * Turn left face
     * @param callback
     * @param reverse : Default false
     */
    turnLeft : function(callback, reverse) {
        reverse = reverse || false;

        this._moveBeforeNext = 0;
        var coeff = Math.PI / 2;
        if(reverse) { coeff = -coeff; }

        if(reverse) {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }
        else {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }

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
    },

    /**
     * Turn right face
     * @param callback
     * @param reverse : Default false
     */
    turnRight : function(callback, reverse) {
        reverse = reverse || false;

        this._moveBeforeNext = 0;
        var coeff = -Math.PI / 2;
        if(reverse) { coeff = -coeff; }

        if(reverse) {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }
        else {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
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
    },

    /**
     * Turn up face
     * @param callback
     * @param reverse : Default false
     */
    turnUp : function(callback, reverse) {
        reverse = reverse || false;

        this._moveBeforeNext = 0;
        var coeff = -Math.PI / 2;
        if(reverse) { coeff = -coeff; }

        if(reverse) {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
                    tempPlane = this._rightPlanes[0][2];
                    this._rightPlanes[0][2] = this._rightPlanes[1][2];
                    this._rightPlanes[1][2] = this._rightPlanes[2][2];
                    this._rightPlanes[2][2] = this._frontPlanes[0][2];
                    this._frontPlanes[0][2] = this._frontPlanes[1][2];
                    this._frontPlanes[1][2] = this._frontPlanes[2][2];
                    this._frontPlanes[2][2] = this._leftPlanes[2][2];
                    this._leftPlanes[2][2] = this._leftPlanes[1][2];
                    this._leftPlanes[1][2] = this._leftPlanes[0][2];
                    this._leftPlanes[0][2] = this._backPlanes[2][2];
                    this._backPlanes[2][2] = this._backPlanes[1][2];
                    this._backPlanes[1][2] = this._backPlanes[0][2];
                    this._backPlanes[0][2] = tempPlane;
                }

                this._callback = null;
                callback();
            };
        }
        else {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
        }

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
    },

    /**
     * Turn down face
     * @param callback
     * @param reverse : Default false
     */
    turnDown : function(callback, reverse) {
        reverse = reverse || false;

        this._moveBeforeNext = 0;
        var coeff = Math.PI / 2;
        if(reverse) { coeff = -coeff; }

        if(reverse) {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
                    tempPlane = this._rightPlanes[0][2];
                    this._rightPlanes[0][2] = this._rightPlanes[1][2];
                    this._rightPlanes[1][2] = this._rightPlanes[2][2];
                    this._rightPlanes[2][2] = this._frontPlanes[0][2];
                    this._frontPlanes[0][2] = this._frontPlanes[1][2];
                    this._frontPlanes[1][2] = this._frontPlanes[2][2];
                    this._frontPlanes[2][2] = this._leftPlanes[2][2];
                    this._leftPlanes[2][2] = this._leftPlanes[1][2];
                    this._leftPlanes[1][2] = this._leftPlanes[0][2];
                    this._leftPlanes[0][2] = this._backPlanes[2][2];
                    this._backPlanes[2][2] = this._backPlanes[1][2];
                    this._backPlanes[1][2] = this._backPlanes[0][2];
                    this._backPlanes[0][2] = tempPlane;
                }

                this._callback = null;
                callback();
            };
        }
        else {
            this._callback = function() {
                for(var i = 0; i < 2; i++) {
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
                for(var i = 0; i < 3; i++) {
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

                this._callback = null;
                callback();
            };
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
    }

};