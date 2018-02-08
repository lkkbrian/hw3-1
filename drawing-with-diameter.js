function setup() { 
  createCanvas(400, 400);
} 

var diameter = 30;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == '1') {
    strokeWeight(10);
		fill (0);
  } else if (key == '2') {
    strokeWeight(20);
		fill (0);
  } else if (key == '3') {
    strokeWeight(30);
		fill (0);
  }
}
