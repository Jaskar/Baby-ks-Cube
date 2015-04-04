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

    // Color materials
    _matGreen   : null,
    _matBlue    : null,
    _matWhite   : null,
    _matYellow  : null,
    _matOrange  : null,
    _matRed     : null,

    // Planes containers (faces)
    _frontPlanes : [[null,null,null],[null,null,null],[null,null,null]],
    _backPlanes  : [[null,null,null],[null,null,null],[null,null,null]],
    _upPlanes    : [[null,null,null],[null,null,null],[null,null,null]],
    _downPlanes  : [[null,null,null],[null,null,null],[null,null,null]],
    _leftPlanes  : [[null,null,null],[null,null,null],[null,null,null]],
    _rightPlanes : [[null,null,null],[null,null,null],[null,null,null]],

    _registeredRender : [],
    _totalCoeff : 0,


    /********* FUNCTIONS *********/

    initColors : function(scene) {
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

        // Front
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._frontPlanes[x][y] = BABYLON.Mesh.CreateBox("front" + x + y, 1, scene);
                this._frontPlanes[x][y].position.x = x-1;
                this._frontPlanes[x][y].position.y = y-1;
                this._frontPlanes[x][y].position.z =  +1.5;
                this._frontPlanes[x][y].rotation.y = Math.PI;
                this._frontPlanes[x][y].scaling.x = 0.95;
                this._frontPlanes[x][y].scaling.y = 0.95;
                this._frontPlanes[x][y].scaling.z = 0.01;
                this._frontPlanes[x][y].material = this._matGreen;
            }
        }

        // Back
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._backPlanes[x][y] = BABYLON.Mesh.CreateBox("back" + x + y, 1, scene);
                this._backPlanes[x][y].position.x = x-1;
                this._backPlanes[x][y].position.y = y-1;
                this._backPlanes[x][y].position.z =  -1.5;
                this._backPlanes[x][y].rotation.y = 0;
                this._backPlanes[x][y].scaling.x = 0.95;
                this._backPlanes[x][y].scaling.y = 0.95;
                this._backPlanes[x][y].scaling.z = 0.01;
                this._backPlanes[x][y].material = this._matBlue;
            }
        }

        // Up
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._upPlanes[x][y] = BABYLON.Mesh.CreateBox("up" + x + y, 1, scene);
                this._upPlanes[x][y].position.x = x-1;
                this._upPlanes[x][y].position.y =  +1.5;
                this._upPlanes[x][y].position.z = y-1;
                this._upPlanes[x][y].rotation.x = Math.PI / 2;
                this._upPlanes[x][y].scaling.x = 0.95;
                this._upPlanes[x][y].scaling.y = 0.95;
                this._upPlanes[x][y].scaling.z = 0.01;
                this._upPlanes[x][y].material = this._matWhite;
            }
        }

        // Down
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._downPlanes[x][y] = BABYLON.Mesh.CreateBox("down" + x + y, 1, scene);
                this._downPlanes[x][y].position.x = x-1;
                this._downPlanes[x][y].position.y =  -1.5;
                this._downPlanes[x][y].position.z = y-1;
                this._downPlanes[x][y].rotation.x = -Math.PI / 2;
                this._downPlanes[x][y].scaling.x = 0.95;
                this._downPlanes[x][y].scaling.y = 0.95;
                this._downPlanes[x][y].scaling.z = 0.01;
                this._downPlanes[x][y].material = this._matYellow;
            }
        }

        // Left
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._leftPlanes[x][y] = BABYLON.Mesh.CreateBox("down" + x + y, 1, scene);
                this._leftPlanes[x][y].position.x =   1.5;
                this._leftPlanes[x][y].position.y = y-1;
                this._leftPlanes[x][y].position.z = x-1;
                this._leftPlanes[x][y].rotation.y = - Math.PI / 2;
                this._leftPlanes[x][y].scaling.x = 0.95;
                this._leftPlanes[x][y].scaling.y = 0.95;
                this._leftPlanes[x][y].scaling.z = 0.01;
                this._leftPlanes[x][y].material = this._matOrange;
            }
        }

        // Right
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                this._rightPlanes[x][y] = BABYLON.Mesh.CreateBox("down" + x + y, 1, scene);
                this._rightPlanes[x][y].position.x =  -1.5;
                this._rightPlanes[x][y].position.y = y-1;
                this._rightPlanes[x][y].position.z = x-1;
                this._rightPlanes[x][y].rotation.y = Math.PI / 2;
                this._rightPlanes[x][y].scaling.x = 0.95;
                this._rightPlanes[x][y].scaling.y = 0.95;
                this._rightPlanes[x][y].scaling.z = 0.01;
                this._rightPlanes[x][y].material = this._matRed;
            }
        }
    },

    render : function(deltaTime) {
        if(this._registeredRender[0] != null) {
            var that = this;
            this._registeredRender[0](deltaTime, that);
        }
    },

    // Function to rotate something around a point
    _rotateAroundZ : function(object, pivot, angle) {
        var distance = Math.sqrt(
            Math.pow((object.position.x - pivot.x), 2) +
            Math.pow((object.position.y - pivot.y), 2)
        );
        var actualRotation = Math.atan2(object.position.x, object.position.y);

        console.log(actualRotation * 180 / Math.PI);

        object.rotate(BABYLON.Axis.Z, angle, BABYLON.Space.world);
        object.position = new BABYLON.Vector3(
            Math.sin(actualRotation + angle) * distance,
            Math.cos(actualRotation + angle) * distance,
            object.position.z
        );
    },

    // Turn front face
    turnFront : function() {
        this._registeredRender.push(this._turnFrontBy);
    },
    _turnFrontBy : function(coeff, that) {

        var pivot = new BABYLON.Vector3(0,0,0);
        var rotation = Math.PI/2;
        var space = BABYLON.Space.world;
        coeff /= 1500;
        coeff *= rotation;
        that._totalCoeff += coeff;

        if(that._totalCoeff > Math.PI/2) {
            that._totalCoeff = 0;
            that._registeredRender.shift();
            console.log(that._registeredRender);
            return;
        }

        that._rotateAroundZ(that._frontPlanes[0][0], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[0][1], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[0][2], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[1][0], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[1][1], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[1][2], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[2][0], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[2][1], pivot, coeff);
        that._rotateAroundZ(that._frontPlanes[2][2], pivot, coeff);


    }

};