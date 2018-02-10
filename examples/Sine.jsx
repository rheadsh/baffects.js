#include "../lib/baffects.js"

var rect;

function setup() {
    rect = b.rect(100, 100, 100, 100);
}

function draw() {
    var f = b.frameCount;
    var t = b.frameTime;
    var val = [b.map(f, 0, b.getTotalFrames(), 0, b.width), (b.height/2) + b.sin(f*0.1)*260];
    b.key(rect.position, t, val);
}

b.go();