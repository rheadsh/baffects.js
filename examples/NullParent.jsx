#include "../lib/baffects.js"


function setup() {
    b.cleanComp();
    
    var nullO = b.nullLayer();
    b.expression(nullO.position, "wiggle(1, 100)");
    
    b.fill(0, 0.4, 0);
    var center = b.ellipse(b.width/2, b.height/2, 20, 20);
    b.parent(nullO, center);
    
    b.fill(1);
    var white = b.rect(500, b.height/2, 50, 50);
    
    b.fill(1, 0, 0);
    var red = b.rect(800, b.height/2, 150, 150);
    
    b.parent(nullO, white);
    b.parent(nullO, red);
    
    b.expression(white.rotation, "time*100");
    b.expression(red.rotation, "time*200");
    b.expression(nullO.rotation, "time*100");
};

b.go();