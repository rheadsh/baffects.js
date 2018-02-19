//Private utilities

var proj = app.project;

var thisComp = (proj.activeItem) ? proj.activeItem : null;

var layersSelection = function () {
    return thisComp.selectedLayers;
};

var frameMove = function (frame) {
    return frame * thisComp.frameDuration
};

var searchFirstComp = function () {
    var number = 0;
    for (var i = 1; i <= proj.numItems; i++) {
        if ((proj.item(i) instanceof CompItem)) {
            number = i;
            break;
        }
    }
    return number;
};

var queue = app.project.renderQueue;

var indexArray = function (arr) {
    var indexes = [];
    for (var i = 0; i < arr.length; i++) {
        pub.println(arr[i].name);
        indexes.push(arr[i].index);
    }
    return indexes;
};


var Properties = function () { };

Properties.prototype.props = function () {
    for (var name in this) {
        pub.println(name);
    }
};

var validateLayer = function (layer) {
    try {
        if (layer instanceof Properties) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        error("Parameter is neither an AVLAyer or Properties object");
    }
};