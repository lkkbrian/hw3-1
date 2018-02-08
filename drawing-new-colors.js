function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'P') {
    fill(213, 38, 222);
  } else if (key == 'O') {
    fill(222, 121, 38);
  } else if (key == 'B') {
    fill(38, 139, 222); 
  } else if (key == 'G') {
    fill(47, 222, 38); 
	} else if (key == 'Y') {
    fill(222, 216, 38); 
	} else if (key == 'V') {
    fill(142, 38, 222); 
	}
}
