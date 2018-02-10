//Transformation stack
var AEMatrix = function () {
    this.position = [0, 0, 0];
    this.scale = [100, 100, 100];
    this.rotation = 0;
    this.rotation3d = [0, 0, 0];
}

AEMatrix.prototype = {
    set: function (matrix) {
        this.position = matrix.position;
        this.scale = matrix.scale;
        this.rotation = matrix.rotation;
    },

    reset: function () {
        this.position = [0, 0, 0];
        this.scale = [0, 0, 0];
        this.rotation = 0;
    },

    translate: function (x, y, z) {
        this.position += [x, y, z];
    },

    scale: function (x, y, z) {
        var newScale = [];
        newScale[0] = (x > this.scale[0]) ? this.scale[0] + x : this.scale[0] - x;
        newScale[1] = (y > this.scale[1]) ? this.scale[1] + y : this.scale[1] - y;
        newScale[2] = (z > this.scale[2]) ? this.scale[2] + z : this.scale[2] - z;
        this.scale = newScale;
    },

    rotate: function (a) {
        if (typeof a === Array) {
            this.rotation3d += a;
        } else {
            this.rotation += a;
        }
    }
}

/**
 * Pushes the current transformation matrix onto the matrix stack. Understanding pushMatrix() and popMatrix() requires understanding the concept of a matrix stack. The pushMatrix() function saves the current coordinate system to the stack and popMatrix() restores the prior coordinate system. pushMatrix() and popMatrix() are used in conjuction with the other transformation methods and may be embedded to control the scope of the transformations.
 *
 * @cat AfterEffects
 * @subcat Transformation
 * @method pushMatrix
 */
pub.pushMatrix = function () {
    var temp = new AEMatrix();
    temp.position = currMatrix.position;
    temp.scale = currMatrix.scale;
    temp.rotation = currMatrix.rotation;
    matrixStack.push(temp);
};

/**
 * Pops the current transformation matrix off the matrix stack. Understanding pushing and popping requires understanding the concept of a matrix stack. The pushMatrix() function saves the current coordinate system to the stack and popMatrix() restores the prior coordinate system. pushMatrix() and popMatrix() are used in conjuction with the other transformation methods and may be embedded to control the scope of the transformations.
 *
 * @cat AfterEffects
 * @subcat Transformation
 * @method popMatrix
 */
pub.popMatrix = function () {
    if (matrixStack.length > 0) {
        currMatrix.set(matrixStack.pop());
    } else {
        error("b.popMatrix(), missing a pushMatrix() to go with that popMatrix()");
    }
};

/**
 * Replaces the current matrix with the identity matrix.
 *
 * @cat AfterEffects
 * @subcat Transformation
 * @method resetMatrix
 */
pub.resetMatrix = function () {
    matrixStack = [];
    currMatrix = new AEMatrix();
};

/**
 * Specifies an amount to displace objects within the page. The x parameter specifies left/right translation, the y parameter specifies up/down translation. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). This function can be further controlled by the pushMatrix() and popMatrix().
 *
 * @cat AfterEffects
 * @subcat Transformation
 * @method translate
 * @param {Number} tx The amount of offset on the X axis. 
 * @param {Number} ty The amount of offset on the Y axis.
 */
pub.translate = function (tx, ty, tz) {
    if (typeof arguments[0] === 'undefined' || typeof arguments[1] === 'undefined') error("Please provide x and y coordinates for translation.");
    if (arguments.length == 2) {
        currMatrix.translate(tx, ty, 0);
    } else {
        currMatrix.translate(tx, ty, tz);
    }
};

/**
 * Increasing and decreasing the size of an object by expanding and contracting vertices. Scale values are specified as decimal percentages. The function call scale(2.0) increases the dimension of a shape by 200%. Objects always scale from their relative origin to the coordinate system. Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), the transformation is reset when the loop begins again. This function can be further controlled by pushMatrix() and popMatrix().
 * If only one parameter is given, it is applied on X and Y axis. 
 *
 * @cat AfterEffects
 * @subcat Transformation
 * @method scale
 * @param {Number} scaleX The amount to scale the X axis.
 * @param {Number} scaleY The amount to scale the Y axis.
 */
pub.scale = function (scaleX, scaleY, scaleY) {
    if (typeof arguments[0] != 'number' || (arguments.length === 2 && typeof arguments[1] != 'number')) error("Please provide valid x and/or y factors for scaling.");
    if (arguments.length === 2) {
        currMatrix.scale(scaleX, scaleY, 0);
    } else if (arguments.length === 1) {
        currMatrix.scale(scaleX, scaleX, 0);
    } else if (arguments.length === 3) {
        currMatrix.scale(scaleX, scaleY, scaleY);
    }
};

/**
 * Rotates an object the amount specified by the angle parameter. Angles should be specified in degrees (values from 0 to 360). 
 * Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction with 0 degrees being up and HALF_PI being to the right etc. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling rotate(PI/2) and then rotate(PI/2) is the same as rotate(PI). If rotate() is called within the draw(), the transformation is reset when the loop begins again. Technically, rotate() multiplies the current transformation matrix by a rotation matrix. This function can be further controlled by the pushMatrix() and popMatrix().
 *
 * @cat AfterEffects
 * @subcat Transformation
 * @method rotate
 * @param {Number} angle The angle specified in radians
 */
pub.rotate = function (angle) {
    if (typeof arguments[0] === 'undefined') error("Please provide an angle for rotation.");
    currMatrix.rotate(angle);
};



//For debugging purposes
pub.printCurrMatrix = function () {
    pub.println(currMatrix.position);
};


pub.printCurrStyle = function () {
    return styleStack;
};