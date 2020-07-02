// Color

/**
 * Creates new RGBA color
 *  
 * @category Baffects.js 
 * @method color
 * @param {number} red Range[0,1] Red value
 * @param {number} green Range[0,1] Green value
 * @param {number} blue Range[0,1] Blue value
 * @param {number} alpha Range[0,1] Opacity value
 *  @returns {Color} RGBA color 
 */
pub.color = function (red, green, blue, alpha) {
    var col = [];
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3];

    a = pub.constrain(a, 0, 255);
    b = pub.constrain(b, 0, 255);
    c = pub.constrain(c, 0, 255);
    d = pub.constrain(d, 0, 100);

    if (arguments.length === 1) {
        if (a > 1) {
            col = [a / 255, a / 255, a / 255];
        } else {
            col = [a, a, a];
        }
    } else if (arguments.length === 3) {
        if (a > 1 || b > 1 || c > 1) {
            col = [a / 255, b / 255, c / 255];
        } else {
            col = [a, b, c];
        }
    } else if (arguments.length === 2) {
        if (a > 1) {
            col = [a / 255, a / 255, a / 255];
            currOpacity = b;
        } else {
            col = [a, a, a];
            currOpacity = b * 100;
        }
    } else if (arguments.length === 4) {
        if (a > 1 || b > 1 || c > 1) {
            col = [a / 255, b / 255, c / 255];
            currOpacity = d;
        } else {
            col = [a, b, c];
            currOpacity = d * 100;
        }
    }
    return col;
};

/**
 * Sets the color used to fill shapes, you can also send an array of the form [r, g, b, a].
 * @category Baffects.js 
 * @method fill
 * @param {number} red Range[0,1] Red value
 * @param {number} green Range[0,1] Green value
 * @param {number} blue Range[0,1] Blue value
 * @param {number} alpha Range[0,1] Opacity value
 */
pub.fill = function (r, g, b, a) {
    var a, b, c, d;

    currFillState = true;
    if (arguments[0] instanceof Array) {
        if (arguments[0].length === 1) {
            currFillColor = pub.color(arguments[0][0]);
        } else if (arguments[0].length === 2) {
            currFillColor = pub.color(arguments[0][0], arguments[0][1]);
        } else if (arguments[0].length === 3) {
            currFillColor = pub.color(arguments[0][0], arguments[0][1], arguments[0][2]);
        } else if (arguments[0].length === 4) {
            currFillColor = pub.color(arguments[0][0], arguments[0][1], arguments[0][2], arguments[0][3]);
        }
    } else {
        if (arguments.length === 1) {
            currFillColor = pub.color(arguments[0]);
        } else if (arguments.length === 2) {
            currFillColor = pub.color(arguments[0], arguments[1]);
        } else if (arguments.length === 3) {
            currFillColor = pub.color(arguments[0], arguments[1], arguments[2]);
        } else if (arguments.length === 4) {
            currFillColor = pub.color(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }

    var stackThisStyle = new Style(currFillState, currFillColor, currStrokeState, currStrokeColor, currStrokeWeight);
    styleStack.push(stackThisStyle);
}

/**
 * Sets the color used to draw lines and borders around shapes, you can also send an array of the form [r, g, b, a].
 *  
 * @category Baffects.js
 * @method stroke
 * @param {number} red Range[0,1] Red value
 * @param {number} green Range[0,1] Green value
 * @param {number} blue Range[0,1] Blue value
 * @param {number} alpha Range[0,1] Opacity value 
 */
pub.stroke = function (r, g, b, a) {
    currStrokeState = true;
    if (arguments[0] instanceof Array) {
        if (arguments[0].length === 1) {
            currStrokeColor = pub.color(arguments[0][0]);
        } else if (arguments[0].length === 2) {
            currStrokeColor = pub.color(arguments[0][0], arguments[0][1]);
        } else if (arguments[0].length === 3) {
            currStrokeColor = pub.color(arguments[0][0], arguments[0][1], arguments[0][2]);
        } else if (arguments[0].length === 4) {
            currStrokeColor = pub.color(arguments[0][0], arguments[0][1], arguments[0][2], arguments[0][3]);
        }
    } else {
        if (arguments.length === 1) {
            currStrokeColor = pub.color(arguments[0]);
        } else if (arguments.length === 2) {
            currStrokeColor = pub.color(arguments[0], arguments[1]);
        } else if (arguments.length === 3) {
            currStrokeColor = pub.color(arguments[0], arguments[1], arguments[2]);
        } else if (arguments.length === 4) {
            currStrokeColor = pub.color(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }

    var stackThisStyle = new Style(currFillState, currFillColor, currStrokeState, currStrokeColor, currStrokeWeight);
    styleStack.push(stackThisStyle);
};

/**
 * Converts from HSBA color mode to RGBA
 *  
 * @category Baffects.js 
 * @method hsbaToRgba
 * @param {number} hue Range[0,1] Hue value
 * @param {number} saturation Range[0,1] Saturation value
 * @param {number} brightness Range[0,1] Brightness value
 * @param {number} alpha Range[0,1] Alpha value
 *  @returns {Color} Converted color
 */
//Adapted from p5.js 
pub.toRgba = function (h, s, b, a) {
    var hue, sat, val, alpha;

    if (arguments[0] instanceof Array) {
        if (arguments[0].length === 3) {
            hue = (arguments[0][0] > 1 ? arguments[0][0] / 360 : arguments[0][0]) * 6;
            sat = arguments[0][1] > 1 ? arguments[0][1] / 100 : arguments[0][1];
            val = arguments[0][2] > 1 ? arguments[0][2] / 100 : arguments[0][2];
            alpha = 1;
        } else {
            hue = (arguments[0][0] > 1 ? arguments[0][0] / 360 : arguments[0][0]) * 6;
            sat = arguments[0][1] > 1 ? arguments[0][1] / 100 : arguments[0][1];
            val = arguments[0][2] > 1 ? arguments[0][2] / 100 : arguments[0][2];
            alpha = arguments[0][3] > 1 ? arguments[0][3] / 100 : arguments[0][3];
        }
    } else {
        if (arguments.length === 3) {
            // We will split hue into 6 sectors
            hue = (h > 1 ? h / 360 : h) * 6;
            sat = s > 1 ? s / 100 : s;
            val = b > 1 ? b / 100 : b;
            alpha = 1;
        } else {
            hue = (h > 1 ? h / 360 : h) * 6;
            sat = s > 1 ? s / 100 : s;
            val = b > 1 ? b / 100 : b;
            alpha = a > 1 ? a / 100 : a;
        }
    }

    var RGBA = [];

    if (sat === 0) {
        RGBA = [val, val, val, a]; // Return early if grayscale.
    } else {
        var sector = Math.floor(hue);
        var tint1 = val * (1 - sat);
        var tint2 = val * (1 - sat * (hue - sector));
        var tint3 = val * (1 - sat * (1 + sector - hue));
        var red, green, blue;
        if (sector === 1) {
            // Yellow to green.
            red = tint2;
            green = val;
            blue = tint1;
        } else if (sector === 2) {
            // Green to cyan.
            red = tint1;
            green = val;
            blue = tint3;
        } else if (sector === 3) {
            // Cyan to blue.
            red = tint1;
            green = tint2;
            blue = val;
        } else if (sector === 4) {
            // Blue to magenta.
            red = tint3;
            green = tint1;
            blue = val;
        } else if (sector === 5) {
            // Magenta to red.
            red = val;
            green = tint1;
            blue = tint2;
        } else {
            // Red to yellow (sector could be 0 or 6).
            red = val;
            green = tint3;
            blue = tint1;
        }
    }
    return pub.color(red, green, blue, alpha);
};