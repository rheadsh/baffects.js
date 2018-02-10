//Shapes

/**
 * Add a solid to the composition.
 * @cat AfterEffects
 * @subcat Shapes
 * @method solid
 * @param {String} [name] Name of the solid
 * @param {Number} x x-coordinate of the solid
 * @param {Number} y y-coordinate of the solid
 * @param {Number} [z] z-coordinate of the solid
 * @param {Number} w Width of the solid
 * @param {Number} h Height of the solid
 * @param {Number} [duration] Duration of the solid in seconds
 * @return {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created solid AVLayer reference.
 *
 * <h4> Syntax: </h4>
 * var solid = b.solid();                               <br>
 * var solid = b.solid(name);                           <br>
 * var solid = b.solid(duration);                       <br>
 * var solid = b.solid(x, y, w, h);                     <br>
 * var solid = b.solid(name, x, y, w, h);               <br>
 * var solid = b.solid(x, y, w, h, duration);           <br>
 * var solid = b.solid(x, y, z, w, h);                  <br>
 * var solid = b.solid(name, x, y, z, w, h);            <br>
 * var solid = b.solid(x, y, z, w, h, duration);        <br>
 */
pub.solid = function (name, x, y, z, w, h, dur) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4],
        f = arguments[5],
        g = arguments[6];

    var newSolid;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 0:
                newSolid = createSolid(thisComp, "solid", pub.width / 2, pub.height / 2, 0, pub.width, pub.height, pub.getDuration());
                newSolid.name = "solid_" + (thisComp.numLayers).toString();
                return newSolid;
            case 1:
                if (typeof a === "string") {
                    newSolid = createSolid(thisComp, a, pub.width / 2, pub.height / 2, 0, pub.width, pub.height, pub.getDuration());
                    return newSolid;
                } else {
                    newSolid = createSolid(thisComp, "solid", pub.width / 2, pub.height / 2, 0, pub.width, pub.height, a);
                    newSolid.name = "solid_" + (thisComp.numLayers).toString();
                    return newSolid;
                }
            case 4:
                newSolid = createSolid(thisComp, "solid", a, b, 0, c, d, pub.getDuration());
                newSolid.name = "solid_" + (thisComp.numLayers).toString();
                return newSolid;
            case 5:
                if (typeof a === "string") {
                    newSolid = createSolid(thisComp, a, b, c, 0, d, e, pub.getDuration());
                    return newSolid;
                } else {
                    newSolid = createSolid(thisComp, "solid", a, b, 0, c, d, e);
                    newSolid.name = "solid_" + (thisComp.numLayers).toString();
                    return newSolid;
                }
        }
    } else {
        switch (arguments.length) {
            case 5:
                newSolid = createSolid(thisComp, "solid", a, b, c, d, e, pub.getDuration());
                newSolid.name = "solid_" + (thisComp.numLayers).toString();
                return newSolid;
            case 6:
                if (typeof a === "string") {
                    newSolid = createSolid(thisComp, a, b, c, d, e, f, pub.getDuration());
                    return newSolid;
                } else {
                    newSolid = createSolid(thisComp, "solid", a, b, c, d, e, f);
                    newSolid.name = "solid_" + (thisComp.numLayers).toString();
                    return newSolid;
                }
        }
    }
};

function createSolid(comp, name, x, y, z, w, h, dur) {
    this.obb = new Properties();

    this.shape = comp.layers.addSolid(currFillColor, name, w, h, 1, dur);
    this.obb.layer = this.shape;

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    setTransformPropertiesObject();

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

    this.obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    return this.obb;
}

/**
 * Draws a rectangle to the composition.
 * @cat AfterEffects
 * @subcat Shapes
 * @method rect
 * @param {Number} x x-coordinate of the rectangle
 * @param {Number} y y-coordinate of the rectangle
 * @param {Number} [z] z-coordinate of the rectangle
 * @param {Number} w Width of the rectangle
 * @param {Number} h Height of the rectangle
 * @param {Number} [roundness] Roundness value of the rectangle
 * @return {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, size, fill, stroke, weight, round].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created ShapeLayer reference.
 * 
 * <h4> Syntax: </h4>
 * var rect = b.rect(x, y);                             <br>
 * var rect = b.rect(x, y, w, h);                       <br>
 * var rect = b.rect(x, y, w, h, roundness);            <br>
 * var rect = b.rect(x, y, z);                          <br>
 * var rect = b.rect(x, y, z, w, h);                    <br>
 * var rect = b.rect(x, y, z, w, h, roundness);         <br>
 */
pub.rect = function (x, y, z, w, h, round) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4],
        f = arguments[5];

    var shape;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 2:
                shape = drawRectShape(thisComp, a, b, 0, pub.width, pub.height, 0);
                return shape;
            case 4:
                shape = drawRectShape(thisComp, a, b, 0, c, d, 0);
                return shape;
            case 5:
                shape = drawRectShape(thisComp, a, b, 0, c, d, e);
                return shape;
        }
    } else {
        switch (arguments.length) {
            case 3:
                shape = drawRectShape(thisComp, a, b, c, pub.width, pub.height, 0);
                return shape;
            case 5:
                shape = drawRectShape(thisComp, a, b, c, d, e, 0);
                return shape;
            case 6:
                shape = drawRectShape(thisComp, a, b, c, d, e, f);
                return shape;
        }
    }
};

function drawRectShape(comp, x, y, z, w, h, round) {
    // Build Shape
    this.obb = new Properties();

    this.shape = comp.layers.addShape();
    this.obb.layer = shape;

    if (curr3DMode) {
        shape.threeDLayer = true;
    }

    this.shapeGroup = this.shape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");

    if (currStrokeState) {
        createStroke();
    }

    if (currFillState) {
        createFill();
    }

    setTransformPropertiesObject();
    setStylePropertiesObject();
    this.obb.size = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Rect").property("ADBE Vector Rect Size");
    this.obb.round = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Rect").property("ADBE Vector Rect Roundness");

    // Set properties values on shape through Properies object
    this.obb.size.setValue([w, h]);
    this.obb.round.setValue(round);

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

    this.obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    return this.obb;
}

/**
 * Draws an ellipse to the composition.
 * @cat AfterEffects
 * @subcat Shapes
 * @method ellipse
 * @param {Number} x x-coordinate of the ellipse
 * @param {Number} y y-coordinate of the ellipse
 * @param {Number} [z] z-coordinate of the ellipse
 * @param {Number} w Width of the ellipse
 * @param {Number} h Height of the ellipse
 * @return {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, size, fill, stroke, weight].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created ShapeLayer reference.
 * 
 * <h4> Syntax: </h4>
 * var ellipse = b.ellipse(x, y);                             <br>
 * var ellipse = b.ellipse(x, y, w, h);                       <br>
 * var ellipse = b.ellipse(x, y, z);                          <br>
 * var ellipse = b.ellipse(x, y, z, w, h);                    <br>
 */
pub.ellipse = function (x, y, z, w, h) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4];

    var shape;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 2:
                shape = drawEllipseShape(thisComp, a, b, 0, pub.width, pub.height);
                return shape;
            case 4:
                shape = drawEllipseShape(thisComp, a, b, 0, c, d);
                return shape;
        }
    } else {
        switch (arguments.length) {
            case 3:
                shape = drawEllipseShape(thisComp, a, b, c, pub.width, pub.height);
                return shape;
            case 5:
                shape = drawEllipseShape(thisComp, a, b, c, d, e);
                return shape;
        }
    }
};

function drawEllipseShape(comp, x, y, z, w, h) {
    // Build Shape
    this.obb = new Properties();

    this.shape = comp.layers.addShape();
    this.obb.layer = shape;

    if (curr3DMode) {
        shape.threeDLayer = true;
    }

    this.shapeGroup = this.shape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");

    if (currStrokeState) {
        createStroke();
    }

    if (currFillState) {
        createFill();
    }

    setTransformPropertiesObject();
    setStylePropertiesObject();
    this.obb.size = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Ellipse").property("ADBE Vector Ellipse Size");

    // Set properties values on shape through Properies object
    this.obb.size.setValue([w, h]);

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

    this.obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    return this.obb;
};

/**
 * Draws an n-gon to the composition.
 * @cat AfterEffects
 * @subcat Shapes
 * @method polygon
 * @param {Number} x x-coordinate of the polygon 
 * @param {Number} y y-coordinate of the polygon
 * @param {Number} [z] z-coordinate of the polygon 
 * @param {Number} r Radius of the polygon 
 * @param {Number} n Number of sides
 * @return {Properties} [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, points, radius, fill, stroke, weight].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created ShapeLayer reference.
 * 
 * <h4> Syntax: </h4>
 * var polygon = b.polygon(x, y);                             <br>
 * var polygon = b.polygon(x, y, r, n);                       <br>
 * var polygon = b.ellipse(x, y, z);                          <br>
 */
pub.polygon = function (x, y, z, r, n) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4];

    var shape;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 2:
                shape = drawPolygonShape(thisComp, a, b, 0, pub.width, pub.height);
                return shape;
            case 4:
                shape = drawPolygonShape(thisComp, a, b, 0, c, d);
                return shape;
        }
    } else {
        switch (arguments.length) {
            case 3:
                shape = drawPolygonShape(thisComp, a, b, c, pub.width, pub.height);
                return shape;
            case 5:
                shape = drawPolygonShape(thisComp, a, b, c, d, e);
                return shape;
        }
    }
};

function drawPolygonShape(comp, x, y, z, r, n) {
    // Build Shape  
    this.obb = new Properties();

    this.shape = comp.layers.addShape();
    this.obb.layer = shape;
    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    this.shapeGroup = this.shape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var gon = this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    gon.property("ADBE Vector Star Type").setValue(2);

    if (currStrokeState) {
        createStroke();
    }

    if (currFillState) {
        createFill();
    }

    setTransformPropertiesObject();
    setStylePropertiesObject();
    this.obb.points = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Star").property("ADBE Vector Star Points");
    this.obb.radius = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Star").property("ADBE Vector Star Outer Radius");
    this.obb.roundness = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Star").property("ADBE Vector Star Outer Roundess");

    // Set properties values on shape through Properies object
    this.obb.points.setValue(n);
    this.obb.radius.setValue(r);

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

    this.obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    return this.obb;
};

/**
 * Draws a line to the composition (currently only 2D mode supported).
 * @cat AfterEffects
 * @subcat Shapes
 * @method line
 * @param {Number} x1 x-coordinate of the first point 
 * @param {Number} y1 y-coordinate of the first point
 * @param {Number} x2 x-coordinate of the second point
 * @param {Number} y2 y-coordinate of the second point
 * @return {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, stroke, weight].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created ShapeLayer reference.
 * @example
 * b.stroke(1);                                                            <br>
 * var line = b.line(0, 0, b.width, b.height);                             <br>
 */
pub.line = function (x1, y1, x2, y2) {
    var shape = drawLineShape(thisComp, x1, y1, x2, y2);
    return shape;
};

function drawLineShape(comp, x1, y1, x2, y2) {
    // Build Shape
    var fillState = currFillState;
    currFillState = false;
    this.obb = new Properties();

    this.shape = comp.layers.addShape();
    this.obb.layer = shape;

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    this.shapeGroup = this.shape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");

    createStroke();

    setTransformPropertiesObject();
    setStylePropertiesObject();
    this.obb.path = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Group").property("ADBE Vector Shape");

    // Set properties values on shape through Properies object
    var drawing = new Shape();
    drawing.vertices = [[x1, y1], [x2, y2]];
    this.obb.path.setValue(drawing);

    this.obb.stroke.setValue(currStrokeColor);

    this.obb.anchorpoint.setValue([x1, y1]);
    var cmx = currMatrix.position[0];
    var cmy = currMatrix.position[1];
    this.obb.position.setValue([cmx + x1, cmy + y1]);
    pub.anchor(this.obb.layer, currAnchorMode);

    this.obb.scale.setValue(currMatrix.scale);
    if (curr3DMode) {
        this.obb.xrotation.setValue(currMatrix.rotation3d[0]);
        this.obb.yrotation.setValue(currMatrix.rotation3d[1]);
        this.obb.zrotation.setValue(currMatrix.rotation3d[2]);
    } else {
        this.obb.rotation.setValue(currMatrix.rotation);
    }

    this.obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    currFillState = fillState;

    return this.obb;
};

/**
 * Draws a shape to the composition.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shape
 * @param {Number[][]} vertices Shape vertices [x, y] array
 * @param {Number[][]} [inTangents] In tangents [x, y] array
 * @param {Number[][]} [outTangents] Out tangents [x, y] array
 * @param {Boolean} closed Open or closed shape
 * @return {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, path, fill, stroke, weight].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created ShapeLayer reference.
 * @example
 * 
 * b.background(0);
 *   
 * var points = [];
 * var inTan = [];
 * var outTan = [];
 *   
 * for (var i=0; i<20; i++) {
 *    var x = b.random(b.width);
 *    var y = b.random(b.height);
 *    points.push([x,y]);
 *    inTan.push([x-5, y-5]);
 *    outTan.push([x+5, y+5]);
 * }
 *   
 * b.stroke(1);
 * var mask = b.shape(points, inTan, outTan, false);
 * b.printProperties(mask);
 */
pub.shape = function (vertices, inTangents, outTangents, closed) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3];

    var shape;
    switch (arguments.length) {
        case 1:
            shape = drawShape(thisComp, a, null, null, false);
            return shape;
        case 2:
            shape = drawShape(thisComp, a, null, null, b);
            return shape;
        case 3:
            shape = drawShape(thisComp, a, b, c, false);
            return shape;
        case 4:
            shape = drawShape(thisComp, a, b, c, d);
            return shape;
    }
};

function drawShape(comp, v, inTangents, outTangents, closed) {
    // Build Shape
    this.obb = new Properties();

    this.shape = comp.layers.addShape();
    this.obb.layer = shape;

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    this.shapeGroup = this.shape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");

    if (currStrokeState) {
        createStroke();
    }

    if (currFillState) {
        createFill();
    }

    setTransformPropertiesObject();
    setStylePropertiesObject();
    this.obb.path = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Shape - Group").property("ADBE Vector Shape");

    // Set properties values on shape through Properies object
    var drawing = new Shape();
    drawing.vertices = doTranslate(v);
    if (inTangents !== null) {
        drawing.inTangents = doTranslate(inTangents);
        drawing.outTangents = doTranslate(outTangents);
    }
    drawing.closed = closed;

    this.obb.path.setValue(drawing);

    this.obb.position.setValue([0, 0, 0]);

    pub.anchor(this.obb.layer, currAnchorMode);

    this.obb.scale.setValue(currMatrix.scale);

    if (curr3DMode) {
        this.obb.xrotation.setValue(currMatrix.rotation3d[0]);
        this.obb.yrotation.setValue(currMatrix.rotation3d[1]);
        this.obb.zrotation.setValue(currMatrix.rotation3d[2]);
    } else {
        this.obb.rotation.setValue(currMatrix.rotation);
    }

    this.obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    if (pub.INACTIVE) {
        this.obb.layer.enabled = false;
    }

    return this.obb;
};

var doTranslate = function (points) {
    var newPoints = [];
    if (points[0].length === 2) {
        for (var i = 0; i < points.length; i++) {
            var temp = [];
            temp[0] = points[i][0] + currMatrix.position[0];
            temp[1] = points[i][1] + currMatrix.position[1];
            newPoints.push(temp);
        }
    } else {
        for (var i = 0; i < points.length; i++) {
            var temp = [];
            temp[0] = points[i][0] + currMatrix.position[0];
            temp[1] = points[i][1] + currMatrix.position[1];
            temp[2] = points[i][2] + currMatrix.position[2];
            newPoints.push(temp);
        }
    }
    return newPoints;
};

/**
 * Creates a new null object.
 * @cat AfterEffects
 * @subcat Shapes
 * @method null
 * @param {Number} [duration] Duration in seconds of null object
 * @return {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created ShapeLayer reference.
 * 
 * <h4> Syntax: </h4>
 * var null = b.null();
 * var null = b.null(duration);
 */
pub.nullLayer = function (duration) {
    var a = arguments[0],
        b = arguments[1];

    var nullObject;
    switch (arguments.length) {
        case 0:
            nullObject = createNullObject(thisComp, pub.getDuration());
            return nullObject;
        case 1:
            nullObject = createNullObject(thisComp, a);;
            return nullObject;
    }
}

function createNullObject(comp, duration) {
    this.obb = new Properties();
    this.shape = comp.layers.addNull(duration);
    this.obb.layer = this.shape;

    if (curr3DMode) {
        nullObject.threeDLayer = true;
    }
    setTransformPropertiesObject();

    return this.obb;
}















//BeginShape and EndShape implementation for AE
var vertix = [];
var inTan = [];
var outTan = [];
var currDrawingMode = 0;
var styleStack = [];
var Style = function (fs, f, ss, s, w) {
    this.fillState = fs;
    this.fill = f;
    this.strokeState = ss;
    this.stroke = s;
    this.weight = w;
};

/**
 * Using the beginShape() and endShape() functions allow creating more complex forms. beginShape() begins recording vertices for a shape and endShape() stops recording. 
 * The value of the kind parameter tells it which types of shapes to create from the provided vertices. With no mode specified, the shape can be any irregular polygon. 
 * The parameters available for beginShape() are LINES, TRIANGLES, QUADS. 
 * After calling the beginShape() function, a series of vertex(), itangent() or otangent() commands must follow. To stop drawing the shape, call endShape(). 
 * Each shape will be outlined with the current stroke color and filled with the fill color. 
 * @method beginShape
 * @param {NONE|LINES|QUADS|TRIANGLES|INVISIBLE} mode 
 */
pub.beginShape = function (mode) {
    styleStack = [];
    if (arguments.length === 1) {
        if (mode === pub.INACTIVE) {
            pub.INACTIVE = true;
            currDrawingMode = 0;
            return false;
        }
        currDrawingMode = mode;
    }
}

/**
 * The endShape() function is the companion to beginShape() and may only be called after beginShape(). 
 * When endshape() is called, all of image data defined since the previous call to beginShape() is written into the image buffer. 
 * The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).
 * @method endShape
 * @param {NONE|CLOSE} close 
 */
pub.endShape = function (close) {
    var isClosed = false;
    if (arguments.length === 1) {
        if (close === pub.CLOSE) {
            isClosed = true;
        }
    }
    lastShapes = [];
    var shape;
    switch (currDrawingMode) {
        case 0:
            if (inTan.length > 0 && outTan.length > 0) {
                shape = drawShape(thisComp, vertix, inTan, outTan, isClosed);
            } else if (inTan.length > 0) {
                shape = drawShape(thisComp, vertix, inTan, inTan, isClosed);
            } else {
                shape = drawShape(thisComp, vertix, null, null, isClosed);
            }
            break;
        case 1:
            if (vertix.length % 2 === 0) {
                shape = createShapeWithLines(thisComp, vertix, null, null, isClosed, 2);
                break;
            } else {
                error("Bad number of vertex points for this drawing mode");
                break;
            }

        case 2:
            if (vertix.length % 4 === 0) {
                shape = createShapeWithLines(thisComp, vertix, null, null, isClosed, 4);
                break;
            } else {
                error("Bad number of vertex points for this drawing mode");
                break;
            }

        case 3:
            if (vertix.length % 3 === 0) {
                shape = createShapeWithLines(thisComp, vertix, null, null, isClosed, 3);
                break;
            } else {
                error("Bad number of vertex points for this drawing mode");
                break;
            }
    }
    vertix = [];
    inTan = [];
    outTan = [];
    pub.INACTIVE = false;
    return shape;
};

/**
 * All shapes are constructed by connecting a series of vertices. vertex() is used to specify the vertex coordinates for lines, triangles, quads, and polygons. 
 * It is used exclusively within the beginShape() and endShape() functions. 
 * @method vertex
 * @param {Number} x x-coordinate of the vertex
 * @param {Number} y y-coordinate of the vertex
 */
pub.vertex = function (x, y) {
    vertix.push([x, y]);
}

/**
 * Define in tangents for shape. Transformation space is relative to the vertex() defined.
 * @method itangent
 * @param {Number} x  x-coordinate of the vertex
 * @param {Number} y  y-coordinate of the vertex
 */
pub.itangent = function (x, y) {
    inTan.push([x, y]);
}

/**
 * Define out tangents for shape. Transformation space is relative to the vertex() defined.
 * @method otangent
 * @param {Number} x  x-coordinate of the vertex 
 * @param {Number} y  y-coordinate of the vertex 
 */
pub.otangent = function (x, y) {
    outTan.push([x, y]);
}


var lastShapes = [];

function createShapeWithLines(comp, v, inTangents, outTangents, closed, inc) {
    this.obb = new Properties();

    this.shape = comp.layers.addShape();
    this.obb.layer = shape;

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    var generalGroup = this.shape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");

    if (inc === 2) {
        var group = 1;
        for (var i = 0; i < v.length; i += inc) {
            this.lastShapesProps = new Properties();

            var shapeGroup = generalGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Group");
            var line = shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");

            var drawing = new Shape();
            var cmx = currMatrix.position[0];
            var cmy = currMatrix.position[1];
            drawing.vertices = [cmx + v[i], cmy + v[i + 1]];
            line.property("ADBE Vector Shape").setValue(drawing);

            createStroke();
        }
    }

    if (inc === 4 || inc === 3) {
        for (var i = 0; i < v.length; i += inc) {
            this.lastShapesProps = new Properties();

            this.shapeGroup = generalGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Group");
            var line = this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
            var drawing = new Shape();
            drawing.vertices = doTranslate(v.slice(i, i + inc));
            line.property("ADBE Vector Shape").setValue(drawing);

            if (currStrokeState) {
                createStroke();
            }

            if (currFillState) {
                createFill();
            }
        }
    }

    buildLastShapeProperties(generalGroup);


    setTransformPropertiesObject();

    this.obb.position.setValue([0, 0, 0]);

    pub.anchor(this.obb.layer, currAnchorMode);

    if (matrixStack.length > 0) {
        var cmx = currMatrix.position[0];
        var cmy = currMatrix.position[1];
        var cmz = currMatrix.position[2];
        this.obb.position.setValue([cmx, cmy, cmz]);
    }

    this.obb.scale.setValue(currMatrix.scale);

    if (curr3DMode) {
        this.obb.xrotation.setValue(currMatrix.rotation3d[0]);
        this.obb.yrotation.setValue(currMatrix.rotation3d[1]);
        this.obb.zrotation.setValue(currMatrix.rotation3d[2]);
    } else {
        this.obb.rotation.setValue(currMatrix.rotation);
    }

    this.obb.opacity.setValue(currOpacity);

    this.shape.blendingMode = currBlendMode;

    return this.obb;
}

function buildLastShapeProperties(group) {
    var allGroup = group.property("ADBE Vectors Group");
    for (var i = 0; i < allGroup.numProperties; i++) {
        var shapeProps = new Properties();
        var interiorGroup = allGroup.property(i + 1).property("ADBE Vectors Group");
        checkStyleStack(i);

        if (currStrokeState) {
            shapeProps.stroke = interiorGroup.property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Color");
            shapeProps.weight = interiorGroup.property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Width");
            shapeProps.linecap = interiorGroup.property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Line Cap");
            shapeProps.linejoin = interiorGroup.property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Line Join");
            shapeProps.miterlimit = interiorGroup.property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Miter Limit");
            shapeProps.stroke.setValue(currStrokeColor);
            shapeProps.weight.setValue(currStrokeWeight);
        }

        if (currFillState) {
            shapeProps.fill = interiorGroup.property("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color");
            shapeProps.fill.setValue(currFillColor);
        }

        var transform = allGroup.property(i + 1).property("ADBE Vector Transform Group");
        for (var k = 0; k < transform.numProperties; k++) {
            shapeProps[transform.property(k + 1).name.toLowerCase().replace(/\s/g, '')] = transform.property(k + 1);
        }

        lastShapes.push(shapeProps);
    }
}

function checkStyleStack(group) {
    if (group < styleStack.length) {
        currFillState = styleStack[group].fillState;
        currFillColor = styleStack[group].fill;
        currStrokeState = styleStack[group].strokeState;
        currStrokeColor = styleStack[group].stroke;
        currStrokeWeight = styleStack[group].weight;
    }
}

function setLastShapeStyles() {
    for (var i = 0; i < lastShapes.length; i++) {
        checkStyleStack(i);
        if (currStrokeState) {
            lastShapes[i].stroke.setValue(currStrokeColor);
            lastShapes[i].weight.setValue(currStrokeWeight);
        }

        if (currFillState) {
            lastShapes[i].fill.setValue(currFillColor);
        }
    }
}

/**
 * Return individual properties of the last shape drawn with beginShape() and endShape().
 * @method lastShape
 * @return {Properties} Array of Properties for individual shapes;
 */
pub.lastShape = function () {
    return lastShapes;
}






//Creating stroke and fill 
function createStroke() {
    this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
};

function createFill() {
    this.shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
};

// Get all transform properties for shapes
function setTransformPropertiesObject() {
    var transform = this.shape.property("ADBE Transform Group");
    for (var i = 0; i < transform.numProperties - 1; i++) {
        this.obb[transform.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = transform.property(i + 1);
    }
}

//Recover properties of created shape layer
function setStylePropertiesObject() {
    if (currStrokeState) {
        this.obb.stroke = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Color");
        this.obb.weight = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Width");
        this.obb.stroke.setValue(currStrokeColor);
        this.obb.weight.setValue(currStrokeWeight);
    }

    if (currFillState) {
        this.obb.fill = this.shapeGroup.property("ADBE Vectors Group").property("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color");
        this.obb.fill.setValue(currFillColor);
    }
}



































//______________________________________________________________________________________________________________________
// ShapeLayer FX

/**
 * Add Pucker & Bloat effect to ShapeLayer.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shapePuckerBloat
 * @param {ShapeLayer} shape ShapeLayer or Properties object to add effect to
 * @return {Properties} Properties object with attributes [amount].
 * @example
 * var shape = b.rect(b.width / 2, b.height / 2, 400, 400);         <br>
 * var fx = b.shapePuckerBloat(shape.layer);                        <br>
 */
pub.shapePuckerBloat = function (rShape) {
    var shape;
    if (validateLayer(rShape, ShapeLayer)) {
        shape = rShape;
    } else {
        shape = rShape.layer;
    }

    var obb = new Properties();
    var pb = shape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - PB");
    obb.amount = pb.property("ADBE Vector PuckerBloat Amount");

    return obb;
};

/**
 * Add Repeater effects to ShapeLayer.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shapeRepeater
 * @param {ShapeLayer} shape ShapeLayer or Properties object to add effect to
 * @return {Properties} Properties object with attributes [copies, offset, composite, anchor, position, scale, rotation, startopacity, endopacity].
 * @example
 * var shape = b.rect(b.width / 2, b.height / 2, 400, 400);         <br>
 * var fx = b.shapeRepeater(shape.layer);                           <br>
 */
pub.shapeRepeater = function (rShape) {
    var shape;
    if (validateLayer(rShape, ShapeLayer)) {
        shape = rShape;
    } else {
        shape = rShape.layer;
    }

    var obb = new Properties();
    var repeater = shape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
    obb.copies = repeater.property("ADBE Vector Repeater Copies");
    obb.offset = repeater.property("ADBE Vector Repeater Offset");
    obb.composite = repeater.property("ADBE Vector Repeater Order");

    var transform = repeater.property("ADBE Vector Repeater Transform");
    for (var i = 0; i < transform.numProperties; i++) {
        obb[transform.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = transform.property(i + 1);
    }

    return obb;
};

/**
 * Add Trim Paths effect to ShapeLayer.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shapeTrimPaths
 * @param {ShapeLayer} shape ShapeLayer or Properties object to add effect to
 * @return {Properties} Properties object with attributes [start, end, offset].
 * @example
 * var shape = b.rect(b.width / 2, b.height / 2, 400, 400);         <br>
 * var fx = b.shapeTrimPaths(shape.layer);                          <br>
 */
pub.shapeTrimPaths = function (rShape) {
    var shape;
    if (validateLayer(rShape, ShapeLayer)) {
        shape = rShape;
    } else {
        shape = rShape.layer;
    }

    var obb = new Properties();
    var trim = shape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    obb.start = trim.property("ADBE Vector Trim Start");
    obb.end = trim.property("ADBE Vector Trim End");
    obb.offset = trim.property("ADBE Vector Trim Offset");

    return obb;
};

/**
 * Add Twist effect to ShapeLayer.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shapeTwist
 * @param {ShapeLayer} shape ShapeLayer or Properties object to add effect to
 * @return {Properties} Properties object with attributes [angle, center].
 * @example
 * var shape = b.rect(b.width / 2, b.height / 2, 400, 400);         <br>
 * var fx = b.shapeTwist(shape.layer);                              <br>
 */
pub.shapeTwist = function (rShape) {
    var shape;
    if (validateLayer(rShape, ShapeLayer)) {
        shape = rShape;
    } else {
        shape = rShape.layer;
    }

    var obb = new Properties();
    var twist = shape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Twist");
    obb.angle = twist.property("ADBE Vector Twist Angle");
    obb.center = twist.property("ADBE Vector Twist Center");

    return obb;
};

/**
 * Add Wiggle Path effect to ShapeLayer.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shapeWigglePaths
 * @param {ShapeLayer} shape ShapeLayer or Properties object to add effect to
 * @return {Properties} Properties object with attributes [size, detail, points, wiggles, correlation, temporalphase, spatialphase, seed].
 * @example
 * var shape = b.rect(b.width / 2, b.height / 2, 400, 400);         <br>
 * var fx = b.shapeWigglePaths(shape.layer);                        <br>
 */
pub.shapeWigglePaths = function (rShape) {
    var shape;
    if (validateLayer(rShape, ShapeLayer)) {
        shape = rShape;
    } else {
        shape = rShape.layer;
    }

    var obb = new Properties();
    var wiggle = shape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Roughen");
    obb.size = wiggle.property("ADBE Vector Roughen Size");
    obb.detail = wiggle.property("ADBE Vector Roughen Detail");
    obb.points = wiggle.property("ADBE Vector Roughen Points");
    obb.wiggles = wiggle.property("ADBE Vector Temporal Freq");
    obb.correlation = wiggle.property("ADBE Vector Correlation");
    obb.temporalphase = wiggle.property("ADBE Vector Temporal Phase");
    obb.spatialphase = wiggle.property("ADBE Vector Spatial Phase");
    obb.seed = wiggle.property("ADBE Vector Random Seed");

    return obb;
};


/**
 * Add Wiggle Transform effect to ShapeLayer.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shapeWiggleTransform
 * @param {ShapeLayer} shape ShapeLayer or Properties object to add effect to
 * @return {Properties} Properties object with attributes [wiggles, correlation, temporalphase, spatialphase, seed, anchor, position, scale, rotation].
 * @example
 * var shape = b.rect(b.width / 2, b.height / 2, 400, 400);         <br>
 * var fx = b.shapeWiggleTransform(shape.layer);                    <br>
 */
pub.shapeWiggleTransform = function (rShape) {
    var shape;
    if (validateLayer(rShape, ShapeLayer)) {
        shape = rShape;
    } else {
        shape = rShape.layer;
    }

    var obb = new Properties();
    var wiggle = shape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Wiggler");
    obb.wiggles = wiggle.property("ADBE Vector Xform Temporal Freq");
    obb.correlation = wiggle.property("ADBE Vector Correlation");
    obb.temporalphase = wiggle.property("ADBE Vector Temporal Phase");
    obb.spatialphase = wiggle.property("ADBE Vector Spatial Phase");
    obb.seed = wiggle.property("ADBE Vector Random Seed");

    var transform = wiggle.property("ADBE Vector Wiggler Transform");
    for (var i = 0; i < transform.numProperties; i++) {
        obb[transform.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = transform.property(i + 1);
    }

    return obb;
};

/**
 * Add Zig Zag effect to ShapeLayer.
 * @cat AfterEffects
 * @subcat Shapes
 * @method shapeZigZag
 * @param {ShapeLayer} shape ShapeLayer or Properties object to add effect to
 * @return {Properties} Properties object with attributes [size, ridges, points].
 * @example
 * var shape = b.rect(b.width / 2, b.height / 2, 400, 400);         <br>
 * var fx = b.shapeZigZag(shape.layer);                             <br>
 */
pub.shapeZigZag = function (rShape) {
    var shape;
    if (validateLayer(rShape, ShapeLayer)) {
        shape = rShape;
    } else {
        shape = rShape.layer;
    }

    var obb = new Properties();
    var zz = shape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Zigzag");
    obb.size = zz.property("ADBE Vector Zigzag Size");
    obb.ridges = zz.property("ADBE Vector Zigzag Detail");
    obb.points = zz.property("ADBE Vector Zigzag Points");

    return obb;
};



//Has not yet being implemented on AE API 
// pub.paint = function(points) {
//     this.obb = new Properties();
//     var solid = pub.solid();
// 	var paint = solid.layer.effect.addProperty("ADBE Paint");
//     var brush = paint.property("ADBE Paint Group").addProperty("ADBE Paint Atom");

//     this.obb.layer = solid.layer;
//     this.obb.path = brush.property("ADBE Paint Shape");

//     var shape = new Shape();
//     shape.vertices = points;
//     // this.obb.path.setValue(shape);
//     solid.layer.property("ADBE Effect Parade").property("ADBE Paint").property("ADBE Paint Group").property("ADBE Paint Atom").property("ADBE Paint Shape").setValue(shape);

//     var strokeProps = brush.property("ADBE Paint Properties");
//     for (var i = 0; i < strokeProps.numProperties - 1; i++) {
//         this.obb[strokeProps.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = strokeProps.property(i + 1);
//     }

//     return this.obb;
// };