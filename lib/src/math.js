
// ----------------------------------------
// Math

var Vector = pub.Vector = function () {

    /**
     * A class to describe a two or three dimensional vector. This datatype stores two or three variables that are commonly used as a position, velocity, and/or acceleration. Technically, position is a point and velocity and acceleration are vectors, but this is often simplified to consider all three as vectors. For example, if you consider a rectangle moving across the screen, at any given instant it has a position (the object's location, expressed as a point.), a velocity (the rate at which the object's position changes per time unit, expressed as a vector), and acceleration (the rate at which the object's velocity changes per time unit, expressed as a vector). Since vectors represent groupings of values, we cannot simply use traditional addition/multiplication/etc. Instead, we'll need to do some "vector" math, which is made easy by the methods inside the Vector class.
     *
     * Constructor of Vector, can be two- or three-dimensional.
     * 
     * @constructor
     * @cat Data
     * @subcat Vector
     * @method Vector
     * @param {Number} x
     * @param {Number} y
     * @param {Number} [z]
     */
    function Vector(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    /**
     * Static function. Calculates the Euclidean distance between two points (considering a point as a vector object).
     * Is meant to be called "static" i.e. Vector.dist(v1, v2);
     * @cat Data
     * @subcat Vector
     * @method Vector.dist
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The distance
     */
    Vector.dist = function (v1, v2) {
        return v1.dist(v2);
    };

    /**
     * Static function. Calculates the dot product of two vectors.
     * Is meant to be called "static" i.e. Vector.dot(v1, v2);
     * @method Vector.dot
     * @cat Data
     * @subcat Vector
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The dot product
     */
    Vector.dot = function (v1, v2) {
        return v1.dot(v2);
    };

    /**
     * Static function. Calculates the cross product of two vectors.
     * Is meant to be called "static" i.e. Vector.cross(v1, v2);
     * @method Vector.cross
     * @cat Data
     * @subcat Vector
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The cross product
     */
    Vector.cross = function (v1, v2) {
        return v1.cross(v2);
    };

    /**
     * Static function. Calculates the angle between two vectors.
     * Is meant to be called "static" i.e. Vector.angleBetween(v1, v2);
     * @method Vector.angleBetween
     * @cat Data
     * @subcat Vector
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The angle
     */
    Vector.angleBetween = function (v1, v2) {
        return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
    };

    Vector.prototype = {

        /**
         * Sets the x, y, and z component of the vector using three separate variables, the data from a Vector, or the values from a float array.
         * @method Vector.set
         * @cat Data
         * @subcat Vector
         * @param {Number|Array|Vector} v Either a vector, array or x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         */
        set: function (v, y, z) {
            if (arguments.length === 1) this.set(v.x || v[0] || 0, v.y || v[1] || 0, v.z || v[2] || 0);
            else {
                this.x = v;
                this.y = y;
                this.z = z;
            }
        },
        /**
         * Gets a copy of the vector, returns a Vector object.
         * @method Vector.get
         * @cat Data
         * @subcat Vector
         * @return {Vector} A copy of the vector
         */
        get: function () {
            return new Vector(this.x, this.y, this.z);
        },
        /**
         * Calculates the magnitude (length) of the vector and returns the result as a float
         * @method Vector.mag
         * @cat Data
         * @subcat Vector
         * @return {Number} The length
         */
        mag: function () {
            var x = this.x,
                y = this.y,
                z = this.z;
            return Math.sqrt(x * x + y * y + z * z);
        },
        /**
         * Adds x, y, and z components to a vector, adds one vector to another.
         * @method Vector.add
         * @cat Data
         * @subcat Vector
         * @param {Vector|Number} v Either a full vector or an x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         */
        add: function (v, y, z) {
            if (arguments.length === 1) {
                this.x += v.x;
                this.y += v.y;
                this.z += v.z;
            } else {
                this.x += v;
                this.y += y;
                this.z += z;
            }
        },
        /**
         * Substract x, y, and z components or a full vector from this vector
         * @method Vector.sub
         * @cat Data
         * @subcat Vector
         * @param {Vector|Number} v Either a full vector or an x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         */
        sub: function (v, y, z) {
            if (arguments.length === 1) {
                this.x -= v.x;
                this.y -= v.y;
                this.z -= v.z;
            } else {
                this.x -= v;
                this.y -= y;
                this.z -= z;
            }
        },
        /**
         * Multiplies this vector with x, y, and z components or another vector.
         * @method Vector.mult
         * @cat Data
         * @subcat Vector
         * @param {Vector|Number} v Either a full vector or an x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         */
        mult: function (v) {
            if (typeof v === "number") {
                this.x *= v;
                this.y *= v;
                this.z *= v;
            } else {
                this.x *= v.x;
                this.y *= v.y;
                this.z *= v.z;
            }
        },
        /**
         * Divides this vector through x, y, and z components or another vector.
         * @method Vector.div
         * @cat Data
         * @subcat Vector
         * @param {Vector|Number} v Either a full vector or an x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         */
        div: function (v) {
            if (typeof v === "number") {
                this.x /= v;
                this.y /= v;
                this.z /= v;
            } else {
                this.x /= v.x;
                this.y /= v.y;
                this.z /= v.z;
            }
        },
        /**
         * Calculates the distance from this vector to another as x, y, and z components or full vector.
         * @method Vector.dist
         * @cat Data
         * @subcat Vector
         * @param {Vector|Number} v Either a full vector or an x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         * @return {Number} The distance
         */
        dist: function (v) {
            var dx = this.x - v.x,
                dy = this.y - v.y,
                dz = this.z - v.z;
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        },
        /**
         * Calculates the dot product from this vector to another as x, y, and z components or full vector.
         * @method Vector.dot
         * @cat Data
         * @subcat Vector
         * @param {Vector|Number} v Either a full vector or an x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         * @return {Number} The dot product
         */
        dot: function (v, y, z) {
            if (arguments.length === 1) return this.x * v.x + this.y * v.y + this.z * v.z;
            return this.x * v + this.y * y + this.z * z;
        },
        /**
         * Calculates the cross product from this vector to another as x, y, and z components or full vector.
         * @method Vector.cross
         * @cat Data
         * @subcat Vector
         * @param {Vector|Number} v Either a full vector or an x component
         * @param {Number} [y] The y component
         * @param {Number} [z] The z component
         * @return {Number} The cross product
         */
        cross: function (v) {
            var x = this.x,
                y = this.y,
                z = this.z;
            return new Vector(y * v.z - v.y * z, z * v.x - v.z * x, x * v.y - v.x * y);
        },
        /**
         * Normalizes the length of this vector to 1.
         * @cat Data
         * @subcat Vector
         * @method Vector.normalize
         */
        normalize: function () {
            var m = this.mag();
            if (m > 0) this.div(m);
        },
        /**
         * Normalizes the length of this vector to the given parameter.
         * @method Vector.limit
         * @cat Data
         * @subcat Vector
         * @param {Number} high The value to scale to.
         */
        limit: function (high) {
            if (this.mag() > high) {
                this.normalize();
                this.mult(high);
            }
        },
        /**
         * The 2D orientation (heading) of this vector in radian.
         * @method Vector.heading
         * @cat Data
         * @subcat Vector
         * @return {Number} A radian angle value
         */
        heading: function () {
            return -Math.atan2(-this.y, this.x);
        },
        /**
         * Returns data about this vector as a string.
         * @method Vector.toString
         * @cat Data
         * @subcat Vector
         * @return {String} The x, y and z components as a string.
         */
        toString: function () {
            return "[" + this.x + ", " + this.y + ", " + this.z + "]";
        },
        /** 
         * Returns this vector as an array [x,y,z].
         * @method Vector.array
         * @cat Data
         * @subcat Vector
         * @return {Array} [x,y,z]
         */
        array: function () {
            return [this.x, this.y, this.z];
        }
    };

    function createVectorMethod(method) {
        return function (v1, v2) {
            var v = v1.get();
            v[method](v2);
            return v;
        };
    }
    for (var method in Vector.prototype) if (Vector.prototype.hasOwnProperty(method) && !Vector.hasOwnProperty(method)) Vector[method] = createVectorMethod(method);
    return Vector;
}();


// -- Calculation --  

/** 
 * Calculates the absolute value (magnitude) of a number. The absolute value of a number is always positive.
 *
 * @cat Math
 * @subcat Calculation
 * @method abs
 * @param {Number} val An arbitrary number
 * @return The absolute value of that number
 */
pub.abs = Math.abs;

/**
 * Calculates the closest int value that is greater than or equal to the value of the parameter. For example, ceil(9.03) returns the value 10.
 *
 * @cat Math
 * @subcat Calculation
 * @method ceil
 * @param {Number} val An arbitrary number
 * @return The next highest integer value
 */
pub.ceil = Math.ceil;

/**
 * Constrains a value to not exceed a maximum and minimum value.
 *
 * @cat Math
 * @subcat Calculation
 * @method constrain
 * @param {Number} aNumber the value to constrain
 * @param {Number} aMin minimum limit
 * @param {Number} aMax maximum limit
 * @return The constrained value
 */
pub.constrain = function (aNumber, aMin, aMax) {
    if (arguments.length !== 3) error("b.constrain(), wrong argument count.");
    if (aNumber <= aMin) return aMin;
    if (aNumber >= aMax) return aMax;
    return aNumber;
};

/**
 * Calculates the distance between two points.
 *
 * @cat Math
 * @subcat Calculation
 * @method dist
 * @param {Number} x1 the x-coordinate of the first point
 * @param {Number} y1 the y-coordinate of the first point
 * @param {Number} x2 the x-coordinate of the second point
 * @param {Number} y2 the y-coordinate of the second point
 * @return {Number} The distance
 */
pub.dist = function () {
    var dx, dy, dz;
    if (arguments.length === 4) {
        dx = arguments[0] - arguments[2];
        dy = arguments[1] - arguments[3];
        return Math.sqrt(dx * dx + dy * dy);
    } else {
        error("b.dist(), wrong argument count.");
    }
};

/**
 * Returns Euler's number e (2.71828...) raised to the power of the value parameter.
 * 
 * @cat Math
 * @subcat Calculation
 * @method exp
 * @param {Number} a value
 * @return {Number}
 */
pub.exp = Math.exp;

/**
 * Calculates the closest int value that is less than or equal to the value of the parameter.
 * 
 * @cat Math
 * @subcat Calculation
 * @method floor
 * @param {Number} a value
 * @return {Number}
 */
pub.floor = Math.floor;

/**
 * Calculates a number between two numbers at a specific increment. The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc. The lerp function is convenient for creating motion along a straight path and for drawing dotted lines.
 *
 * @cat Math
 * @subcat Calculation
 * @method lerp
 * @param {Number} value1 first value
 * @param {Number} value2 second value
 * @param {Number} amt between 0.0 and 1.0
 * @return {Number} The mapped value
 */
pub.lerp = function (value1, value2, amt) {
    if (arguments.length !== 3) error("b.lerp(), wrong argument count.");
    return (value2 - value1) * amt + value1;
};

/**
 * Calculates the natural logarithm (the base-e logarithm) of a number. This function expects the values greater than 0.0.
 * 
 * @cat Math
 * @subcat Calculation
 * @method log
 * @param {Number} number must be greater then 0.0
 * @return {Number}
 */
pub.log = Math.log;

/**
 * Calculates the magnitude (or length) of a vector. A vector is a direction in space commonly used in computer graphics and linear algebra. Because it has no "start" position, the magnitude of a vector can be thought of as the distance from coordinate (0,0) to its (x,y) value. Therefore, mag() is a shortcut for writing "dist(0, 0, x, y)".
 * 
 * @cat Math
 * @subcat Calculation
 * @method mag
 * @param {Number} a x-coordinate
 * @param {Number} b y-coordinate
 * @param {Number} [c] z-coordinate
 * @return {Number} the magnitude
 */
pub.mag = function (a, b, c) {
    if (!(arguments.length === 2 || arguments.length === 3)) error("b.mag(), wrong argument count.");
    if (c) return Math.sqrt(a * a + b * b + c * c);
    return Math.sqrt(a * a + b * b);
};

/**
 * Re-maps a number from one range to another. In the example above, the number '25' is converted from a value in the range 0..100 into a value that ranges from the left edge (0) to the right edge (width) of the screen.
 * 
 * Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful.
 * 
 * @cat Math
 * @subcat Calculation
 * @method map
 * @param {Number} value the value to be mapped
 * @param {Number} istart start of the input range
 * @param {Number} istop end of the input range
 * @param {Number} ostart start of the output range
 * @param {Number} ostop end of the output range
 * @return {Number} the mapped value
 */
pub.map = function (value, istart, istop, ostart, ostop) {
    if (arguments.length !== 5) error("b.map(), wrong argument count. Use: map(value, istart, istop, ostart, ostop)");
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};

/**
 * Determines the largest value in a sequence of numbers.
 * 
 * @cat Math
 * @subcat Calculation
 * @method max
 * @param {Number|Array} param1 Either the first value or an array of Numbers 
 * @param {Number} param2 Another value to be compared
 * @param {Number} param3 Another value to be compared
 * @return {Number} The highest value
 */
pub.max = function () {
    if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[1] : arguments[0];
    var numbers = arguments.length === 1 ? arguments[0] : arguments;
    if (!("length" in numbers && numbers.length > 0)) error("b.max(), non-empty array is expected");
    var max = numbers[0],
        count = numbers.length;
    for (var i = 1; i < count; ++i) if (max < numbers[i]) max = numbers[i];
    return max;
};

/**
 * Determines the smallest value in a sequence of numbers.
 * 
 * @cat Math
 * @subcat Calculation
 * @method min
 * @param {Number|Array} param1 Either the first value or an array of Numbers 
 * @param {Number} param2 Another value to be compared
 * @param {Number} param3 Another value to be compared
 * @return {Number} The lowest value
 */
pub.min = function () {
    if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[0] : arguments[1];
    var numbers = arguments.length === 1 ? arguments[0] : arguments;
    if (!("length" in numbers && numbers.length > 0)) error("b.min(), non-empty array is expected");
    var min = numbers[0],
        count = numbers.length;
    for (var i = 1; i < count; ++i) if (min > numbers[i]) min = numbers[i];
    return min;
};

/**
 * Normalizes a number from another range into a value between 0 and 1. 
 *
 * Identical to map(value, low, high, 0, 1); 
 *
 * Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful.
 *
 * @cat Math
 * @subcat Calculation
 * @method norm
 * @param {Number} aNumber The value to be normed
 * @param {Number} low The lowest value to be expected
 * @param {Number} low The highest value to be expected
 * @return {Number} The normalized value
 */
pub.norm = function (aNumber, low, high) {
    if (arguments.length !== 3) error("b.norm, wrong argument count.");
    return (aNumber - low) / (high - low);
};

/**
 * Facilitates exponential expressions. The pow() function is an efficient way of multiplying numbers by themselves (or their reciprocal) in large quantities. For example, pow(3, 5) is equivalent to the expression 3*3*3*3*3 and pow(3, -5) is equivalent to 1 / 3*3*3*3*3
 *
 * @cat Math
 * @subcat Calculation
 * @method pow
 * @param {Number} num base of the exponential expression
 * @param {Number} exponent power of which to raise the base
 * @return {Number} the result
 */
pub.pow = Math.pow;

/**
 * Calculates the integer closest to the value parameter. For example, round(9.2) returns the value 9.
 *
 * @cat Math
 * @subcat Calculation
 * @method round
 * @param {Number} value The value to be rounded
 * @return {Number} The rounded value
 */
pub.round = Math.round;

/**
 * Squares a number (multiplies a number by itself). The result is always a positive number, as multiplying two negative numbers always yields a positive result. For example, -1 * -1 = 1.
 *
 * @cat Math
 * @subcat Calculation
 * @method sq
 * @param {Number} aNumber The value to be squared
 * @return {Number} 
 */
pub.sq = function (aNumber) {
    if (arguments.length !== 1) error("b.sq(), wrong argument count.");
    return aNumber * aNumber;
};

// -- Trigonometry --

/**
 * Calculates the square root of a number. The square root of a number is always positive, even though there may be a valid negative root. The square root s of number a is such that s*s = a. It is the opposite of squaring.
 *
 * @cat Math
 * @subcat Trigonometry
 * @method sqrt
 * @param {Number} val The value to be calculated
 * @return {Number} 
 */
pub.sqrt = Math.sqrt;

/**
 * The inverse of cos(), returns the arc cosine of a value. This function expects the values in the range of -1 to 1 and values are returned in the range 0 to PI (3.1415927).
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method acos
 * @param {Number} value the value whose arc cosine is to be returned
 * @return {Number} 
 */
pub.acos = Math.acos;

/**
 * The inverse of sin(), returns the arc sine of a value. This function expects the values in the range of -1 to 1 and values are returned in the range 0 to PI (3.1415927).
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method asin
 * @param {Number} value the value whose arc sine is to be returned
 * @return {Number} 
 */
pub.asin = Math.asin;

/**
 * The inverse of tan(), returns the arc tangent of a value. This function expects the values in the range of -1 to 1 and values are returned in the range 0 to PI (3.1415927).
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method atan
 * @param {Number} value the value whose arc tangent is to be returned
 * @return {Number} 
 */
pub.atan = Math.atan;

/**
 * Calculates the angle (in radians) from a specified point to the coordinate origin as measured from the positive x-axis. Values are returned as a float in the range from PI to -PI. The atan2() function is most often used for orienting geometry to the position of the cursor. Note: The y-coordinate of the point is the first parameter and the x-coordinate is the second due the the structure of calculating the tangent.
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method atan2
 * @param {Number} y the y coordinate
 * @param {Number} x the x coordinate
 * @return {Number} 
 */
pub.atan2 = Math.atan2;

/**
 * Calculates the cosine of an angle. This function expects the values of the angle parameter to be provided in radians (values from 0 to PI*2). Values are returned in the range -1 to 1.
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method cos
 * @param {Number} rad a value in radians
 * @return {Number} 
 */
pub.cos = Math.cos;

/**
 * Converts a radian measurement to its corresponding value in degrees. Radians and degrees are two ways of measuring the same thing. There are 360 degrees in a circle and 2*PI radians in a circle. For example, 90° = PI/2 = 1.5707964. All trigonometric methods in Processing require their parameters to be specified in radians.
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method degrees
 * @param {Number} aAngle an angle in radians
 * @return {Number} The given angle in degree
 */
pub.degrees = function (aAngle) {
    return aAngle * 180 / Math.PI;
};

/**
 * Converts a degree measurement to its corresponding value in radians. Radians and degrees are two ways of measuring the same thing. There are 360 degrees in a circle and 2*PI radians in a circle. For example, 90° = PI/2 = 1.5707964. All trigonometric methods in Processing require their parameters to be specified in radians.
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method radians
 * @param {Number} aAngle an angle in degree
 * @return {Number} The given angle in radians
 */
pub.radians = function (aAngle) {
    return aAngle / 180 * Math.PI;
};

/**
 * Calculates the sine of an angle. This function expects the values of the angle parameter to be provided in radians (values from 0 to 6.28). Values are returned in the range -1 to 1.
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method sin
 * @param {Number} rad a value in radians
 * @return {Number} 
 */
pub.sin = Math.sin;

/**
 * Calculates the ratio of the sine and cosine of an angle. This function expects the values of the angle parameter to be provided in radians (values from 0 to PI*2). Values are returned in the range infinity to -infinity.
 * 
 * @cat Math
 * @subcat Trigonometry
 * @method tan
 * @param {Number} rad a value in radians
 * @return {Number} 
 */
pub.tan = Math.tan;

// -- Random --
// P5 implementations for Random and Noise are used. See math_random_noise.js