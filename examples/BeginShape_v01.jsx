#include "../lib/baffects.js"

function setup() {
    b.cleanComp();
	
    b.translate(b.width/2, b.height/2);

	b.noFill();
    b.stroke(1, 1, 0);
    b.beginShape();
    for (var t = 0; t <= b.TWO_PI*2; t += 0.001) {
        var x1 = 300 * (b.cos(1*t) - b.pow(b.cos(200*t),3));
        var y2 = 300 * (b.sin(1*t) - b.pow(b.sin(150*t),4));
        b.vertex(x1, y2);
    }
    var shape = b.endShape(); // endShape() returns a Properties object
	b.key(shape.position, [b.width/2, b.height/2]);
	var trim = b.shapeTrimPaths(shape.layer);
    trim.end.expression = "time*20";
}


b.go();



