function TiaPatch(x, y) {
  fill(80, 20, 230);
  stroke(238);
  rect(x, y, 100, 100);
	
 	
  stroke(255, 127, 0);
  lines = 0;
  while (lines < 100) {
    line(x, y+100, x+100, y+lines);
    lines = lines + 4;
  }
   
  stroke(255, 127, 0);
  lines = 0;
  while (lines < 100) {
    line(x+100, y, x, y+lines);
    lines = lines + 4;
  }
  
  //letter T
  fill (0);
  noStroke();
  rect (x+42, y+22, 22, 62);
  rect (x+22, y+22, 62, 22);
  fill (255, 204, 0);
  noStroke();
  rect (x+40, y+20, 20, 60);
  rect (x+20, y+20, 60, 20);
   		
}

var x;
var y;
createCanvas(340, 340);
x = width;
y = height;

TiaPatch (width-100, height-100);
