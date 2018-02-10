#include "../lib/baffects.js"


function setup() {
    b.cleanComp();
    b.noStroke();
    
    var n = 0;
    for (var i=0; i<100; i++) {
        b.fill(b.random(), b.random(), b.random());
        var rect = b.rect(b.width/2, b.height/2, 100, 100);
        b.key(rect.scale, n, [0, 0]);
        b.key(rect.scale, n+2.3, [2000, 2000]);
        b.speedAll(rect.scale, 0.1, 90);
        
        b.key(rect.rotation, 0, 0);
        b.key(rect.rotation, b.random(0, b.getDuration()), 360*4);
        b.speedAll(rect.rotation, 0.1, 60);
        
        n += 0.1;
    }
}

b.go();