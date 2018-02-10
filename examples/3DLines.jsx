#include "../lib/baffects.js"


function setup() {
    b.cleanComp();
    
    var n = 40;
    var s = b.width / n;
    var k = 2;
    
    b.set3DMode(b.ENABLE);
    b.strokeWeight(6);
    for (var i=0; i<n; i++) {
        var shape = b.line(0, i*s, i*s, 0);
        b.expression(shape.yrotation, "wiggle(0.2, 360)");
    }

    for (var i=0; i<n; i++) {
        var shape = b.line(b.width, i*s, i*s, b.height);
        b.expression(shape.yrotation, "wiggle(1, 360)");
    }
    
    var light = b.light();
    b.expression(light.intensity, "wiggle(4, 100)");
    var cam = b.camera();
    b.expression(cam.position, "wiggle(2, 2000)");
    
}

b.go("Quad", 2048, 2048, 10);