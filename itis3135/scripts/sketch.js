let x = 15;

function setup() {
     createCanvas(600, 400).parent('drawing-container');

     colorMode(HSB);

     textSize(15);

     noLoop();
    }
    function draw() {
     background(220);

     fill(x / 3, 90, 90);
     circle(x, height / 2, 50);
     line(20, 200, 200, 350);

     x += 5;

     if (x > width + 15) {
        x = -15;
     }

     describe('circle moving to the right');
    }

    function mousePressed() {
        if (isLooping()) {
            noLoop();
        } else {
            loop();
        }
    }

    function keyPressed() {
        redraw();
    }