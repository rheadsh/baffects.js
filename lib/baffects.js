
/*
  ..-  --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-.-..-.-.... .- .--

  B A S I L . J S
  Bringing the spirit of the Processing visualization language to Adobe Indesign.

  License        - MIT

  Core
                 - Ted Davis http://teddavis.org
                 - Benedikt Groß http://benedikt-gross.de
                 - Ludwig Zeller http://ludwigzeller.de
  Members
                 - Philipp Adrian http://www.philippadrian.com/
                 - be:screen GmbH http://bescreen.de
                 - Stefan Landsbek http://47nord.de
                 - Ken Frederick http://kennethfrederick.de/

  Web Site       - http://basiljs.ch
  Github Repo.   - https://github.com/basiljs/basil.js
  Processing     - http://processing.org
  Processing.js  - http://processingjs.org

  basil.js was conceived and is generously supported by
  The Visual Communication Institute / The Basel School of Design
  Department of the Academy of Art and Design Basel (HGK FHNW)

  http://thebaselschoolofdesign.ch

  Please note: Big general parts e.g. random() of the basil.js source code are copied
  from processing.js by the Processing.js team. We would have had a hard time
  to figure all of that out on our own!

  Supported Adobe Indesign versions: CS 5, CS 5.5 and CS 6

  .--.--.- .-.-......-....--.-- -.... -..---.-.... .-- . .---.- -... -.-..---.-. ..--.-- -.. -
*/

/*
    B A F F E C T S . J S
    Bringing the spirit of the Processing visualization language to Adobe After Effects.

    License        - MIT

    Core
                  - Roberto Cabezas H http://instagram.com/rheadsh bbetoo@gmail.com


    random() and noise() functions were adapted from p5.js code.

    Tested on Adobe CC 2018 (15.0.0 Build 180) English version.

    Created in December 2017 with a grant support from CONACYT Mexico.
    2018 Kindly supported by CENTRO at the Digital Media and Technology Program.
    http://www3.centro.edu.mx/interaccion-medios-digitales/
*/

#target "AfterEffects";

(function(glob, app, undef) {

  /**
   * @class b
   * @static
   */
  var pub = {};

  // /**
  //  * The basil version
  //  * @property BASIL VERSION {String}
  //  * @cat Environment
  //  */
  pub.BASIL_VERSION = "1.0.10";

  // /**
  //  * The baffects version
  //  * @property BAFFECTS VERSION {String}
  //  * @cat Environment
  //  */
  pub.BAFFECTS_VERSION = "0.1Beta";

  #include "src/public-vars.js";
  #include "src/private-vars.js";
  #include "src/global-functions.js";

  #include "src/core.js";

  #include "src/data.js";
  #include "src/math.js";
  #include "src/math_random_noise.js";
  #include "src/environment.js"

  //AfterEffects implementations
  #include "src/after-effects-utilities.js";
  #include "src/after-effects-environment.js";
  #include "src/after-effects-constants.js";
  #include "src/after-effects-data.js";
  #include "src/after-effects-color.js";
  #include "src/after-effects-text.js";
  #include "src/after-effects-keyframes.js";
  #include "src/after-effects-masks.js";
  #include "src/after-effects-shapes.js";
  #include "src/after-effects-lightsandcam.js"
  #include "src/after-effects-transformation.js"

  init();

})(this, app);
