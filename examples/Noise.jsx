// This example is slooooooow. Working on optimizations to fix this at the moment

#include "../lib/baffects.js"

var nx, ny, sx, sy, s, sca, off;
var lines = [];

function setup() {
    b.cleanComp();
    b.background(0);
    
    nx = 10*3;
    ny = 6*3;
    sx = b.width / nx;
    sy = b.height / ny;
    
    sca = 0.1;
    off = 0;
    
    b.anchorMode(1);
    b.stroke(255);
    b.noiseSeed(390);
    
    for (var y=0; y<ny; y++) {
        for (var x=0; x<nx; x++) {
            var line = b.line(x*sx, y*sy, x*sx+sx, y*sy+sy);
            lines.push(line);
        }
    }
};

function draw() {
    for (var y=0; y<ny; y++) {
        for (var x=0; x<nx; x++) {
            var noi = b.noise(x*sca+off, y*sca+off)*360;
            var index = x+y*nx;
            var line = lines[index];
            b.key(line.rotation, b.frameTime, noi);
        }
    }
    off += 0.01;
};

b.go("Render", 5);