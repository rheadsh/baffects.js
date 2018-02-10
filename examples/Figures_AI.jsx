// For this example you have to save the .ae file

#include "../lib/baffects.js"

var generalDuration = 30;


function setup() {
    b.background(0.8);
    
    var comp = b.loadAI("figures.ai", generalDuration);
    b.setComp(comp);
    b.setDuration(generalDuration);
    b.background(0.8);
    
    var lines = b.createShapes();
    var n = 0;
    for (var i=0; i<lines.length; i++) {
        var trim = b.shapeTrimPaths(lines[i].layer);
        b.key(trim.end, 0, 0);
        b.key(trim.end, n+0.4, 100);
        b.expression(trim.end, "loopOut('pingpong')");
        n += 0.01;
    }
}

b.go("Render", generalDuration);


