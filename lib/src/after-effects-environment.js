// Environment

//______________________________________________________________________________________________________________________
// Composition methods

/**
 * Create new composition.
 * @category Baffects.js
 * @method createComp
 * @param {String} name Name of the composition
 * @param {number} w Width of the composition
 * @param {number} h Height of the composition
 * @param {number} duration Duration in seconds of the composition
 * @param {number} frameRate Frame rate of the composition
 * @returns {CompItem} Created composition
 */
pub.createComp = function (name, w, h, dur, fr) {
    var comp = proj.items.addComp(name, w, h, 1, dur, fr);
    thisComp = comp;
    pub.width = comp.width;
    pub.height = comp.height;
    return comp;
};

/**
 * Starts undo block.
 * @category Baffects.js
 * @method beginUndo
 * @param {String} [name] Undo name GUI identifier
 */
pub.beginUndo = function (name) {
    switch (arguments.length) {
        case 0:
            app.beginUndoGroup("Baffects");
            break;
        case 1:
            app.beginUndoGroup(name);
            break;
    }
};

/**
 * Ends undo block
 * @category Baffects.js 
 * @method endUndo
 */
pub.endUndo = function () {
    app.endUndoGroup();
};

/**
 * Get composition reference by name.
 * @category Baffects.js 
 * @method getComp
 * @param {String} name Name of the composition to retrieve
 * @returns {CompItem|null} Composition found
 */
pub.getComp = function (name) {
    var number = 0;
    for (var i = 1; i <= proj.numItems; i++) {
        if ((proj.item(i) instanceof CompItem) && (proj.item(i).name === name)) {
            number = i;
            break;
        }
    }
    if (number > 0) {
        return proj.item(number);
    } else {
        error("Comp not found!");
        return null;
    }
};

/**
 * Clean composition layers and items references.
 * @category Baffects.js 
 * @method cleanComp
 */
pub.cleanComp = function () {
    var layers, names;
    layers = thisComp.layers
    try {
        if (layers.length > 0) {
            while (layers.length > 0) {
                var source = layers[layers.length].source;
                layers[layers.length].remove();
                if (source != null)
                    source.remove();
            }
        }
    } catch (e) {
        error("Composition not found!")
    }
};

/**
 * Sets background color for the composition.
 * @category Baffects.js 
 * @method background
 * @param {Color|number} color 
 */
pub.background = function (color) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2];

    switch (arguments.length) {
        case 1:
            var col = pub.color(a);
            thisComp.bgColor = col;
            break;
        case 3:
            var col = pub.color(a, b, c);
            thisComp.bgColor = col;
            break;
    }
};

/**
 * Get the total number of frames from composition.
 * @category Baffects.js 
 * @method getTotalFrames
 *@returns {number} Total number of frames
 */
pub.getTotalFrames = function () {
    return thisComp.duration * thisComp.frameRate;
};

/**
 * Duration of the composition in seconds.
 * @category Baffects.js 
 * @method getDuration
 *@returns {number} Total duration in seconds
 */
pub.getDuration = function () {
    return thisComp.duration;
};

/**
 * Set composition to new duration.
 * @category Baffects.js 
 * @method setCompDuration
 * @param {number} duration Duration in seconds
 */
pub.setDuration = function (duration) {
    thisComp.duration = duration;
};

/**
 * Total number of layers in the composition
 * @category Baffects.js 
 * @method numLayers
 *@returns {number} Total number of layers
 */
pub.numLayers = function () {
    return thisComp.numLayers;
}


/**
 * Return all the compositions in the project.
 * @category Baffects.js 
 * @method getAllComps
 *@returns {Array} 0-based array with CompItem object for eacho one of all the compositions found in the project
 */
pub.getAllComps = function () {
    var comps = [];
    var items = proj.items;
    for (var i = 1; i <= proj.numItems; i++) {
        if ((proj.item(i) instanceof CompItem)) {
            comps.push(items[i]);
        }
    }

    return comps;
};



/**
 * Delete a composition.
 * @category Baffects.js
 * @method deleteComp
 * @param {String|CompItem} comp 
 */
pub.deleteComp = function (comp) {
    try {
        if (typeof comp === "string") {
            var newComp = pub.getComp(comp);
            newComp.remove();
        } else {
            comp.remove();
        }
    } catch (e) {
        error("Composition not found!")
    }
}


/**
 * Get the composition center
 * @category Baffects.js
 * @method getCenter
 *@returnss {Array} Composition's center as [x, y] array
 */
pub.getCenter = function () {
    return [pub.width / 2, pub.height / 2];
}


//______________________________________________________________________________________________________________________
// Item methods

/**
 * Get item reference by name.
 * @category Baffects.js 
 * @method getItem
 * @param {String} name Name of item to retrieve
 *@returns {Item|null} Item found
 */
pub.getItem = function (name) {
    var number = 0;
    for (var i = 1; i <= proj.numItems; i++) {
        if (!((proj.item(i) instanceof CompItem)) && (proj.item(i).name === name)) {
            number = i;
            break;
        }
    }
    if (number > 0) {
        return proj.item(number);
    } else {
        error("Item not found!");
        return null;
    }
};

/**
 * Adds item to comp (for ease of use loadItem() is better suited for this task).
 * @category Baffects.js 
 * @method addItemToComp
 * @param {Item} item Item to add to composition
 *@returns {Layer} Item added as layer
 */
pub.addItemToComp = function (item) {
    var layer = thisComp.layers.add(item);
    return layer;
};

// TO DO
pub.getFolder = function (name) {

}





//______________________________________________________________________________________________________________________
// Layer methods

/**
 * Get layer reference by name.
 * @category Baffects.js 
 * @method getLayer
 * @param {String} name Name of layer to retrieve 
 *@returns {Properties|Array} Return Properties or if the layer has effects it returns a 0-based array of [Transform Properties, FX Properties];
 */
pub.getLayer = function (name) {
    var layersCollection = thisComp.layers
    var n = 0;
    if (layersCollection.length > 0) {
        for (var i = 1; i <= layersCollection.length; i++) {
            if (layersCollection[i].name === name) {
                n = i;
                break;
            }
        }
    } else {
        error("Zero layers in comp");
    }
    if (n > 0) {
        var obb = new Properties();
        obb.layer = layersCollection[n];
        scopeTransformProperties(obb);

        var fxGroup = obb.layer("Effects");
        if (fxGroup.numProperties > 0) {
            var fx = pub.getAllFXProperties(obb.layer);
            return [obb, fx]
        } else {
            return obb;
        }
    } else {
        error("Layer name not found");
    }
};



/**
 * Get all layers as Properties object from composition.
 * @category Baffects.js 
 * @method getAllLayers
 * @param {number} option If option is true, return type is LayerCollection
 *@returns {Array<Properties>} 0-based array of Properties object with attributes [layer, anchor, position, scale, rotation, orientation, rotationx, rotationy, rotationz, opacity].
 *                             Each attribute is a Property object for convenience in animation, except of layer which is the layer reference.
 */
pub.getAllLayers = function (option) {
    var allLayers = [];
    var layers = thisComp.layers;

    if (arguments.length === 0) {
        if (layers.length > 0) {
            for (var i = 1; i <= layers.length; i++) {
                var obb = new Properties();
                obb.layer = layers[i];
                scopeTransformProperties(obb);
                allLayers.push(obb);
            }
        } else
            error("No layers found in composition")

        return allLayers;
    } else {
        return thisComp.layers;
    }
};

/**
 * Get layers by range.
 * @category Baffects.js 
 * @method getLayers
 * @param {number} min Minimum index of layer collection
 * @param {number} max Maximum index of layer collection
 *@returns {LayerCollection} Layers in range
 */
pub.getLayers = function (min, max) {
    var layers = pub.getAllLayers();
    return layers.slice(min - 1, max);
};

/**
 * Gets a property from a specified layer, this function is useful in case Properties is not returning a correct layer or effects property.
 * @category Baffects.js 
 * @method getProperty
 * @param {AVLayer} layer Object or AVLayer to get a Property from
 * @param {String} path Full path to property 
 *@returns {Property} Property reference
 */
pub.getProperty = function (layer, path) {
    if (!validateLayer(layer))
        layer = layer.layer;
    var pathStr = path.split("/");
    var prop = layer.property(pathStr[0]);
    for (var i = 1; i < pathStr.length; i++) {
        prop = prop.property(pathStr[i]);
    }
    return prop;
};

/**
 * Add FX to a specific layer.
 * @category Baffects.js 
 * @method addFX
 * @param {Properties} layer Object or AVLayer to add fx to
 * @param {String} fx Name of the effect to add to layer
 *@returns {Properties} Properties object with all animatable properties. Attribute names are built without spaces and all lower case. (Ej. "fx.color" To get the property "Effects/Fill/Color").
 */
pub.addFX = function (layer, fx) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var fxPath = layer.effect.addProperty(fx);
    var fx = new Properties();
    for (var i = 0; i < fxPath.numProperties; i++) {
        var prop = fxPath.property(i + 1);
        fx[prop.name.toLowerCase().replace(/\s/g, '')] = prop;
    }
    return fx;
};

/**
 * Add slider to layer.
 * @category Baffects.js
 * @method slider
 * @param {Properties} layer Object or AVLayer to add slider to
 * @param {String} name Slider new name
 * @param {Property} prop Property to link slider control
 *@returns {Properties} Properties object with attributes [name, value]
 */
pub.slider = function (layer, name, prop) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var sli = layer.effect.addProperty("ADBE Slider Control");
    var value = sli.property("ADBE Slider Control-0001");
    var exp1 = 'temp = effect("' + sli.name + '")("Slider");';

    var testReturn = new Properties();
    testReturn.name = sli.name;
    testReturn.value = sli.value;

    return testReturn;
};

/**
 * Return true if seleted layer is Shape Layer.
 * @category Baffects.js
 * @method isShape
 * @param {Properties} layer 
 *@returns {Boolean}
 */
pub.isShape = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    if (layer instanceof ShapeLayer) {
        return true;
    } else {
        return false;
    }
};

/**
 * Add preset to a specific layer.
 * @category Baffects.js
 * @method addPreset
 * @param {Properties} layer Object or AVLayer to add preset to
 * @param {String} name Name of the preset to add to layer
 *@returnss {Object} Object hierarchy containing all properties of each effect. For every effect it returns an object with attributes names without spaces and lower case. (Ej. "fx.fill.color" To get the property "Effects/Fill/Color").
 */
pub.addPreset = function (layer, name) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var osPath;
    if (system.osName == "MacOS")
        osPath = Folder.startup.parent.parent.parent.fsName + "/Presets/";
    else
        osPath = Folder.startup.fsName + encodeURI("/Presets/");

    var file = new File(osPath + name + ".ffx");

    var preset = layer.applyPreset(file);

    return pub.getAllFXProperties(layer);
}

/**
 * @method getAllFXProperties
 * @category Baffects.js
 * @param {Properties} layer Object or AVLayer to get FX properties
 *@returns {Object} Object hierarchy containing all properties of each effect. For every effect it returns an object with attributes names without spaces and lower case. (Ej. "fx.fill.color" To get the property "Effects/Fill/Color").
 * @example 
 * var layer = b.solid();                   
 * var fx = b.getAllFXProperties(layer);    
 * b.setKey(fx.fill.color, 0, [1,0,0]);     
 * b.setKey(fx.fill.color, 1, [1,1,0]);     
 */
pub.getAllFXProperties = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var fx = new Properties();
    var fxGroup = layer("Effects");
    for (var i = 0; i < fxGroup.numProperties; i++) {
        fx[fxGroup.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = new Properties();
        var ffx = fx[fxGroup.property(i + 1).name.toLowerCase().replace(/\s/g, '')];
        for (var j = 0; j < fxGroup.property(i + 1).numProperties; j++) {
            var prop = fxGroup.property(i + 1);
            ffx[prop.property(j + 1).name.toLowerCase().replace(/\s/g, '')] = prop.property(j + 1);
        }
    }
    return fx;
}

/**
 * Sets track matte function in layer.
 * @category Baffects.js  
 * @method trackMatte
 * @param {Properties} layer Object or AVLayer to set track matte
 * @param {ALPHA|ALPHA_INVERTED|LUMA|LUMA_INVERTED|NO_TRACK_MATTE} mode 
 */
pub.trackMatte = function (layer, mode) {
    if (!validateLayer(layer))
        layer = layer.layer;
    layer.trackMatteType = mode;
};

/**
 * Precompose layers.
 * @category Baffects.js 
 * @method preComp
 * @param {Array} indexes The position indexes of the layers to be collected. An array of integers
 * @param {String} name Name of the new composition
 */
pub.preComp = function (index, name) {
    var newComp = thisComp.layers.precompose(index, name, true);
    return newComp;
};


/**
 * Return the index number.
 * @category Baffects.js
 * @method getIndex
 * @param {Properties} layer 
 */
pub.getIndex = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;
    return layer.index;
}

/**
 * Return only manually selected layers from composition.
 * @category Baffects.js 
 * @method selectedLayers
 *@returns {Array<Properties>} 0-based array of Properties object of only selected layers with attributes [layer, anchor, position, scale, rotation, orientation, rotationx, rotationy, rotationz, opacity].
 *                             Each attribute is a Property object for convenience in animation, except of layer which is the layer reference.
 */
pub.selectedLayers = function () {
    var sel = thisComp.selectedLayers;
    var allLayers = [];

    if (sel.length > 0) {
        for (var i = 0; i < sel.length; i++) {
            var obb = new Properties();
            obb.layer = sel[i];
            scopeTransformProperties(obb);
            allLayers.push(obb);
        }
    } else
        error("Select at least one layer")

    return allLayers;
};

function scopeTransformProperties(obb) {
    this.shape = obb.layer;
    this.obb = obb;
    setTransformPropertiesObject();

    return this.obb;
};

/**
 * Add item to composition.
 * @category Baffects.js
 * @method addLayer
 * @param {Item} item 
 *@returns {Properties} Transform properties
 */
pub.addLayer = function (item) {
    var obb = new Properties();
    var layer = thisComp.layers.add(item);
    obb.layer = layer;
    scopeTransformProperties(obb);
    return obb;
};

/**
 * Turn on collapse transformation on layer.
 * @category Baffects.js
 * @method collapseVectors
 * @param {Properties} layer 
 */
pub.collapseVectors = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    layer.collapseTransformation = true;
};

/**
 * Duplicate a layer n times.
 * @category Baffects.js 
 * @method duplicate
 * @param {Layer} layer Layer to duplicate
 * @param {number} n number of duplicates to generate
 * @param {Boolean} [autoComp] Precompose all duplicates if true
 * @returns {Properties} Array with transform Properties 
 */
pub.duplicate = function (originalLayer, n, autoComp) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2];

    var copies;
    switch (arguments.length) {
        case 2:
            copies = dup(a, b, false);
            return copies;
        case 3:
            copies = dup(a, b, c);
            return copies;
    }
};

function dup(layer, n, autoComp) {
    if (!validateLayer(layer))
        layer = layer.layer;
    var copies = [];
    for (var i = 0; i < n; i++) {
        var dup = layer.duplicate();
        copies.push(dup);
    }
    if (autoComp) {
        pub.preComp(indexArray(copies), "Duplicates" + proj.numItems);
    }
    return copies;
};

/**
 * Reverse layers order in timeline.
 * @category Baffects.js 
 * @method reverseLayers
 * @param {LayerCollection} layers Layers to invert order
 */
//Function adapted from code found in Adobe forums and the internet
pub.reverseLayers = function (layers) {
    for (var j = 1; j <= layers.length / 2; j++) {
        var layerToMoveAfter = layers[j];
        var wasLocked = layerToMoveAfter.locked;
        if (wasLocked) {
            layerToMoveAfter.locked = false;
        }
        layerToMoveAfter.moveAfter(layers[layers.length - j + 1]);
        if (wasLocked) {
            layerToMoveAfter.locked = true;
        }
        if (layers.length - j != j) {
            var layerToMoveBefore = layers[layers.length - j];
            wasLocked = layerToMoveBefore.locked;
            if (wasLocked) {
                layerToMoveBefore.locked = false;
            }
            layerToMoveBefore.moveBefore(layers[j]);
            if (wasLocked) {
                layerToMoveBefore.locked = true;
            }
        }
    }
};

/**
 * Create parent - child relationship.
 * @category Baffects.js 
 * @method parent
 * @param {Properties} layer Object or AVLayer to be parent layer
 * @param {Properties} layer Object or AVLayer to be children
 */
pub.parent = function (parent, children) {
    if (!validateLayer(parent))
        parent = parent.layer;
    if (!validateLayer(children))
        children = children.layer;
    children.parent = parent;
};

/**
 * Get Layer object bounds.
 * @category Baffects.js
 * @method bounds
 * @param {Properties} layer Object or AVLayer to bet bounds from
 * @returns {Object} A JavaScript object with four attributes, [top, left, width, height]
 */
pub.bounds = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    return layer.sourceRectAtTime(layer.inPoint, false);
};

/**
 * Reposition anchor point to bounding box option: 
 * 1-------2-------3    
 * 4-------5-------6    
 * 7-------8-------9    
 * @category Baffects.js
 * @method anchor
 * @param {Properties} layer Object or AVLayer to reposition anchor point
 * @param {number} option Point to bounding box to reposition anchor point
 */
//This function was adapted from several posts on adobe forum and code found on the internet...
pub.anchor = function (layer, mode) {
    if (!validateLayer(layer))
        layer = layer.layer;

    if (layer instanceof CameraLayer) {
        if (layers.length == 1) {
            error("Cannot reposition anchor point in camera layer...")
        }
    }
    var row = 0,
        col = 0;

    switch (mode) {
        case 1:
            row = 0;
            col = 0;
            break;
        case 2:
            row = 1;
            col = 0;
            break;
        case 3:
            row = 2;
            col = 0;
            break;
        case 4:
            row = 0;
            col = 1;
            break;
        case 5:
            row = 1;
            col = 1;
            break;
        case 6:
            row = 2;
            col = 1;
            break;
        case 7:
            row = 0;
            col = 2;
            break;
        case 8:
            row = 1;
            col = 2;
            break;
        case 9:
            row = 2;
            col = 2;
            break;
    }

    var noMasks = true;

    if (layer.mask.numProperties != 0) {
        for (var i = 1; i <= layer.mask.numProperties; i++) {
            if (layer.mask(i).maskMode != MaskMode.NONE) {
                noMasks = false;
            }
        }
    }

    if (noMasks) {
        switch (row) {
            case 0:
                var x = 0;
                break;
            case 1:
                var x = pub.bounds(layer).width / 2;
                break;
            case 2:
                var x = pub.bounds(layer).width;
                break;
            case 3:
                var x = pub.bounds(layer).width;
                break;
            default:
        }

        switch (col) {
            case 0:
                var y = 0;
                break;
            case 1:
                var y = pub.bounds(layer).height / 2;
                break;
            case 2:
                var y = pub.bounds(layer).height;
                break;
            case 3:
                var y = pub.bounds(layer).height;
                break;
            default:
        }

        if (layer instanceof TextLayer || layer instanceof ShapeLayer) {
            x += pub.bounds(layer).left;
            y += pub.bounds(layer).top;
        }

    } else {
        var xBounds = [];
        var yBounds = [];
        var numMasks = layer.mask.numProperties;

        for (var i = 1; i <= numMasks; i++) {
            var numVerts = layer.mask(i).maskShape.value.vertices.length;
            if (layer.mask(i).maskMode == MaskMode.NONE) { continue; }
            for (var j = 0; j < numVerts; j++) {
                var curVerts = layer.mask(i).maskShape.valueAtTime(layer.inPoint, false).vertices[j];
                xBounds.push(curVerts[0])
                yBounds.push(curVerts[1])
            }
        }

        xBounds.sort(function (a, b) { return a - b })
        yBounds.sort(function (a, b) { return a - b })

        var xl = xBounds.shift();
        var xh = xBounds.pop();
        var yl = yBounds.shift();
        var yh = yBounds.pop();

        if (layer instanceof TextLayer || layer instanceof ShapeLayer) {
            var xl2 = pub.bounds(layer).left;
            var xh2 = xl2 + pub.bounds(layer).width;
            var yl2 = pub.bounds(layer).top;
            var yh2 = yl2 + pub.bounds(layer).height;

            if (xl < xl2) { xl = xl2; }
            if (xh > xh2) { xh = xh2; }
            if (yl < yl2) { yl = yl2; }
            if (yh > yh2) { yh = yh2; }
        }

        switch (row) {
            case 0:
                var x = xl;
                break;
            case 1:
                var x = xl + ((xh - xl) / 2);
                break;
            case 2:
                var x = xh;
                break;
            case 3:
                var x = xl + ((xh - xl));
                break;
            default:
        }

        switch (col) {
            case 0:
                var y = yl;
                break;
            case 1:
                var y = yl + ((yh - yl) / 2);
                break;
            case 2:
                var y = yh;
                break;
            case 3:
                var y = yl + ((yh - yl));
                break;
            default:
        }
    }

    if (layer.anchorPoint.isTimeVarying) {
        theComp = app.project.activeItem;
        layer.anchorPoint.setValueAtTime(theComp.time, [x, y]);
    } else {
        var curAnchor = layer.anchorPoint.value;

        var xMove = (x - curAnchor[0]) * (layer.scale.value[0] / 100);
        var yMove = (y - curAnchor[1]) * (layer.scale.value[1] / 100);

        var posEx = false;
        if (layer.position.expressionEnabled) {
            layer.position.expressionEnabled = false;
            posEx = true;
        }

        var dupLayer = layer.duplicate();

        var oldParent = layer.parent;

        dupLayer.moveToEnd();
        if (dupLayer.scale.isTimeVarying) {
            dupLayer.scale.setValueAtTime(app.project.activeItem.time, [100, 100])
        } else {
            dupLayer.scale.setValue([100, 100]);
        }

        layer.parent = dupLayer;

        layer.anchorPoint.setValue([x, y]);

        if (layer.position.isTimeVarying) {
            var numKeys = layer.position.numKeys;
            for (var k = 1; k <= numKeys; k++) {
                var curPos = layer.position.keyValue(k);
                curPos[0] += xMove;
                curPos[1] += yMove;
                layer.position.setValueAtKey(k, curPos);
            }
        } else {
            var curPos = layer.position.value;
            layer.position.setValue([curPos[0] + xMove, curPos[1] + yMove, curPos[2]]);

        }
        layer.parent = oldParent;
        if (posEx) {
            layer.position.expressionEnabled = true;
        }
        dupLayer.remove();
    }
};

/**
 * Enables motion blur to layer.
 * @category Baffects.js
 * @method motionBlur
 * @param {Properties} layer Object or AVLayer to enable motion blur
 */
pub.motionBlur = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    layer.motionBlur = true;

    if (!thisComp.motionBlur)
        thisComp.motionBlur = true;
};

/**
 * Enable adjustment layer mode.
 * @category Baffects.js
 * @method adjustmenLayer
 * @param {Properties} layer Object or AVLayer to enable adjustment layer mode
 */
pub.adjustmentLayer = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    layer.adjustmentLayer = true;
};

//TO DO
pub.removeAllEffects = function (layer) { };

/**
 * Convert audio to keyframes.
 * @category Baffects.js
 * @method audioToKeyframes
 * @param {AVLayer} layer Layer to create keyframes from
 * @returns {Properties} Properties object with attributes [left, right, both].
 */
pub.audioToKeyframes = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    layer.selected = false;
    layer.selected = true;

    thisComp.openInViewer();
    var n = app.findMenuCommandId("Convert Audio to Keyframes");
    app.executeCommand(n);

    var amp = thisComp.layers[1];
    pub.println(amp.name);
    var obb = new Properties();
    obb.left = amp.property("ADBE Effect Parade").property(1).property("ADBE Slider Control-0001");
    obb.right = amp.property("ADBE Effect Parade").property(2).property("ADBE Slider Control-0001");
    obb.both = amp.property("ADBE Effect Parade").property(3).property("ADBE Slider Control-0001");

    return obb;
}

/**
 * Apply time remap to loop a sequence.
 * @category Baffects.js
 * @method timeRemap
 * @param {Sequence} layer 
 * @returns 1
 */
pub.timeRemap = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    layer.selected = false;
    layer.selected = true;
    thisComp.openInViewer();
    var n = app.findMenuCommandId("Enable Time Remapping");
    app.executeCommand(n);

    layer.outPoint = thisComp.duration;
    pub.expression(layer.property("Time Remap"), "loopOut()");
}

/**
 * Generate frame offset between layers layers.
 * @category Baffects.js 
 * @subcat FromSelections
 * @method moveFrames
 * @param {number} n number of frames to offset each layer layer beginning at playhead position
 */
pub.moveFrames = function (layers, n, initTime) {
    if (layers.length > 0) {
        var layersOnly = [];
        for (var i = 0; i < layers.length; i++) {
            layersOnly.push(layers[i].layer);
        }

        for (i = layersOnly.length - 1; i >= 0; i--) {
            layersOnly[i].startTime = initTime + frameMove(n) * ((layersOnly.length - 1) - i);
        }
    } else {
        println("select at least one layer");
    }
};



/**
 * Create shapes from vectors layer.
 * @category Baffects.js
 * @method createShapes
 * @param {Array} [layers] Array of Properties object to convert to shapes
 * @returns {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, fill, stroke, weight].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created Shape layer reference.
 */
pub.createShapes = function (layers) {
    var lays;
    if (arguments.length === 1)
        lays = arguments[0];
    else
        lays = pub.getAllLayers();

    for (var i = 0; i < lays.length; i++) {
        lays[i].layer.selected = false;
        lays[i].layer.selected = true;
    }
    thisComp.openInViewer();
    app.executeCommand(3973); //Create shapes from vector layers menu id

    var shapes = [];
    var all = thisComp.layers;

    for (var i = 1; i <= all.length; i++) {
        if (all[i] instanceof ShapeLayer) {
            var obb = new Properties();
            obb.layer = all[i];

            var transform = all[i].property("ADBE Transform Group");
            for (var j = 0; j < transform.numProperties - 1; j++) {
                obb[transform.property(j + 1).name.toLowerCase().replace(/\s/g, '')] = transform.property(j + 1);
            }

            var grouping = obb.layer.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group");
            obb.path = grouping.property(1).property("ADBE Vector Shape");

            try {
                var fill = grouping.property("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color");
                obb.fill = fill;
            } catch (e) { };

            try {
                var stroke = grouping.property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Color");
                obb.stroke = stroke;
            } catch (e) { };

            try {
                var weight = grouping.property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Width");
                obb.weight = weight;
            } catch (e) { };

            shapes.push(obb);
        }
    }

    return shapes
};


//______________________________________________________________________________________________________________________
// Setter and getter methods for global modes 


/**
 * Set composition to work with.
 * @category Baffects.js 
 * @method setComp
 * @param {String|CompItem} comp 
 */
pub.setComp = function (comp) {
    if (typeof comp === "string") {
        var newComp = pub.getComp(comp);
        thisComp = newComp;
    } else if (comp instanceof Properties) {
        var newComp = pub.getComp(comp.layer.name);
        thisComp = newComp;
    } else {
        thisComp = comp;
    }
};

/**
 * Set anchor point to bounding box option mode: 
 * 1-------2-------3    
 * 4-------5-------6    
 * 7-------8-------9     
 * This allows for the position to be controlled in a more intuitive way from scripting. Defaults to 5 which is the center of the layer.
 * @category Baffects.js 
 * @method anchorMode
 * @param {number} mode 
 */
pub.anchorMode = function (mode) {
    currAnchorMode = mode;
};

/**
 * Set global blend mode for layers.
 * @category Baffects.js 
 * @method blendMode
 * @param {ADD|ALPHA_ADD|CLASSIC_COLOR_BURN|CLASSIC_COLOR_DODGE|CLASSIC_DIFFERENCE|COLOR|COLOR_BURN|COLOR_DODGE|DANCING_DISSOLVE|DARKEN|DARKER_COLOR|DIFFERENCE|DISSOLVE|DIVIDE|EXCLUSION|HARD_LIGHT|HARD_MIX|HUE|LIGHTEN|LIGHTER_COLOR|LINEAR_BURN|LINEAR_DODGE|LINEAR_LIGHT|LUMINESCENT_PREMUL|LUMINOSITY|MULTIPLY|NORMAL|OVERLAY|PIN_LIGHT|SATURATION|SCREEN|SILHOUETTE_LUMA|SUBTRACT|SOFT_LIGHT|STENCIL_ALPHA|STENCIL_LUMA|VIVID_LIGHT} mode 
 */
pub.blendMode = function (mode) {
    currBlendMode = mode;
};

/**
 * Apply no fill.
 * @category Baffects.js 
 * @subcat Color
 * @method noFill
 */
pub.noFill = function () {
    currFillState = false;
    var off = new Style(currFillState, currFillColor, currStrokeState, currStrokeColor, currStrokeWeight);
    styleStack.push(off);
};

/**
 * Apply no stroke.
 * @category Baffects.js 
 * @subcat Color
 * @method noStroke
 */
pub.noStroke = function () {
    currStrokeState = false;
    var off = new Style(currFillState, currFillColor, currStrokeState, currStrokeColor, currStrokeWeight);
    styleStack.push(off);
};

/**
 * Returns the current strokeWeight in points and sets it if argument strokeWeight is given.
 * @category Baffects.js 
 * @subcat Color
 * @method strokeWeight
 * @param {number} strokeWeight Stroke weight in points to set
 * @returns {number} Current stroke weight
 */
pub.strokeWeight = function (strokeWeight) {
    if (arguments.length === 1) {
        currStrokeWeight = strokeWeight;
    }

    var off = new Style(currFillState, currFillColor, currStrokeState, currStrokeColor, currStrokeWeight);
    styleStack.push(off);

    return currStrokeWeight;
}

/**
 * Enables 3D manipulation in layers.
 * @category Baffects.js 
 * @method set3DMode
 * @param {ENABLE3D|DISSABLE3D} mode 
 */
pub.set3DMode = function (mode) {
    curr3DMode = mode;
};

/**
 * Set specific layer blending mode.
 * @category Baffects.js 
 * @method blendingMode
 * @param {Layer} layer 
 * @param {BlendMode} mode 
 */
pub.blendingMode = function (layer, mode) {
    layer.blendingMode = mode;
};

/**
 * Set global cap mode for stroke.
 * @category Baffects.js 
 * @method capMode
 * @param {BUTT|ROUND|PROJECTING} mode  
 */
pub.capMode = function (mode) {
    currCaps = mode;
}




//______________________________________________________________________________________________________________________
// Render methods

/**
 * Add composition to render queue.
 * @category Baffects.js 
 * @method addToRender
 * @param {CompItem} [comp] Reference to composition to render 
 * @param {String} template Name of template to use on render
 * @param {String} path Path to save render file
 */
pub.addToRender = function (comp, template, path) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2];

    switch (arguments.length) {
        case 2:
            addToRenderFunc(thisComp, 1, a, b);
            break;
        case 3:
            addToRenderFunc(a, 1, b, c);
            break;
    }
};

function addToRenderFunc(comp, mod, template, path) {
    try {
        var file = initExportFile(path, false);
    } catch (e) {
        error("Please save you AE file on the same path of your data folder.")
    }
    var added = queue.items.add(comp);
    added.outputModule(mod).applyTemplate(template);
    added.outputModule(mod).file = file;
}

/**
 * Render all compositions in render queue.
 * @category Baffects.js 
 * @method render
 */
pub.render = function () {
    queue.showWindow(true);
    queue.render();
};

/**
 * Clear all items from render queue.
 * @category Baffects.js 
 * @method clearRenderQueue
 */
pub.clearRenderQueue = function () {
    while (queue.numItems > 0) {
        queue.item(queue.numItems).remove();
    }
};

pub.exportFrameOnly = function (n) {

};

function exportOnlyFrame(comp, mod, n, template, path) {
    var file = initDataFile(path, false);
    var added = queue.items.add(comp);
    added.outputModule(mod).applyTemplate(template);
    added.outputModule(mod).file = file;
};

/**
 * Add composition to render queue.
 * @category Baffects.js 
 * @method addToRenderAME
 * @param {CompItem} [comp] Reference to composition to render 
 * @param {String} template Name of template to use on render
 * @param {String} path Path to save render file
 */
pub.addToRenderAME = function (comp, template, path) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2];

    switch (arguments.length) {
        case 2:
            addToRenderAMEFunc(thisComp, 1, a, b);
            break;
        case 3:
            addToRenderAMEFunc(a, 1, b, c);
            break;
    }
};

function addToRenderAMEFunc(comp, mod, template, path) {
    try {
        var file = initExportFile(path, false);
    } catch (e) {
        error("Please save you AE file on the same path of your data folder.")
    }
    var added = queue.items.add(comp);
    added.outputModule(mod).file = file;

    if (app.project.renderQueue.canQueueInAME == true) {
        app.project.renderQueue.queueInAME(false);
    }
}


/**
 * Render in render Adone Media Encoder.
 * @category Baffects.js 
 * @method renderAME
 */
pub.renderAME = function () {
    if (app.project.renderQueue.canQueueInAME == true) {
        app.project.renderQueue.queueInAME(true);
    }
};




// ----------------------------------------
// Structure
// Taken from basil.js

/**
 * Suspends the calling thread for a number of milliseconds.
 * During a sleep period, checks at 100 millisecond intervals to see whether the sleep should be terminated.
 * @category Baffects.js
 * @cat Environment
 * @method delay
 * @param  {number} milliseconds  The delay time in milliseconds
 */
pub.delay = function (milliseconds) {
    $.sleep(milliseconds);
};