/**
 * Used with b.colorMode() to set the color space.
 * @property RGB {String}
 * @cat Color
 */
pub.RGB = "rgb";

/**
 * Two Pi.
 * @property TWO_PI {Number}
 * @cat Math
 * @subcat Constants
 */
pub.TWO_PI = Math.PI*2;

/**
 * Pi.
 * @property PI {Number}
 * @cat Math
 * @subcat Constants
 */
pub.PI = Math.PI;

/**
 * Half Pi.
 * @property HALF_PI {Number}
 * @cat Math
 * @subcat Constants
 */
pub.HALF_PI = Math.PI/2;

/**
 * Quarter Pi.
 * @property QUARTER_PI {Number}
 * @cat Math
 * @subcat Constants
 */
pub.QUARTER_PI = Math.PI/4;

/**
 * Sin Cos Length.
 * @property SINCOS_LENGTH {Number}
 * @cat Math
 * @subcat Constants
 */
pub.SINCOS_LENGTH = 720;

/**
 * Epsilon.
 * @property EPSILON {Number}
 * @cat Math
 * @subcat Constants
 */
pub.EPSILON = 10e-12;

/**
 * Kappa.
 * @property KAPPA {Number}
 * @cat Math
 * @subcat Constants
 */
// Kappa, see: http://www.whizkidtech.redprince.net/bezier/circle/kappa/
pub.KAPPA = (4.0 * (Math.sqrt(2.0) - 1.0) / 3.0);



//________________________________________________________________
//After effects text constants

/**
 * Left text alignment.
 * @property J_LEFT {Text Justification Mode}
 * @cat AfterEffects
 * @subcat Text
 */
pub.J_LEFT = ParagraphJustification.LEFT_JUSTIFY;

/**
 * Right text alignment.
 * @property J_RIGHT {Text Justification Mode}
 * @cat AfterEffects
 * @subcat Text
 */
pub.J_RIGHT = ParagraphJustification.RIGHT_JUSTIFY;

/**
 * Center text alignment.
 * @property J_CENTER {Text Justification Mode}
 * @cat AfterEffects
 * @subcat Text
 */
pub.J_CENTER = ParagraphJustification.CENTER_JUSTIFY;

/**
 * Full left text alignment.
 * @property J_FULL_LEFT {Text Justification Mode}
 * @cat AfterEffects
 * @subcat Text
 */
pub.J_FULL_LEFT = ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT;

/**
 * Full right text alignment
 * @property J_FULL_RIGHT {Text Justification Mode}
 * @cat AfterEffects
 * @subcat Text
 */
pub.J_FULL_RIGHT = ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT;

/**
 * Full center text alignment
 * @property J_FULL_CENTER {Text Justification Mode}
 * @cat AfterEffects
 * @subcat Text
 */
pub.J_FULL_CENTER = ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER;

/**
 * Full text alignment
 * @property J_FULL {Text Justification Mode}
 * @cat AfterEffects
 * @subcat Text
 */
pub.J_FULL = ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL;



//________________________________________________________________
//After effects keyframes constants

/**
 * Bezier keyframe interpolation.
 * @property BEZIER {Keyframe Interpolation Mode}
 * @cat AfterEffects
 * @subcat Keyframes
 */
pub.BEZIER = KeyframeInterpolationType.BEZIER;

/**
 * Linear keyframe interpolation.
 * @property LINEAR {Keyframe Interpolation Mode}
 * @cat AfterEffects
 * @subcat Keyframes
 */
pub.LINEAR = KeyframeInterpolationType.LINEAR;

/**
 * Hold keyframe interpolation.
 * @property HOLD {Keyframe Interpolation Mode}
 * @cat AfterEffects
 * @subcat Keyframes
 */
pub.HOLD = KeyframeInterpolationType.HOLD;


/**
 * Auto bezier for keyframe spatial interpolation.
 * @property HOLD {Keyframe Interpolation Mode}
 * @cat AfterEffects
 * @subcat Keyframes
 */
pub.AUTO_BEZIER = "auto";



//________________________________________________________________
//After effects 3D constants

/**
 * Enable 3D mode in layer.
 * @property ENABLE {3DMode}
 * @cat AfterEffects
 * @subcat 3D
 */
pub.ENABLE = true;

/**
 * Dissable 3D mode in layer.
 * @property DISSABLE {3DMode}
 * @cat AfterEffects
 * @subcat 3D
 */
pub.DISSABLE = false;



//________________________________________________________________
//After effects blend modes constants

/**
 * Add blending mode in layers.
 * @property ADD {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.ADD 	            =	BlendingMode.ADD;

/**
 * Alpha add blending mode in layers.
 * @property ALPHA_ADD {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.ALPHA_ADD 	        =	BlendingMode.ALPHA_ADD;

/**
 * Classic color burn blending mode in layers.
 * @property CLASSIC_COLOR_BURN {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.CLASSIC_COLOR_BURN 	=	BlendingMode.CLASSIC_COLOR_BURN;

/**
 * Classic color dodge blending mode in layers.
 * @property CLASSIC_COLOR_DODGE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.CLASSIC_COLOR_DODGE =	BlendingMode.CLASSIC_COLOR_DODGE;

/**
 * Classic difference blending mode in layers.
 * @property CLASSIC_DIFFERENCE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.CLASSIC_DIFFERENCE 	=	BlendingMode.CLASSIC_DIFFERENCE;

/**
 * Color blending mode in layers.
 * @property COLOR {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.COLOR           	=	BlendingMode.COLOR;

/**
 * Color burn blending mode in layers.
 * @property COLOR_BURN {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.COLOR_BURN 	        =	BlendingMode.COLOR_BURN;

/**
 * Color dodge blending mode in layers.
 * @property COLOR_DODGE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.COLOR_DODGE 	    =	BlendingMode.COLOR_DODGE;

/**
 * Dancing dissolve blending mode in layers.
 * @property DANCING_DISSOLVE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.DANCING_DISSOLVE 	=	BlendingMode.DANCING_DISSOLVE;

/**
 * Darken blending mode in layers.
 * @property DARKEN {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.DARKEN          	=	BlendingMode.DARKEN;

/**
 * Darker color blending mode in layers.
 * @property DARKER_COLOR {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.DARKER_COLOR 	    =	BlendingMode.DARKER_COLOR;

/**
 * Difference blending mode in layers.
 * @property DIFFERENCE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.DIFFERENCE	        =	BlendingMode.DIFFERENCE;

/**
 * Dissolve blending mode in layers.
 * @property DISSOLVE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.DISSOLVE 	        =	BlendingMode.DISSOLVE;

/**
 * Divide blending mode in layers.
 * @property DIVIDE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.DIVIDE   	        =	BlendingMode.DIVIDE;

/**
 * Exclusion blending mode in layers.
 * @property EXCLUSION {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.EXCLUSION 	        =	BlendingMode.EXCLUSION;

/**
 * Hard light blending mode in layers.
 * @property HARD_LIGHT {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.HARD_LIGHT      	=	BlendingMode.HARD_LIGHT;

/**
 * Hard mix blending mode in layers.
 * @property HARD_MIX {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.HARD_MIX 	        =	BlendingMode.HARD_MIX;

/**
 * Hue blending mode in layers.
 * @property HUE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.HUE 	            =	BlendingMode.HUE;

/**
 * Lighten blending mode in layers.
 * @property LIGHTEN {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.LIGHTEN 	        =	BlendingMode.LIGHTEN;

/**
 * Lighter color blending mode in layers.
 * @property LIGHTER_COLOR {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.LIGHTER_COLOR 	    =	BlendingMode.LIGHTER_COLOR;

/**
 * Linear burn blending mode in layers.
 * @property LINEAR_BURN {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.LINEAR_BURN 	    =	BlendingMode.LINEAR_BURN;

/**
 * Linear dodge blending mode in layers.
 * @property LINEAR_DODGE {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.LINEAR_DODGE 	    =	BlendingMode.LINEAR_DODGE;

/**
 * Linear light blending mode in layers.
 * @property LINEAR_LIGHT {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.LINEAR_LIGHT 	    =	BlendingMode.LINEAR_LIGHT;

/**
 * Luminescent premul blending mode in layers.
 * @property LUMINESCENT_PREMUL {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.LUMINESCENT_PREMUL 	=	BlendingMode.LUMINESCENT_PREMUL;

/**
 * Luminosity blending mode in layers.
 * @property LUMINOSITY {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.LUMINOSITY 	        =	BlendingMode.LUMINOSITY;

/**
 * Multiply blending mode in layers.
 * @property MULTIPLY {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.MULTIPLY 	        =	BlendingMode.MULTIPLY;

/**
 * Normal blending mode in layers.
 * @property NORMAL {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.NORMAL 	            =	BlendingMode.NORMAL;

/**
 * Overlay blending mode in layers.
 * @property OVERLAY {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.OVERLAY 	        =	BlendingMode.OVERLAY;

/**
 * Pin light blending mode in layers.
 * @property PIN_LIGHT {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.PIN_LIGHT 	        =	BlendingMode.PIN_LIGHT;

/**
 * Saturation blending mode in layers.
 * @property SATURATION {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.SATURATION 	        =	BlendingMode.SATURATION;

/**
 * Screen blending mode in layers.
 * @property SCREEN {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.SCREEN 	            =	BlendingMode.SCREEN;

/**
 * Silhouete alpha blending mode in layers.
 * @property SILHOUETE_ALPHA {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.SILHOUETE_ALPHA 	=	BlendingMode.SILHOUETE_ALPHA;

/**
 * Silhouette luma blending mode in layers.
 * @property SILHOUETTE_LUMA {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.SILHOUETTE_LUMA 	=	BlendingMode.SILHOUETTE_LUMA;

/**
 * Subtract blending mode in layers.
 * @property SUBTRACT {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.SUBTRACT	        =	BlendingMode.SUBTRACT;

/**
 * Soft light blending mode in layers.
 * @property SOFT_LIGHT {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.SOFT_LIGHT 	        =	BlendingMode.SOFT_LIGHT;

/**
 * Stencil alpha blending mode in layers.
 * @property STENCIL_ALPHA {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.STENCIL_ALPHA 	    =	BlendingMode.STENCIL_ALPHA;

/**
 * Stencil alpha blending mode in layers.
 * @property STENCIL_LUMA {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.STENCIL_LUMA 	    =	BlendingMode.STENCIL_LUMA;

/**
 * Vivid light blending mode in layers.
 * @property VIVID_LIGHT {BlendMode}
 * @cat AfterEffects
 * @subcat BlendModes
 */
pub.VIVID_LIGHT	        =	BlendingMode.VIVID_LIGHT;



//________________________________________________________________
//After effects track matte constants

/**
 * Alpha track matte.
 * @property ALPHA {Track Matte Mode}
 * @cat AfterEffects
 * @subcat TrackMatte
 */
pub.ALPHA = TrackMatteType.ALPHA;

/**
 * Alpha inverted track matte.
 * @property ALPHA_INVERTED {Track Matte Mode}
 * @cat AfterEffects
 * @subcat TrackMatte
 */
pub.ALPHA_INVERTED = TrackMatteType.ALPHA_INVERTED;

/**
 * Luma track matte.
 * @property LUMA {Track Matte Mode}
 * @cat AfterEffects
 * @subcat TrackMatte
 */
pub.LUMA = TrackMatteType.LUMA;

/**
 * Luma inverted track matte.
 * @property LUMA_INVERTED {Track Matte Mode}
 * @cat AfterEffects
 * @subcat TrackMatte
 */
pub.LUMA_INVERTED = TrackMatteType.LUMA_INVERTED;

/**
 * No track matte.
 * @property NO_TRACK_MATTE {Track Matte Mode}
 * @cat AfterEffects
 * @subcat TrackMatte
 */
pub.NO_TRACK_MATTE = TrackMatteType.NO_TRACK_MATTE;




//________________________________________________________________
//After effects light constants

/**
 * Parallel light type.
 * @property PARALLEL {LightType}
 * @cat AfterEffects
 * @subcat Lighting
 */
pub.PARALLEL = LightType.PARALLEL

/**
 * Spot light type.
 * @property SPOT {LightType}
 * @cat AfterEffects
 * @subcat Lighting
 */
pub.SPOT = LightType.SPOT

/**
 * Point light type.
 * @property POINT {LightType}
 * @cat AfterEffects
 * @subcat Lighting
 */
pub.POINT = LightType.POINT

/**
 * Ambient light type.
 * @property AMBIENT {LightType}
 * @cat AfterEffects
 * @subcat Lighting
 */
pub.AMBIENT = LightType.AMBIENT




//________________________________________________________________
//After effects mask constants


/**
 * Mask mode none.
 * @property M_NONE {MaskMode}
 * @cat AfterEffects
 * @subcat Masks
 */
pub.M_NONE = MaskMode.NONE;

/**
 * Mask mode add.
 * @property M_NONE {MaskMode}
 * @cat AfterEffects
 * @subcat Masks
 */
pub.M_ADD = MaskMode.ADD;

/**
 * Mask mode subtract.
 * @property M_NONE {MaskMode}
 * @cat AfterEffects
 * @subcat Masks
 */
pub.M_SUBTRACT = MaskMode.SUBTRACT; 

/**
 * Mask mode intersect.
 * @property M_NONE {MaskMode}
 * @cat AfterEffects
 * @subcat Masks
 */
pub.M_INTERSECT = MaskMode.INTERSECT;

/**
 * Mask mode lighten.
 * @property M_NONE {MaskMode}
 * @cat AfterEffects
 * @subcat Masks
 */
pub.M_LIGHTEN = MaskMode.LIGHTEN;

/**
 * Mask mode darken.
 * @property M_NONE {MaskMode}
 * @cat AfterEffects
 * @subcat Masks
 */
pub.M_DARKEN = MaskMode.DARKEN;

/**
 * Mask mode difference.
 * @property M_NONE {MaskMode}
 * @cat AfterEffects
 * @subcat Masks
 */
pub.M_DIFFERENCE = MaskMode.DIFFERENCE;



//Begin and End Shape

/**
 * Close, used for endShape() modes.
 * @property CLOSE {String}
 * @cat Document
 * @subcat Primitives
 */
pub.CLOSE = true;


/** 
 * Draw mode for beginShape() and endShape().
 * @property LINES
*/
pub.LINES = 1;

/** 
 * Draw mode for beginShape() and endShape().
 * @property QUADS
*/
pub.QUADS = 2;

/** 
 * Draw mode for beginShape() and endShape().
 * @property TRIANGLES
*/
pub.TRIANGLES = 3;


/**
 * Set layer to inactive but get the shape for animation.
 * @property INACTIVE
 */
pub.INACTIVE = false;




/**
 * Line cap butt option
 * @property BUTT
 */
pub.BUTT = 0;

/**
 * Line cap round option
 * @property ROUND
 */
pub.ROUND = 1;


/**
 * Line cap projectin option
 * @property PROJECTING
 */
pub.PROJECTING = 2;




var ERROR_PREFIX = "\nBaffects.js Error -> ",
    WARNING_PREFIX = "### Baffects Warning -> ";