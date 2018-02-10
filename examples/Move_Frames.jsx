#include "../lib/baffects.js"

var generalDuration = 60;


function setup() {
	for (var i=0; i<40; i++) {
		b.fill(b.random(), b.random(), b.random());
		b.solid();
	}
    var lays = b.getAllLayers();
	b.moveFrames(lays, 6, 0);
}

b.go("Render", generalDuration);


