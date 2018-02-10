#include "../lib/baffects.js"

function setup() {
    b.cleanComp();
    b.background(0);
    
    var nx = 10*2;
    var ny = 6*2;
    var sx = b.width / nx;
    var sy = b.height / ny;
    var smx = sx / 2;
    var smy = sy / 2;
    
    b.strokeWeight(1);
    b.stroke(255);
    b.noFill();
    for (var y=0; y<ny; y++) {
        for (var x=0; x<nx; x++) {
            var rect = b.rect(0, 0, sx, sy);
            b.key(rect.position, 0, [b.random(b.width), b.random(b.height)]);
            b.key(rect.position, 1, [b.random(b.width), b.random(b.height)]);
            b.key(rect.position, 4, [b.random(b.width), b.random(b.height)]);
            b.key(rect.position, 5, [x*sx+smx, y*sy+smy]);
            b.speedAll(rect.position, 0.1, 90);
        }
    }
}


b.go();



