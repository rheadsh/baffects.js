#include "../lib/baffects.js"

function setup() {
    b.cleanComp();
    b.stroke(1, 0.67);
    b.noFill();
    
    for (var i=0; i<300; i++) {
        var x = b.sin(i*b.TWO_PI*0.5) * 200;
        var y = i*2;
        
        b.strokeWeight(b.random(1, 15));
        var r = b.random(30, 300);
        var ell = b.ellipse((b.width/2) + x, (b.height/5) + y, r, r);
        
        var trim = b.shapeTrimPaths(ell.layer);
        b.key(trim.offset, b.random(100));
        b.key(trim.end, 0, 0);
        b.key(trim.end, b.random(0, b.getDuration()), 100);
        b.speedAll(trim.end, 0.1, 90);
    }
};

b.go();