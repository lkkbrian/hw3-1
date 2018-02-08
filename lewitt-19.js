function setup (){
  createCanvas (340, 340);
}

for (var i = 0; i <= 550; i = i+5) {
  noFill()
	quad (140-i, 0-i, 140-i, 0, 140, i, 140+i, 0)
}

for (var i = 0; i <= 140; i = i+5) {
  line (i, 0, i, 340);
}

for (var i = 0; i <= 340; i = i+5) {
  line (140, i, 340, i);
}
