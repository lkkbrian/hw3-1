function setup() { 
  createCanvas(400, 400);
	background (80)
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
  } else if (key == 'E') {
    strokeWeight(20);
		stroke (80);
		fill (80);
  } 
}
