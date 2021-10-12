function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth / 2, windowHeight / 2);
  frameRate(10);
}

function draw() {
  circles();
}

function circles() {
  for (let i = 0; i < 464; i++) {
    if (mouseX < 300 && mouseX > 300) {
      fill(255, 255, 255);
    }

    if (mouseX < random() * 1000) {
      fill(0, 0, 0);
    }

    if (mouseX < random() * 700) {
      fill(249, 178, 72);
    }

    ellipse(random(windowWidth), random(windowHeight), random(50));
  }
}
