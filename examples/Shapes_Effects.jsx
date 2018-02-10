#include "../lib/baffects.js"

var n = 60;

function setup() {
    b.cleanComp();
    b.background(0);
    
    for (var i=0; i<n; i++) {
        b.stroke(0, i/n, 1);
        var line = b.line(0, i*20, b.width, i*20);
        var twist = b.shapeTwist(line.layer);
        b.key(twist.angle, 0, 0);
        b.key(twist.angle, i*0.333, i*100);
        b.expression(twist.center, "wiggle(0.3, 100)");
    }
};

b.go();