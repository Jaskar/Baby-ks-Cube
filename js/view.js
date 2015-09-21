function View(cube, controller, solver) {

    var isExploded = false;
    var isPrime = false;
    var isHelpDisplayed = false;
    var isInfosDisplayed = false;

    document.getElementById("button_explode").addEventListener('click', function () {
        // DOn't explode if it's turning
        if(controller.isTurning) { return; }

        if(isExploded) {
            isExploded = false;
            document.getElementById("button_explode").style.opacity = 0.4;
            document.getElementById("center_buttons").style.opacity = 1;
            document.getElementById("left_buttons").style.opacity = 1;
            document.getElementById("right_buttons").style.opacity = 1;
        }
        else {
            isExploded = true;
            document.getElementById("button_explode").style.opacity = 1;
            document.getElementById("center_buttons").style.opacity = 0.35;
            document.getElementById("left_buttons").style.opacity = 0.35;
            document.getElementById("right_buttons").style.opacity = 0.35;
        }

        cube.explodedView();
    });

    document.getElementById("button_scramble").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }

        var strSquence = "";
        controller.scramble(20).forEach(function(move) {
            strSquence += move + " ";
        });

        document.getElementById("sequence_display").innerHTML =
            "Scramble sequence :<br>" +
            strSquence
        ;
    });
    document.getElementById("button_solve").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }

        var strSquence = "";
        solver.solve().forEach(function(move) {
            strSquence += move + " ";
        });

        document.getElementById("sequence_display").innerHTML =
            "Resolve sequence :<br>" +
            strSquence
        ;
    });
    document.getElementById("button_left").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnLeft();
    });
    document.getElementById("button_leftprime").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnLeftReverse();
    });
    document.getElementById("button_right").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnRight();
    });
    document.getElementById("button_rightprime").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnRightReverse();
    });
    document.getElementById("button_up").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnUp();
    });
    document.getElementById("button_upprime").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnUpReverse();
    });
    document.getElementById("button_front").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnFront();
    });
    document.getElementById("button_frontprime").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnFrontReverse();
    });
    document.getElementById("button_down").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnDown();
    });
    document.getElementById("button_downprime").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnDownReverse();
    });
    document.getElementById("button_back").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnBack();
    });
    document.getElementById("button_backprime").addEventListener('click', function () {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        controller.turnBackReverse();
    });

    document.getElementById("slider_speed").addEventListener('input', function(evt){
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }
        cube.setSpeed(this.value);
    });

    document.getElementById("button_help").addEventListener('click', function() {
        if(isHelpDisplayed) {
            isInfosDisplayed = false;
            isHelpDisplayed = false;
            document.getElementById("panel_blur").style.visibility = 'hidden';
            document.getElementById("panel_help").style.visibility = 'hidden';
            document.getElementById("button_help").style.opacity = 0.4;
            document.getElementById("panel_infos").style.visibility = 'hidden';
            document.getElementById("button_infos").style.opacity = 0.4;
        } else {
            isInfosDisplayed = false;
            isHelpDisplayed = true;
            document.getElementById("panel_blur").style.visibility = 'visible';
            document.getElementById("panel_help").style.visibility = 'visible';
            document.getElementById("button_help").style.opacity = 1;
            document.getElementById("panel_infos").style.visibility = 'hidden';
            document.getElementById("button_infos").style.opacity = 0.4;
        }
    });
    document.getElementById("button_infos").addEventListener('click', function() {
        if (isInfosDisplayed) {
            isInfosDisplayed = false;
            isHelpDisplayed = false;
            document.getElementById("panel_blur").style.visibility = 'hidden';
            document.getElementById("panel_help").style.visibility = 'hidden';
            document.getElementById("button_help").style.opacity = 0.4;
            document.getElementById("panel_infos").style.visibility = 'hidden';
            document.getElementById("button_infos").style.opacity = 0.4;
        } else {
            isHelpDisplayed = false;
            isInfosDisplayed = true;
            document.getElementById("panel_blur").style.visibility = 'visible';
            document.getElementById("panel_infos").style.visibility = 'visible';
            document.getElementById("button_infos").style.opacity = 1;
            document.getElementById("panel_help").style.visibility = 'hidden';
            document.getElementById("button_help").style.opacity = 0.4;
        }
    });

    window.addEventListener('keydown', function(evt) {
        // Don't do any move while it's exploded
        if(isExploded) {
            return;
        }

        switch(evt.keyCode) {

            case 32:            // Space
                isPrime = true;
                break;

            case 49:            // 1
                document.getElementById("sequence_display").innerHTML =
                    "Pattern : Checkerboard :<br>" +
                    controller.awesomeScramble('checkerboard')
                break;
            case 50:            // 2
                document.getElementById("sequence_display").innerHTML =
                    "Pattern : Cube in the Cube :<br>" +
                    controller.awesomeScramble('cubeInCube')
                break;

            case 66:            // Back // Blue
                isPrime ? controller.turnBackReverse() : controller.turnBack();
                break;
            case 71:            // Front // Green
                isPrime ? controller.turnFrontReverse() : controller.turnFront();
                break;
            case 79:            // Left // Orange
                isPrime ? controller.turnLeftReverse() : controller.turnLeft();
                break;
            case 82:            // Right // Red
                isPrime ? controller.turnRightReverse() : controller.turnRight();
                break;
            case 87:            // Up // White
                isPrime ? controller.turnUpReverse() : controller.turnUp();
                break;
            case 89:            // Down // Yellow
                isPrime ? controller.turnDownReverse() : controller.turnDown();
                break;
        }
    });
    window.addEventListener('keyup', function(evt) {

        switch(evt.keyCode) {

            case 32:            // Space
                isPrime = false;
                break;
        }
    });
}