#include "../lib/baffects.js"

function setup() {
	var x1, y1, x2, y2;
	
	b.cleanComp();
	
	x1 = 0;
	y1 = 0;
	x2 = 700;
	y2 = 700;
	
	b.anchorMode(5);
	b.line(x1, y1, x2, y2);
	b.line(x2, y2, b.width, 0);
	
	var m1 = b.lerp(x1, x2, 1);
	var m2 = b.lerp(y1, y2, 1);
	
	b.spatialMode(b.LINEAR);
	var rect = b.rect(m1, m2, 100, 100);
	b.key(rect.position, 0, [0, 0, 0]);
	b.key(rect.position, 4, [m1, m2, 0]);
	b.key(rect.position, 8, [b.width, 0, 0]);
	b.speedAll(rect.position, 0.1, 90);
};

b.go();