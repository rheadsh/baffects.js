/**
 * Creates camera layer.
 * @category Baffects.js
 * @method camera
 * @param {String} name Name of the camera
 * @param {Array} interest 2-D array to set point of interest
 * @returns {Properties} Properties object with attributes [layer, pointofinterest, position, xposition, yposition, zposition, orientation, xrotation, yrotation, zrotation, zoom, depthoffield, focusdistance, aperture, blurlevel, irisshape, irisrotation, irisroundness, irisaspectratio, irisdiffractionfringe, highlightgain, highlightthreshold, highlightsaturation].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created Camera layer reference.
 */
pub.camera = function (name, interest, x, y, z) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4];

    var cam;
    switch (arguments.length) {
        case 0:
            cam = createCam("Camera", [pub.width / 2, pub.height / 2], pub.width / 2, pub.height / 2, -pub.width * 2);
            return cam;
        case 1:
            cam = createCam(a, [pub.width / 2, pub.height / 2], pub.width / 2, pub.height / 2, -pub.width * 2);
            return cam;
        case 2:
            cam = createCam(a, b, pub.width / 2, pub.height / 2, -pub.width * 2);
            return cam;
        case 3:
            cam = createCam("Camera", [pub.width / 2, pub.height / 2], a, b, c);
            return cam;
    }

};

function createCam(name, point, x, y, z) {
    this.obb = new Properties();
    this.shape = thisComp.layers.addCamera(name, point);
    this.obb.layer = this.shape;

    setTransformPropertiesObject();

    var camOptions = this.shape.property("ADBE Camera Options Group");
    for (var i = 0; i < camOptions.numProperties; i++) {
        this.obb[camOptions.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = camOptions.property(i + 1);
    }

    this.obb.position.setValue([x, y, z]);

    return this.obb;
};

/**
 * Creates light layer.
 * @category Baffects.js
 * @method light
 * @param {String} name Name of the camera
 * @param {Array} interest 2-D array to set point of interest
 * @param {PARALLEL|SPOT|POINT|AMBIENT} type Light type
 * @returns {Properties} Properties object with attributes (depending on type) [layer, pointofinterest, position, xposition, yposition, zposition, orientation, xrotation, yrotation, zrotation, type, intensity, color, coneangle, conefeather, falloff, radius, falloffdistance, castsshadows, shadowdarkness, shadowdiffusion].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created Light layer reference.
 */
pub.light = function (name, interest, type, x, y, z) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4],
        f = arguments[5];

    switch (arguments.length) {
        case 0:
            light = createLight("Light", [pub.width / 2, pub.height / 2], pub.POINT, pub.width / 2, pub.height / 2, -500);
            return light;
        case 1:
            light = createLight("Light", [pub.width / 2, pub.height / 2], a, pub.width / 2, pub.height / 2, -500);
            return light;
        case 2:
            light = createLight(a, [pub.width / 2, pub.height / 2], b, pub.width / 2, pub.height / 2, -500);
            return light;
        case 3:
            light = createLight("Light", [pub.width / 2, pub.height / 2], pub.POINT, a, b, c);
            return light;
    }

};

function createLight(name, point, type, x, y, z) {
    this.obb = new Properties();

    this.shape = thisComp.layers.addLight(name, point);
    this.shape.lightType = type;
    this.obb.layer = this.shape;

    setTransformPropertiesObject();

    this.obb.type = this.shape.lightType;

    var lightOptions = this.shape.property("ADBE Light Options Group");
    for (var i = 0; i < lightOptions.numProperties; i++) {
        this.obb[lightOptions.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = lightOptions.property(i + 1);
    }

    this.obb.position.setValue([x, y, z]);

    return this.obb;
};




