/**
 * Used with b.colorMode() to set the color space.
 * @const RGB {String}
 * @category Baffects.js Constants
 */
pub.RGB = "rgb";

/**
 * Two Pi.
 * @const TWO_PI {number}
 * @category Baffects.js Constants
 */
pub.TWO_PI = Math.PI * 2;

/**
 * Pi.
 * @const PI {number}
 * @category Baffects.js Constants
 */
pub.PI = Math.PI;

/**
 * Half Pi.
 * @const HALF_PI {number}
 * @category Baffects.js Constants
 */
pub.HALF_PI = Math.PI / 2;

/**
 * Quarter Pi.
 * @const QUARTER_PI {number}
 * @category Baffects.js Constants
 */
pub.QUARTER_PI = Math.PI / 4;

/**
 * Sin Cos Length.
 * @const SINCOS_LENGTH {number}
 * @category Baffects.js Constants
 */
pub.SINCOS_LENGTH = 720;

/**
 * Epsilon.
 * @const EPSILON {number}
 * @category Baffects.js Constants
 */
pub.EPSILON = 10e-12;

/**
 * Kappa.
 * @const KAPPA {number}
 * @category Baffects.js Constants
 */
// Kappa, see: http://www.whizkidtech.redprince.net/bezier/circle/kappa/
pub.KAPPA = (4.0 * (Math.sqrt(2.0) - 1.0) / 3.0);



//________________________________________________________________
//After effects text constants

/**
 * Left text alignment.
 * @category Baffects.js Constants
 * @const J_LEFT {Text Justification Mode}
 */
pub.J_LEFT = ParagraphJustification.LEFT_JUSTIFY;


/**
 * Right text alignment.
 * @category Baffects.js Constants
 * @const J_RIGHT {Text Justification Mode}
 */
pub.J_RIGHT = ParagraphJustification.RIGHT_JUSTIFY;

/**
 * Center text alignment.
 * @category Baffects.js Constants
 * @const J_CENTER {Text Justification Mode}
 */
pub.J_CENTER = ParagraphJustification.CENTER_JUSTIFY;

/**
 * Full left text alignment.
 * @category Baffects.js Constants
 * @const J_FULL_LEFT {Text Justification Mode}
 */
pub.J_FULL_LEFT = ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT;

/**
 * Full right text alignment
 * @category Baffects.js Constants
 * @const J_FULL_RIGHT {Text Justification Mode}
 */
pub.J_FULL_RIGHT = ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT;

/**
 * Full center text alignment
 * @category Baffects.js Constants
 * @const J_FULL_CENTER {Text Justification Mode}
 */
pub.J_FULL_CENTER = ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER;

/**
 * Full text alignment
 * @category Baffects.js Constants
 * @const J_FULL {Text Justification Mode}
 */
pub.J_FULL = ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL;



//________________________________________________________________
//After effects keyframes constants

/**
 * Bezier keyframe interpolation.
 * @category Baffects.js Constants
 * @const BEZIER {Keyframe Interpolation Mode}
 */
pub.BEZIER = KeyframeInterpolationType.BEZIER;

/**
 * Linear keyframe interpolation.
 * @category Baffects.js Constants
 * @const LINEAR {Keyframe Interpolation Mode}
 */
pub.LINEAR = KeyframeInterpolationType.LINEAR;

/**
 * Hold keyframe interpolation.
 * @category Baffects.js Constants
 * @const HOLD {Keyframe Interpolation Mode}
 */
pub.HOLD = KeyframeInterpolationType.HOLD;


/**
 * Auto bezier for keyframe spatial interpolation.
 * @category Baffects.js Constants
 * @const HOLD {Keyframe Interpolation Mode}
 */
pub.AUTO_BEZIER = "auto";



//________________________________________________________________
//After effects 3D constants

/**
 * Enable 3D mode in layer.
 * @category Baffects.js Constants
 * @const ENABLE {3DMode}
 */
pub.ENABLE = true;

/**
 * Dissable 3D mode in layer.
 * @category Baffects.js Constants
 * @const DISSABLE {3DMode}
 */
pub.DISSABLE = false;



//________________________________________________________________
//After effects blend modes constants

/**
 * Add blending mode in layers.
 * @category Baffects.js Constants
 * @const ADD {BlendMode}
 */
pub.ADD = BlendingMode.ADD;

/**
 * Alpha add blending mode in layers.
 * @category Baffects.js Constants
 * @const ALPHA_ADD {BlendMode}
 */
pub.ALPHA_ADD = BlendingMode.ALPHA_ADD;

/**
 * Classic color burn blending mode in layers.
 * @category Baffects.js Constants
 * @const CLASSIC_COLOR_BURN {BlendMode}
 */
pub.CLASSIC_COLOR_BURN = BlendingMode.CLASSIC_COLOR_BURN;

/**
 * Classic color dodge blending mode in layers.
 * @category Baffects.js Constants
 * @const CLASSIC_COLOR_DODGE {BlendMode}
 */
pub.CLASSIC_COLOR_DODGE = BlendingMode.CLASSIC_COLOR_DODGE;

/**
 * Classic difference blending mode in layers.
 * @category Baffects.js Constants
 * @const CLASSIC_DIFFERENCE {BlendMode}
 */
pub.CLASSIC_DIFFERENCE = BlendingMode.CLASSIC_DIFFERENCE;

/**
 * Color blending mode in layers.
 * @category Baffects.js Constants
 * @const COLOR {BlendMode}
 */
pub.COLOR = BlendingMode.COLOR;

/**
 * Color burn blending mode in layers.
 * @category Baffects.js Constants
 * @const COLOR_BURN {BlendMode}
 */
pub.COLOR_BURN = BlendingMode.COLOR_BURN;

/**
 * Color dodge blending mode in layers.
 * @category Baffects.js Constants
 * @const COLOR_DODGE {BlendMode}
 */
pub.COLOR_DODGE = BlendingMode.COLOR_DODGE;

/**
 * Dancing dissolve blending mode in layers.
 * @category Baffects.js Constants
 * @const DANCING_DISSOLVE {BlendMode}
 */
pub.DANCING_DISSOLVE = BlendingMode.DANCING_DISSOLVE;

/**
 * Darken blending mode in layers.
 * @category Baffects.js Constants
 * @const DARKEN {BlendMode}
 */
pub.DARKEN = BlendingMode.DARKEN;

/**
 * Darker color blending mode in layers.
 * @category Baffects.js Constants
 * @const DARKER_COLOR {BlendMode}
 */
pub.DARKER_COLOR = BlendingMode.DARKER_COLOR;

/**
 * Difference blending mode in layers.
 * @category Baffects.js Constants
 * @const DIFFERENCE {BlendMode}
 */
pub.DIFFERENCE = BlendingMode.DIFFERENCE;

/**
 * Dissolve blending mode in layers.
 * @category Baffects.js Constants
 * @const DISSOLVE {BlendMode}
 */
pub.DISSOLVE = BlendingMode.DISSOLVE;

/**
 * Divide blending mode in layers.
 * @category Baffects.js Constants
 * @const DIVIDE {BlendMode}
 */
pub.DIVIDE = BlendingMode.DIVIDE;

/**
 * Exclusion blending mode in layers.
 * @category Baffects.js Constants
 * @const EXCLUSION {BlendMode}
 */
pub.EXCLUSION = BlendingMode.EXCLUSION;

/**
 * Hard light blending mode in layers.
 * @category Baffects.js Constants
 * @const HARD_LIGHT {BlendMode}
 */
pub.HARD_LIGHT = BlendingMode.HARD_LIGHT;

/**
 * Hard mix blending mode in layers.
 * @category Baffects.js Constants
 * @const HARD_MIX {BlendMode}
 */
pub.HARD_MIX = BlendingMode.HARD_MIX;

/**
 * Hue blending mode in layers.
 * @category Baffects.js Constants
 * @const HUE {BlendMode}
 */
pub.HUE = BlendingMode.HUE;

/**
 * Lighten blending mode in layers.
 * @category Baffects.js Constants
 * @const LIGHTEN {BlendMode}
 */
pub.LIGHTEN = BlendingMode.LIGHTEN;

/**
 * Lighter color blending mode in layers.
 * @category Baffects.js Constants
 * @const LIGHTER_COLOR {BlendMode}
 */
pub.LIGHTER_COLOR = BlendingMode.LIGHTER_COLOR;

/**
 * Linear burn blending mode in layers.
 * @category Baffects.js Constants
 * @const LINEAR_BURN {BlendMode}
 */
pub.LINEAR_BURN = BlendingMode.LINEAR_BURN;

/**
 * Linear dodge blending mode in layers.
 * @category Baffects.js Constants
 * @const LINEAR_DODGE {BlendMode}
 */
pub.LINEAR_DODGE = BlendingMode.LINEAR_DODGE;

/**
 * Linear light blending mode in layers.
 * @category Baffects.js Constants
 * @const LINEAR_LIGHT {BlendMode}
 */
pub.LINEAR_LIGHT = BlendingMode.LINEAR_LIGHT;

/**
 * Luminescent premul blending mode in layers.
 * @category Baffects.js Constants
 * @const LUMINESCENT_PREMUL {BlendMode}
 */
pub.LUMINESCENT_PREMUL = BlendingMode.LUMINESCENT_PREMUL;

/**
 * Luminosity blending mode in layers.
 * @category Baffects.js Constants
 * @const LUMINOSITY {BlendMode}
 */
pub.LUMINOSITY = BlendingMode.LUMINOSITY;

/**
 * Multiply blending mode in layers.
 * @category Baffects.js Constants
 * @const MULTIPLY {BlendMode}
 */
pub.MULTIPLY = BlendingMode.MULTIPLY;

/**
 * Normal blending mode in layers.
 * @category Baffects.js Constants
 * @const NORMAL {BlendMode}
 */
pub.NORMAL = BlendingMode.NORMAL;

/**
 * Overlay blending mode in layers.
 * @category Baffects.js Constants
 * @const OVERLAY {BlendMode}
 */
pub.OVERLAY = BlendingMode.OVERLAY;

/**
 * Pin light blending mode in layers.
 * @category Baffects.js Constants
 * @const PIN_LIGHT {BlendMode}
 */
pub.PIN_LIGHT = BlendingMode.PIN_LIGHT;

/**
 * Saturation blending mode in layers.
 * @category Baffects.js Constants
 * @const SATURATION {BlendMode}
 */
pub.SATURATION = BlendingMode.SATURATION;

/**
 * Screen blending mode in layers.
 * @category Baffects.js Constants
 * @const SCREEN {BlendMode}
 */
pub.SCREEN = BlendingMode.SCREEN;

/**
 * Silhouete alpha blending mode in layers.
 * @category Baffects.js Constants
 * @const SILHOUETE_ALPHA {BlendMode}
 */
pub.SILHOUETTE_ALPHA = BlendingMode.SILHOUETE_ALPHA;

/**
 * Silhouette luma blending mode in layers.
 * @category Baffects.js Constants
 * @const SILHOUETTE_LUMA {BlendMode}
 */
pub.SILHOUETTE_LUMA = BlendingMode.SILHOUETTE_LUMA;

/**
 * Subtract blending mode in layers.
 * @category Baffects.js Constants
 * @const SUBTRACT {BlendMode}
 */
pub.SUBTRACT = BlendingMode.SUBTRACT;

/**
 * Soft light blending mode in layers.
 * @category Baffects.js Constants
 * @const SOFT_LIGHT {BlendMode}
 */
pub.SOFT_LIGHT = BlendingMode.SOFT_LIGHT;

/**
 * Stencil alpha blending mode in layers.
 * @category Baffects.js Constants
 * @const STENCIL_ALPHA {BlendMode}
 */
pub.STENCIL_ALPHA = BlendingMode.STENCIL_ALPHA;

/**
 * Stencil alpha blending mode in layers.
 * @category Baffects.js Constants
 * @const STENCIL_LUMA {BlendMode}
 */
pub.STENCIL_LUMA = BlendingMode.STENCIL_LUMA;

/**
 * Vivid light blending mode in layers.
 * @category Baffects.js Constants
 * @const VIVID_LIGHT {BlendMode}
 */
pub.VIVID_LIGHT = BlendingMode.VIVID_LIGHT;



//________________________________________________________________
//After effects track matte constants

/**
 * Alpha track matte.
 * @category Baffects.js Constants
 * @const ALPHA {Track Matte Mode}
 */
pub.ALPHA = TrackMatteType.ALPHA;

/**
 * Alpha inverted track matte.
 * @category Baffects.js Constants
 * @const ALPHA_INVERTED {Track Matte Mode}
 */
pub.ALPHA_INVERTED = TrackMatteType.ALPHA_INVERTED;

/**
 * Luma track matte.
 * @category Baffects.js Constants
 * @const LUMA {Track Matte Mode}
 */
pub.LUMA = TrackMatteType.LUMA;

/**
 * Luma inverted track matte.
 * @category Baffects.js Constants
 * @const LUMA_INVERTED {Track Matte Mode}
 */
pub.LUMA_INVERTED = TrackMatteType.LUMA_INVERTED;

/**
 * No track matte.
 * @category Baffects.js Constants
 * @const NO_TRACK_MATTE {Track Matte Mode}
 */
pub.NO_TRACK_MATTE = TrackMatteType.NO_TRACK_MATTE;




//________________________________________________________________
//After effects light constants

/**
 * Parallel light type.
 * @category Baffects.js Constants
 * @const PARALLEL {LightType}
*/
pub.PARALLEL = LightType.PARALLEL

/**
 * Spot light type.
 * @category Baffects.js Constants
 * @const SPOT {LightType}
*/
pub.SPOT = LightType.SPOT

/**
 * Point light type.
 * @category Baffects.js Constants
 * @const POINT {LightType}
*/
pub.POINT = LightType.POINT

/**
 * Ambient light type.
 * @category Baffects.js Constants
 * @const AMBIENT {LightType}
*/
pub.AMBIENT = LightType.AMBIENT




//________________________________________________________________
//After effects mask constants


/**
 * Mask mode none.
 * @category Baffects.js Constants
 * @const M_NONE {MaskMode}
*/
pub.M_NONE = MaskMode.NONE;

/**
 * Mask mode add.
 * @category Baffects.js Constants
 * @const M_NONE {MaskMode}
*/
pub.M_ADD = MaskMode.ADD;

/**
 * Mask mode subtract.
 * @category Baffects.js Constants
 * @const M_NONE {MaskMode}
*/
pub.M_SUBTRACT = MaskMode.SUBTRACT;

/**
 * Mask mode intersect.
 * @category Baffects.js Constants
 * @const M_NONE {MaskMode}
*/
pub.M_INTERSECT = MaskMode.INTERSECT;

/**
 * Mask mode lighten.
 * @category Baffects.js Constants
 * @const M_NONE {MaskMode}
*/
pub.M_LIGHTEN = MaskMode.LIGHTEN;

/**
 * Mask mode darken.
 * @category Baffects.js Constants
 * @const M_NONE {MaskMode}
*/
pub.M_DARKEN = MaskMode.DARKEN;

/**
 * Mask mode difference.
 * @category Baffects.js Constants
 * @const M_NONE {MaskMode}
*/
pub.M_DIFFERENCE = MaskMode.DIFFERENCE;



//Begin and End Shape

/**
 * Close, used for endShape() modes.
 * @category Baffects.js Constants
 * @const CLOSE {String}
 */
pub.CLOSE = true;


/** 
 * Draw mode for beginShape() and endShape().
 * @category Baffects.js Constants
 * @const LINES
*/
pub.LINES = 1;

/** 
 * Draw mode for beginShape() and endShape().
 * @category Baffects.js Constants
 * @const QUADS
*/
pub.QUADS = 2;

/** 
 * Draw mode for beginShape() and endShape().
 * @category Baffects.js Constants
 * @const TRIANGLES
*/
pub.TRIANGLES = 3;


/**
 * Set layer to inactive but get the shape for animation.
 * @category Baffects.js Constants
 * @const INACTIVE
 */
pub.INACTIVE = false;




/**
 * Line cap butt option.
 * @category Baffects.js Constants
 * @const BUTT
 */
pub.BUTT = 0;

/**
 * Line cap round option.
 * @category Baffects.js Constants
 * @const ROUND
 */
pub.ROUND = 1;


/**
 * Line cap projectin option.
 * @category Baffects.js Constants
 * @const PROJECTING
 */
pub.PROJECTING = 2;




var ERROR_PREFIX = "\nBaffects.js Error -> ",
    WARNING_PREFIX = "### Baffects Warning -> ";