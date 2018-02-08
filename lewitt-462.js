function setup (){
  createCanvas (340, 340);
}

for (var i = 0; i <= 700; i = i+30) {
  noFill();
  strokeWeight(10)
  ellipse (170, 0, i, i);
}
