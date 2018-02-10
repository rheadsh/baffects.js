#include "../lib/baffects.js"

var giveColor = true;


function setup() {
    b.cleanComp();
    b.background(0);
    
    var white = b.solid();
    b.beginMask();
    for (var i=0; i<1000; i++) {
        b.vertex(b.random(b.width), b.random(b.height));
    }
    b.endMask(white);
    
    
    var stroke = b.addFX(white, "Stroke");
    if (giveColor) {
        b.key(stroke.color, 0, [0, 0.4, 1]);
        b.key(stroke.color, b.getDuration(), [1, 0.7, 0.2]);
    }
    b.key(stroke.paintstyle, 2);
    b.key(stroke.brushsize, 3);
    b.key(stroke.end, 0, 0);
    b.key(stroke.end, b.getDuration()/2, 100);
   
    var turb = b.addFX(white, "Turbulent Displace");
    b.key(turb.size, 100);
    b.key(turb.amount, 1000);
    b.key(turb.evolution, 0, 0);
    b.key(turb.evolution, b.getDuration(), 1000);
};

b.go();