// all initialisations should go here
var init = function () {
    glob.b = pub;

    welcome();

    // -- init internal state vars --
    startTime = Date.now();
};


// ----------------------------------------
// execution

/**
 * Run the sketch to adopt processing language familiarities
 * @method go
 * @param {String} [name] Name of the composition
 * @param {Number} [width] Width of the composition
 * @param {Number} [height] Height of the composition
 * @param {Number} [duration] Duration of the composition in seconds
 * @param {Number} [frameRate] Frame rate of the composition 
 */
pub.go = function (name, width, height, time, fr) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4];

    pub.beginUndo();
    try {
        thisComp = (proj.activeItem instanceof CompItem) ? proj.activeItem : null;
        if (thisComp === null) {
            switch (arguments.length) {
                case 0:
                    thisComp = pub.createComp("untitled", 1920, 1080, 10, 24);
                    break;
                case 2:
                    thisComp = pub.createComp(a, 1920, 1080, b, 24);
                    break;
                case 1:
                    thisComp = pub.createComp(a, 1920, 1080, 10, 24);
                    break;
                case 3:
                    thisComp = pub.createComp(a, b, c, 10, 24);
                    break;
                case 4:
                    thisComp = pub.createComp(a, b, c, d, 24);
                    break;
                case 5:
                    thisComp = pub.createComp(a, b, c, d, e);
                    break;
            }
        }

        setThisComp();

        if (typeof glob.setup === 'function') {
            pub.println("Running Setup...");
            runAfterEffectsSetup();
        };

        //draw function runs once every frame.
        if (typeof glob.draw === 'function') {
            pub.println("Running Draw...");
            runAfterEffectsDraw();
            glob.draw = null;
        };
        thisComp.openInViewer();
    } catch (e) {
        alert(e);
    }
    pub.endUndo();
    thisComp.time = 0;
    pub.println("Done in " + (pub.millis() / 1000).toPrecision(3) + " seconds...");
};


// ----------------------------------------
// all private from here

var setThisComp = function () {
    //3D
    curr3DMode = pub.DISSABLE;

    //Fill
    currFillState = true;
    currFillColor = [1, 1, 1];

    //Stroke
    currStrokeState = true;
    currStrokeWeight = 1;
    currStrokeColor = [1, 1, 1];
    currCaps = pub.BUTT;

    //Opacity
    currOpacity = 100;

    //Shape
    currAnchorMode = 5;

    //Text & Font 
    currFont = 'Helvetica';
    currFontSize = 100;
    currJustification = pub.J_CENTER;

    //Blend
    currBlendMode = pub.NORMAL;

    //Keyframes
    currInterpolationMode = pub.BEZIER,
    currSpatialInterpolationMode = pub.LINEAR;

    //Masks
    currMaskMode = pub.M_ADD;

    //Matrix transformation stack
    pub.resetMatrix();

    pub.width = thisComp.width;
    pub.height = thisComp.height;

    pub.background(0);
};


var runAfterEffectsSetup = function () {
    glob.setup();
};

var runAfterEffectsDraw = function () {
    pub.resetMatrix();
    var frameDur = thisComp.frameDuration;
    var totalFrames = thisComp.duration * thisComp.frameRate;
    frameCount = 0;
    frameTime = 0;

    for (var i = 0; i < totalFrames; i++) {
        pub.frameCount++;
        pub.frameTime += frameDur;
        glob.draw();
        pub.println("Running frame: " + (i + 1));
    }
};

var welcome = function () {
    clearConsole();
    //println("Using basil.js " + pub.BASIL_VERSION + " ...");
    println("Using baffects.js " + pub.BAFFECTS_VERSION + " ...");
};

var error = pub.error = function (msg) {
    println(ERROR_PREFIX + msg);
    throw new Error(ERROR_PREFIX + msg);
};

var warning = pub.warning = function (msg) {
    println(WARNING_PREFIX + msg);
};

var clearConsole = function () {
    var bt = new BridgeTalk();
    bt.target = "estoolkit";
    bt.body = "app.clc()"; // works just with cs6
    bt.onError = function (errObj) { };
    bt.onResult = function (resObj) { };
    bt.send();
};
