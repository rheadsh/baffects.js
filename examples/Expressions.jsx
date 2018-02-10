#include "../lib/baffects.js"

function setup() {
    b.cleanComp();
    b.background(0);
    
    var nx = 10;
    var ny = 6;
    var sx = b.width / nx;
    var sy = b.height / ny;
    var smx = sx / 2;
    var smy = sy / 2;
    
    b.strokeWeight(2);
    b.stroke(1);
    b.noFill();
    for (var y=0; y<ny; y++) {
        for (var x=0; x<nx; x++) {
            var shape = b.rect(x*sx+smx, y*sy+smy, sx, sy);
            b.expression(shape.position, "seedRandom(1234, 1); wiggle(random(0.1, 0.333), 150)");
        }
    }
}


b.go();



