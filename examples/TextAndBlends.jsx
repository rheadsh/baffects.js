#include "../lib/baffects.js"


var op = 2;

function setup() {
    b.cleanComp();
    b.background(0);

    switch (op) {
        case 1:
            b.blendMode(b.CLASSIC_DIFFERENCE);
            for (var i = 0; i < 10; i++) {
                var shape = b.ellipse(b.random(b.width), b.random(b.height), b.random(400), b.random(400));
                var twist = b.shapeTwist(shape);
                b.key(twist.angle, b.random(200, 600));
                b.expression(twist.center, "seedRandom(123123, 1); wiggle(random(0.1, 4), 200);");

                var wigg = b.shapeWigglePaths(shape);
                b.key(wigg.detail, b.random(0.1, 2));
                b.key(wigg.points, 2);
            }

            b.fill(0);
            b.stroke(1, 1, 0);
            b.strokeWeight(60);
            b.textSize(300);
            b.textFont("Helvetica-Bold");
            var text = b.text("Baffects.js", b.width / 2, b.height / 2);
            break;

        case 2:
            for (var i = 0; i < 100; i++) {
                var shape = b.ellipse(b.random(b.width), b.random(b.height), b.random(400), b.random(400));
                var twist = b.shapeTwist(shape);
                b.key(twist.angle, b.random(200, 600));
                b.expression(twist.center, "seedRandom(123123, 1); wiggle(random(0.1, 4), 200);");

                var wigg = b.shapeWigglePaths(shape);
                b.key(wigg.detail, b.random(0.1, 2));
                b.key(wigg.points, 2);
            }

            b.blendMode(b.STENCIL_ALPHA);
            b.fill(1);
            b.textSize(300);
            b.textFont("Helvetica-Bold");
            var text = b.text("Baffects.js", b.width / 2, b.height / 2);
            break;

        case 3:
            for (var i = 0; i < 100; i++) {
                var shape = b.ellipse(b.random(b.width), b.random(b.height), b.random(400), b.random(400));
                var twist = b.shapeTwist(shape);
                b.key(twist.angle, b.random(200, 600));
                b.expression(twist.center, "seedRandom(123123, 1); wiggle(random(0.1, 4), 200);");

                var wigg = b.shapeWigglePaths(shape);
                b.key(wigg.detail, b.random(0.1, 2));
                b.key(wigg.points, 2);
            }

            b.blendMode(b.STENCIL_ALPHA);
            b.fill(1, 1, 0);
            b.textSize(300);
            b.textFont("Helvetica-Bold");
            var text = b.text("Baffects.js", b.width / 2, b.height / 2);
            break;
    }
};

b.go();