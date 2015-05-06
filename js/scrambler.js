var Scrambler = function() {
    this.cubeSize = '3';
};

Scrambler.prototype.setCubeSize = function(value) {
    this.cubeSize = value;
};

Scrambler.prototype.getScramble = function() {

    switch(this.cubeSize) {
        case '3' :
            return this.scramble_3x3();
            break;
    }
};

Scrambler.prototype.scramble_3x3 = function() {

    var scrambleSequence = ['X'];

    for (var i = 1; i < 21; i++) {
        var rand = Math.floor((Math.random() * 12) + 1);

        switch (rand) {
            case 1:
                if(scrambleSequence[i-1] == "L'") { i--; }
                else { scrambleSequence.push("L"); }
                break;
            case 2:
                if(scrambleSequence[i-1] == "L") { i--; }
                else { scrambleSequence.push("L'"); }
                break;
            case 3:
                if(scrambleSequence[i-1] == "R'") { i--; }
                else { scrambleSequence.push("R"); }
                break;
            case 4:
                if(scrambleSequence[i-1] == "R") { i--; }
                else { scrambleSequence.push("R'"); }
                break;
            case 5:
                if(scrambleSequence[i-1] == "F'") { i--; }
                else { scrambleSequence.push("F"); }
                break;
            case 6:
                if(scrambleSequence[i-1] == "F") { i--; }
                else { scrambleSequence.push("F'"); }
                break;
            case 7:
                if(scrambleSequence[i-1] == "B'") { i--; }
                else { scrambleSequence.push("B"); }
                break;
            case 8:
                if(scrambleSequence[i-1] == "B") { i--; }
                else { scrambleSequence.push("B'"); }
                break;
            case 9:
                if(scrambleSequence[i-1] == "U'") { i--; }
                else { scrambleSequence.push("U"); }
                break;
            case 10:
                if(scrambleSequence[i-1] == "U") { i--; }
                else { scrambleSequence.push("U'"); }
                break;
            case 11:
                if(scrambleSequence[i-1] == "D'") { i--; }
                else { scrambleSequence.push("D"); }
                break;
            case 12:
                if(scrambleSequence[i-1] == "D") { i--; }
                else { scrambleSequence.push("D'"); }
                break;
            default:
                console.log('Fail to random correct number! >_<" -> ' + rand);
                break;
        }
    }

    scrambleSequence.shift();

    return scrambleSequence;
};

Scrambler.prototype.pattern_3x3 = function(name) {

    switch(name) {

        case 'checkerboard':
            return [ "R", "R", "L", "L", "U", "U", "D", "D", "F", "F", "B", "B"];
            break;

        case 'cubeInCube':
            return [ "F", "L", "F", "U'", "R", "U", "F", "F", "L", "L", "U'", "L'", "B", "D'", "B'", "L", "L", "U" ];
            break;
    }
};