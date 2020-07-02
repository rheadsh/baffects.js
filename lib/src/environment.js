// ----------------------------------------
// Environment

// ----------------------------------------
// Date

/**
 * The year() function returns the current year as an integer (2012, 2013 etc).
 * 
 * @cat Environment
 * @subcat Date
 * @method year
 *  @returns {number}
 */
pub.year = function () {
    return (new Date()).getFullYear();
};

/**
 * The month() function returns the current month as a value from 1 - 12.
 * 
 * @cat Environment
 * @subcat Date
 * @method month
 *  @returns {number}
 */
pub.month = function () {
    return (new Date()).getMonth() + 1;
};

/**
 * The day() function returns the current day as a value from 1 - 31.
 * 
 * @cat Environment
 * @subcat Date
 * @method day
 *  @returns {number}
 */
pub.day = function () {
    return (new Date()).getDate();
};

/**
 * The weekday() function returns the current weekday as a string from Sunday, Monday, Tuesday...
 * 
 * @cat Environment
 * @subcat Date
 * @method weekday
 *  @returns {String}
 */
pub.weekday = function () {
    var weekdays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    return weekdays[(new Date()).getDay()];
};

/**
 * The hour() function returns the current hour as a value from 0 - 23.
 * 
 * @cat Environment
 * @subcat Date
 * @method hour
 *  @returns {number}
 */
pub.hour = function () {
    return (new Date()).getHours();
};

/**
 * The minute() function returns the current minute as a value from 0 - 59.
 * 
 * @cat Environment
 * @subcat Date
 * @method minute
 *  @returns {number}
 */
pub.minute = function () {
    return (new Date()).getMinutes();
};

/**
 * The second() function returns the current second as a value from 0 - 59.
 * 
 * @cat Environment
 * @subcat Date
 * @method second
 *  @returns {number}
 */
pub.second = function () {
    return (new Date()).getSeconds();
};

/**
 * Returns the number of milliseconds (thousandths of a second) since starting an applet.
 * 
 * @cat Environment
 * @subcat Date
 * @method millis
 *  @returns {number}
 */
pub.millis = function () {
    return Date.now() - startTime;
};

/**
 * The millisecond() function differs from millis(), in that it returns the exact millisecond (thousandths of a second) of the current time.
 * 
 * @cat Environment
 * @subcat Date
 * @method millisecond
 *  @returns {number}
 */
pub.millisecond = function () {
    return (new Date()).getMilliseconds();
};

/**
 * The timestamp() function returns the current date formatted as YYYYMMDD_HHMMSS for useful unique filenaming.
 * 
 * @cat Environment
 * @subcat Date
 * @method timestamp
 *  @returns {String}
 */
pub.timestamp = function () {
    var dt = new Date();
    var dtf = dt.getFullYear();
    dtf += pub.nf(dt.getMonth() + 1, 2);
    dtf += pub.nf(dt.getDate(), 2);
    dtf += "_";
    dtf += pub.nf(dt.getHours(), 2);
    dtf += pub.nf(dt.getMinutes(), 2);
    dtf += pub.nf(dt.getSeconds(), 2);
    return dtf;
};


