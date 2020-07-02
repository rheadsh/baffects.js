//Text

/**
 * Add text to composition.
 *  
 * @category Baffects.js
 * @method text
 * @param {String} text Text to add
 * @param {number} x x-coordinate of the textbox
 * @param {number} y y-coordinate of the textbox
 * @param {number} [z] z-coordinate of the textbox
 *  @returns {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, path, reversepath, perpendiculartopath, forcealignment, firstmargin, lastmargin].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created TextLayer reference.
 * @example
 * var txt = b.text(text, x, y);
 * var txt = b.text(text, x, y, z);
 */
pub.text = function (text, x, y, z) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3];

    var textLayer;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 3:
                textLayer = createText(thisComp, a, b, c, 0);
                return textLayer;
        }
    } else {
        switch (arguments.length) {
            case 4:
                textLayer = createText(thisComp, a, b, c, d);
                return textLayer;
        }
    }
};

function createText(comp, text, x, y, z) {
    this.obb = new Properties();

    this.shape = comp.layers.addText(text);
    this.obb.layer = this.shape;

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    setTransformPropertiesObject();

    var pathOptions = this.shape.property("ADBE Text Properties").property("ADBE Text Path Options");
    for (var i = 0; i < pathOptions.numProperties; i++) {
        this.obb[pathOptions.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = pathOptions.property(i + 1);
    }

    var textLayerProps = this.shape.property("ADBE Text Properties").property("ADBE Text Document");
    var textLayerDoc = textLayerProps.value;
    textLayerDoc.font = currFont;
    textLayerDoc.fontSize = currFontSize;
    textLayerDoc.applyFill = currFillState;
    textLayerDoc.fillColor = currFillColor;
    textLayerDoc.applyStroke = currStrokeState;
    textLayerDoc.strokeColor = currStrokeColor;
    textLayerDoc.strokeWidth = currStrokeWeight;
    textLayerDoc.justification = currJustification;
    textLayerProps.setValue(textLayerDoc);

    pub.anchor(this.obb.layer, currAnchorMode);
    var cmx = currMatrix.position[0];
    var cmy = currMatrix.position[1];
    var cmz = currMatrix.position[2];
    this.obb.position.setValue([cmx + x, cmy + y, cmz + z]);
    this.obb.scale.setValue(currMatrix.scale);
    if (curr3DMode) {
        this.obb.xrotation.setValue(currMatrix.rotation3d[0]);
        this.obb.yrotation.setValue(currMatrix.rotation3d[1]);
        this.obb.zrotation.setValue(currMatrix.rotation3d[2]);
    } else {
        this.obb.rotation.setValue(currMatrix.rotation);
    }

    obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    return this.obb;
}

/**
 * Sets the current text alignment.
 *  
 * @category Baffects.js
 * @method textAlign
 * @param {J_LEFT|J_RIGHT|J_CENTER|J_FULL_LEFT|J_FULL_RIGHT|J_FULL_CENTER|J_FULL} mode Text justification mode
 */
pub.textAlign = function (mode) {
    currJustification = mode;
};

/**
 * Returns the current font size in points and sets it if argument pointSize is given.
 *  
 * @category Baffects.js
 * @method textSize
 * @param {number} pointSize The size in points to set
 *  @returns {number}          The current point size
 */
pub.textSize = function (pointSize) {
    if (arguments.length === 1) {
        currFontSize = pointSize;
    }
    return currFontSize;
};

/**
 * Returns the current font and sets it if argument fontName is given.
 *  
 * @category Baffects.js
 * @method textFont
 * @param {string} fontName The name of the font to set e.g. Helvetica
 *  @returns {string}         The name of the current font
 */
pub.textFont = function (fontName) {
    if (arguments.length === 1) {
        currFont = fontName;
    }
    return currFont;
};


//Not ready
pub.character = function (text) {
    var textPos = text.position.value,
        textString = text.sourceText.value.toString(),
        textBox = text.sourceRectAtTime(text.inPoint, false),
        textJustification = text.property("ADBE Text Properties").property("ADBE Text Document").value.justification,
        textOffset = 0;

    if (textJustification === pub.J_CENTER)
        textOffset -= textBox.width / 2;
    else if (textJustification === pub.J_RIGHT)
        textOffset -= textBox.width;

    var textStartPos = textPos + textOffset;
    var lastLength = 0;

    layers = [];

    for (var i = 0; i < textString.length; i++) {
        var character = textString.charAt(i);
        if (character.match(/\s+/)) {
            continue;
        }
        var newText = text.duplicate();
        newText.name = character;

        if (curr3DMode) {
            shape.threeDLayer = true;
        }

        newText.sourceText.setValue(character);
        if (textJustification === pub.J_CENTER) {
            var newTextBox = newText.sourceRectAtTime(newText.inPoint, false);
            var newPos = textStartPos + [(textBox.width * (i / textString.length)) + (newTextBox.width / 2), 0, 0];
            newText.position.setValue(newPos);
        } else if (textJustification === pub.J_RIGHT) {
            var newTextBox = newText.sourceRectAtTime(newText.inPoint, false);
            var newPos = textStartPos + [textBox.width * (i / textString.length), 0, 0];
            newText.position.setValue(newPos);
        }

        layers.push(newText);
    }
    text.enabled = false;
    return layers;
};



//______________________________________________________________________________________________________________________
// Text Layer FX

/**
 * Add Anchor Point effect to text layer.
 *  
 * @category Baffects.js
 * @method textAnchorPoint
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [anchor, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textAnchorPoint(txt.layer);                                                         
 */
pub.textAnchorPoint = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.anchor = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Anchor Point 3D");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Position effect to text layer.
 *  
 * @category Baffects.js
 * @method textPosition
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [position, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textPosition(txt.layer);                                   
 */
pub.textPosition = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;
    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.position = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Position 3D");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Scale effect to text layer.
 *  
 * @category Baffects.js
 * @method textScale
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [scale, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textScale(txt.layer);                                      
 */
pub.textScale = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;
    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.scale = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Scale 3D");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Skew effect to text layer.
 *  
 * @category Baffects.js
 * @method textSkew
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [skew, skewAxis, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textSkew(txt.layer);                                       
 */
pub.textSkew = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;
    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.skew = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew");
    obb.skewAxis = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew Axis");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Rotation effect to text layer.
 *  
 * @category Baffects.js
 * @method textRotation
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [rotation, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textRotation(txt.layer);                                   
 */
pub.textRotation = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;
    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.rotation = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Rotation");

    rangeAdvanced(range, obb);

    return obb;
};


/**
 * Add Opacity effect to text layer.
 *  
 * @category Baffects.js
 * @method textOpacity
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [opacity].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textOpacity(txt.layer);                                    
 */
pub.textOpacity = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.opacity = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add All Transform Properties effect to text layer.
 *  
 * @category Baffects.js
 * @method textAllTransform
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [anchor, position, scale, skew, skewAxis, rotation, opacity, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textAllTransform(txt.layer);                               
 */
pub.textAllTransform = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.anchor = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Anchor Point 3D");
    obb.position = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Position 3D");
    obb.scale = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Scale 3D");
    obb.skew = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew");
    obb.skewAxis = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew Axis");
    obb.rotation = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Rotation");
    obb.opacity = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Fill Color effect to text layer.
 *  
 * @category Baffects.js
 * @method textFill
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [fill, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textFill(txt.layer);                                       
 */
pub.textFill = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.fill = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Fill Color");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Stroke Color effect to text layer.
 *  
 * @category Baffects.js
 * @method textStroke
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [stroke, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textStroke(txt.layer);                                     
 */
pub.textStroke = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.stroke = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Stroke Color");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Stroke Width effect to text layer.
 *  
 * @category Baffects.js
 * @method textStrokeWidth
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [width, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textStrokeWidth(txt.layer);                                
 */
pub.textStrokeWidth = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.width = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Stroke Width");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Tracking effect to text layer.
 *  
 * @category Baffects.js
 * @method textStroke
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [tracking, amount, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textTracking(txt.layer);                                   
 */
pub.textTracking = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.tracking = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Track Type");
    obb.amount = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Tracking Amount");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Character Offset effect to text layer.
 *  
 * @category Baffects.js
 * @method textCharacterOffset
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [alignment, range, offset, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textCharacterOffset(txt.layer);                            
 */
pub.textCharacterOffset = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.alignment = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Change Type");
    obb.range = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Range");
    obb.offset = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Offset");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Character Value effect to text layer.
 *  
 * @category Baffects.js
 * @method textCharacterValue
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [alignment, range, value, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textCharacterValue(txt.layer);                             
 */
pub.textCharacterValue = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.alignment = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Change Type");
    obb.range = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Range");
    obb.value = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Replace");

    rangeAdvanced(range, obb);

    return obb;
};

/**
 * Add Blur effect to text layer.
 *  
 * @category Baffects.js
 * @method textBlur
 * @param {TextLayer} text TextLayer or Properties object to add effect to
 *  @returns {Properties} Properties object with attributes [blur, start, end, offset, units, basedon, mode, amount, shape, smoothness, easehigh, easelow, randomizeorder, randomseed].
 * @example
 * var txt = b.text("Baffects.js", b.width / 2, b.height / 2);           
 * var fx = b.textBlur(txt.layer);                                       
 */
pub.textBlur = function (layer) {
    if (!validateLayer(layer))
        layer = layer.layer;

    var obb = new Properties();
    var animator = layer.Text.Animators.addProperty("ADBE Text Animator");
    var range = animator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    obb.blur = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Blur");

    rangeAdvanced(range, obb);

    return obb;
};


//Get all range selector properties with advanced options
function rangeAdvanced(range, obb) {
    for (var i = 0; i < 3; i++) {
        obb[range.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = range.property(i + 1);
    }

    var advanced = range.property("ADBE Text Range Advanced");
    for (var i = 0; i < advanced.numProperties; i++) {
        obb[advanced.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = advanced.property(i + 1);
    }
}