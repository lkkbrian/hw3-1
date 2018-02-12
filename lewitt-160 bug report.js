function setup (){
  createCanvas (300, 300);
}

for (var i = 0; i>=0; i = i+5) {
	background(255)
  noFill();
  stroke (0)
  rect (20, 20, 300, 300)
  stroke(255, 0, 0)
  line (mouseX-100, mouseY-100, mouseX+100, mouseY+100);
  line (mouseX-100, mouseY+100, mouseX+100, mouseY-100);
}



The whole thing is technically correct, but shouldn't the red lines be fixed in place rather than determined by where the mouse is?
