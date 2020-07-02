//Masks

/**
 * Creates mask on layer
 * @category Baffects.js 
 * @subcat Masks
 * @method mask
 * @param {AVLayer} layer Layer to add mask to
 * @param {number[][]} verts Mask vertices [x, y] array
 * @param {number[][]} [inTangents] In tangents [x, y] array
 * @param {number[][]} [outTangents] Out tangents [x, y] array
 * @param {Boolean} closed Mask close property
 * @returns {Mask} Created mask
 */
pub.mask = function (layer, verts, inTangents, outTangents, closed) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4];

    var mask;
    switch (arguments.length) {
        case 2:
            mask = createMask(a, b, null, null, true);
            return mask;
        case 3:
            if (c instanceof Array) {
                mask = createMask(a, b, c, c, true);
                return mask;
            } else {
                mask = createMask(a, b, null, null, c);
                return mask;
            }
        case 4:
            mask = createMask(a, b, c, d, true);
            return mask;
        case 5:
            mask = createMask(a, b, c, d, e);
            return mask;

    }
};

function createMask(layer, verts, inTangents, outTangents, closed) {
    if (!validateLayer(layer))
        layer = layer.layer;

    this.obb = new Properties();

    var mask = layer.Masks.addProperty("ADBE Mask Atom");
    this.obb.layer = mask;

    var maskPath = mask.property("ADBE Mask Shape");
    path = maskPath.value;
    path.vertices = verts;
    if (inTangents !== null) {
        path.inTangents = inTangents;
        path.outTangents = outTangents;
    }
    path.closed = closed;
    maskPath.setValue(path);

    mask.maskMode = currMaskMode;

    for (var i = 0; i < mask.numProperties; i++) {
        this.obb[mask.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = mask.property(i + 1);
    }
    this.obb.properties = mask.property("ADBE Mask Shape").value;

    pub.anchor(layer, currAnchorMode);

    return this.obb;
}

/**
 * Set global mask mode.
 * @category Baffects.js
 * @method maskMode
 * @param {M_NONE|M_ADD|M_SUBTRACT|M_INTERSECT|M_LIGHTEN|M_DARKEN|M_DIFFERENCE} mode 
 */
pub.maskMode = function (mode) {
    currMaskMode = mode;
}


/**
 * Set a particular mask to it mode.
 * @category Baffects.js
 * @method setMaskMode
 * @param {MaskObject} mask 
 * @param {M_NONE|M_ADD|M_SUBTRACT|M_INTERSECT|M_LIGHTEN|M_DARKEN|M_DIFFERENCE} mode 
 */
pub.setMaskMode = function (mask, mode) {
    mask.maskMode = mode;
}


/**
 * Using the beginMask() and endMask() functions allow creating more complex forms. beginMask() begins recording vertices and tangents for a shape and endMask() stops recording. 
 * The value of the kind parameter tells it which types of mask to create from the provided vertices, the parameters available for beginMask() are M_NONE|M_ADD|M_SUBTRACT|M_INTERSECT|M_LIGHTEN|M_DARKEN|M_DIFFERENCE. 
 * After calling the beginMask() function, a series of vertex(), itangent() or otangent() commands must follow. To stop drawing the shape, call endMask(). 
 * Each shape will be outlined with the current stroke color and filled with the fill color. 
 * @category Baffects.js
 * @method beginMask
 * @param {M_NONE|M_ADD|M_SUBTRACT|M_INTERSECT|M_LIGHTEN|M_DARKEN|M_DIFFERENCE} mode  
 */
pub.beginMask = function (mode) {
    if (arguments.length === 1)
        currMaskMode = mode;
};

/**
 * The endMask() function is the companion to beginMask() and may only be called after beginMask(). 
 * When endMask() is called, all of mask data defined since the previous call to beginMask() is written into the mask buffer. 
 * The layer which layer to apply mask to and the constant CLOSE as the value for the MODE parameter to close the mask (to connect the beginning and the end).
 * @category Baffects.js
 * @method endMask
 * @param {Properties} layer
 * @param {NONE|CLOSE} close 
 */
pub.endMask = function (layer, close) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var isClosed = false;
    if (arguments.length === 2) {
        isClosed = arguments[1];
    }

    var mask;
    if (inTan.length > 0 && outTan.length > 0) {
        mask = createMask(layer, vertix, inTan, outTan, isClosed);
    } else if (inTan.length > 0) {
        mask = createMask(layer, vertix, inTan, inTan, isClosed);
    } else {
        mask = createMask(layer, vertix, null, null, isClosed);
    }
    vertix = [];
    inTan = [];
    outTan = [];
    return mask;
}