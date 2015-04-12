function Solver(controller) {

    this.controller = controller;


}

Solver.prototype.solve = function() {
    return this.controller.getFacesColors();
};
