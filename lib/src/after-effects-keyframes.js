// Keyframes

/**
 * Create keyframe at time and value.
 * @cat AfterEffects
 * @subcat Keyframes
 * @method key
 * @param {Property} prop Property reference 
 * @param {Number} [time] Time in seconds to set keyframe 
 * @param {Number|Array} value Number or array depending on the property dimensions to set value
 * @param {Array} inTangents When spatial keyframes set the value of in tangents
 * @param {Array} outTangent When spatial keyframes set the value of out tangents
 * @return {Number} index of last created keyframe
 * @example
 * var shape = b.rect(500, 500, 100, 100);      <br>
 * b.key(shape.position, 0, [0,0]);             <br>
 * b.key(shape.position, 2, [100, 100]);        <br>
 * b.key(shape.rotation, 45);                   <br>
 *                                              <br>
 * <h4> Syntax: </h4>                           <br>
 * b.key(prop, value)                           <br>
 * b.key(prop, time, value)                     <br>
 * b.key(prop, time, inTangents)                <br>
 * b.key(prop, time, inTangents, outTangents)   <br>
 */
pub.key = function (prop, time, value, inTan, outTan) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4];

    try {
        switch (arguments.length) {
            case 2:
                a.setValue(b);
                return a.numKeys;
            case 3:
                createTimeKey(a, b, c, null, null);
                return a.numKeys;
            case 4:
                createTimeKey(a, b, c, d, d);
                return a.numKeys;
            case 5:
                createTimeKey(a, b, c, d, e);
                return a.numKeys;
        }
    } catch (e) {
        error("Incorrect number of parameters for this property: " + prop.name);
    }
};

function createTimeKey(prop, time, value, inTan, outTan) {
    var spatial = currSpatialInterpolationMode;

    prop.setValueAtTime(time, value);
    prop.setInterpolationTypeAtKey(prop.numKeys, currInterpolationMode, currInterpolationMode);

    if (inTan !== null) {
        currSpatialInterpolationMode = pub.BEZIER;
        prop.setSpatialContinuousAtKey(prop.numKeys, true);
        prop.setSpatialTangentsAtKey(prop.numKeys, inTan, outTan);
    }

    if (prop.propertyValueType === PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType === PropertyValueType.TwoD_SPATIAL) {
        if (currSpatialInterpolationMode == pub.LINEAR) {
            prop.setSpatialTangentsAtKey(prop.numKeys, [0, 0, 0], [0, 0, 0]);
        } else if (currSpatialInterpolationMode === "auto") {
            prop.setSpatialAutoBezierAtKey(prop.numKeys, true);
        }
    }

    currSpatialInterpolationMode = spatial;
}


/**
 * Set global keyframe interpolation mode.
 * @cat AfterEffects
 * @subcat Keyframes
 * @method interpolationMode
 * @param {BEZIER|LINEAR|HOLD} mode 
 */
pub.interpolationMode = function (mode) {
    currInterpolationMode = mode;
};

/**
 * Set global spatial keyframe inerpolation mode.
 * @cat AfterEffects
 * @subcat Keyframes
 * @method spatialMode
 * @param {LINEAR|AUTO_BEZIER} mode 
 */
pub.spatialMode = function (mode) {
    currSpatialInterpolationMode = mode;
};

/**
 * Creates ease object for keyrame velocity manipulation.
 * @cat AfterEffects
 * @subcat Keyframes
 * @method ease
 * @param {Number} speed The speed value of the keyframe. The units depend on the type of keyframe, and are displayed in the Keyframe Velocity dialog box
 * @param {Number} influence Range[0.1..100.0] The influence value of the keyframe, as shown in the Keyframe Velocity dialog box
 * @return {KeyFrameEase}
 */
pub.ease = function (speed, influence) {
    var ease = new KeyframeEase(speed, influence);
    return ease;
};

/**
 * Manipulates keyframe property speed.
 * @cat AfterEffects
 * @subcat Keyframes
 * @method speedEase
 * @param {Property} prop Property reference
 * @param {Number} index Keyframe index
 * @param {KeyframeEase} easeIn Ease in object to apply
 * @param {KeyframeEase} easeOut Ease out object to apply
 */
pub.speedEase = function (prop, index, easeIn, easeOut) {
    if (easeIn instanceof Array) {
        prop.setTemporalEaseAtKey(index, easeIn, easeOut);
    } else {
        prop.setTemporalEaseAtKey(index, [easeIn], [easeOut]);
    }
};

/**
 * Manipulates keyframe property speed.
 * @cat AfterEffects
 * @subcat Keyframes
 * @method speed
 * @param {Property} prop Property reference
 * @param {Number} index Keyframe index
 * @param {Number} speed The speed value of the keyframe. The units depend on the type of keyframe, and are displayed in the Keyframe Velocity dialog box
 * @param {Number} influence influence Range[0.1..100.0] The influence value of the keyframe, as shown in the Keyframe Velocity dialog box
 */
pub.speed = function (prop, index, speed, influence) {
    var _ease = pub.ease(speed, influence);
    var easeArr = [];
    var dimension = getDimension(prop);
    for (var i = 0; i < dimension; i++) {
        easeArr.push(_ease);
    }
    prop.setTemporalEaseAtKey(index, easeArr, easeArr);
};

/**
 * Set all keyframes of a property with the same speed and influence.
 * @cat AfterEffects
 * @subcat Keyframes
 * @method speedAll
 * @param {Property} prop Property reference
 * @param {Number} speed The speed value of the keyframe. The units depend on the type of keyframe, and are displayed in the Keyframe Velocity dialog box
 * @param {Number} influence Range[0.1..100.0] The influence value of the keyframe, as shown in the Keyframe Velocity dialog box
 * @example
 * var shape = b.rect(500, 500, 100, 100);                                          <br>                                     
 * b.key(shape.position, 0, [b.random(b.width), b.random(b.height)]);               <br>
 * b.key(shape.position, 2, [b.random(b.width), b.random(b.height)]);               <br>
 * b.key(shape.position, 3, [b.random(b.width), b.random(b.height)]);               <br>
 * b.key(shape.position, 5, [b.random(b.width), b.random(b.height)]);               <br>
 * b.speedAll(shape.position, 0.1, 90);                                             <br>
 */
pub.speedAll = function (prop, speed, influence) {
    var _ease = pub.ease(speed, influence);
    var easeArr = [];

    var dimension = getDimension(prop);

    for (var i = 0; i < dimension; i++) {
        easeArr.push(_ease);
    }
    for (var i = 1; i <= prop.numKeys; i++) {
        pub.speedEase(prop, i, easeArr, easeArr);
    }
};

function getDimension(prop) {
    var dimension = 0;
    if (prop.propertyValueType === PropertyValueType.ThreeD_SPATIAL) {
        dimension = 1;
    } else if (prop.propertyValueType === PropertyValueType.ThreeD) {
        dimension = 3;
    } else if (prop.propertyValueType === PropertyValueType.TwoD_SPATIAL) {
        dimension = 2;
    } else if (prop.propertyValueType === PropertyValueType.TwoD_SPATIAL) {
        dimension = 2;
    } else if (prop.propertyValueType === PropertyValueType.OneD) {
        dimension = 1;
    } else if (prop.propertyValueType === PropertyValueType.COLOR) {
        dimension = 1;
    } else if (prop.propertyValueType === PropertyValueType.CUSTOM_VALUE) {
        dimension = prop.value.length;
    }

    return dimension;
};

/**
 * Print all attributes of a Javascript object.
 * @method printProperties
 * @param {Object} props Object to print properties
 */
pub.printProperties = function (props) {
    for (var name in props) {
        pub.println(name)
    }
};

/**
 * Add expression to property
 * @method expression
 * @param {Property} prop Property to add expression to
 * @param {String} exppression Expression
 */
pub.expression = function (prop, exp) {
    prop.expression = exp;
}

/**
 * Remove all keyframes from a layer property.
 * @method removeAllKeyframes
 * @param {Property} prop 
 */
pub.removeAllKeyframes = function (prop) {
    while (prop.numKeys != 0) {
        prop.removeKey(1);
    }
};