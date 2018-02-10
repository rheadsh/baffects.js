#include "../lib/baffects.js"


function setup() {
	b.cleanComp();
	
	b.noFill();
	b.beginShape();
	b.vertex(b.width/2, b.height/2); //Choose init point
	var uno = b.endShape();
	b.key(uno.path, 0, uno.path.value);
	
	for (var k=0; k<7; k++) {
		b.beginShape(b.INACTIVE);
		for (var i=0; i<15; i++) {
			var x = b.random(b.width);
			var y = b.random(b.height);
			b.vertex(x, y);
		}
		var newPom = b.endShape();
		b.key(uno.path, k+1, newPom.path.value);
	}
}

b.go();


