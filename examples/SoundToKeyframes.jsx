#include "../lib/baffects.js"

var ell, amp;

function setup() {
    b.cleanComp()
    var audio = b.loadItem("spectre.mp3");
    amp = b.audioToKeyframes(audio);
    ell = b.ellipse(b.width/2, b.height/2, 300, 300);
};

function draw() {
    var val = amp.both.keyValue(b.frameCount)*20;
    b.key(ell.scale, b.frameTime, [val, val]);
}

b.go();