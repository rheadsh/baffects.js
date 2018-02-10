#include "../lib/baffects.js"

function setup() {
	b.cleanComp();
	b.background(0);
	
	b.noFill();
	b.beginShape(b.TRIANGLES);
	for (var k=0; k<10; k++) {
		b.strokeWeight(b.random(2, 30));
		b.stroke(b.random(), b.random(), b.random());
		for (var i=0; i<3; i++) {
			var x = b.random(b.width);
			var y = b.random(b.height);
			b.vertex(x, y);
		}
	}
	var sh = b.endShape();
	
	var trim = b.shapeTrimPaths(sh);
	b.key(trim.end, 0, 0);
	b.key(trim.end, 4, 100);
	b.speedAll(trim.end, 0.1, 90);
};

b.go();