function setup (){
  createCanvas (340, 340);
}

for (var i = 0; i <= 340; i = i+10) {
  noFill()
	quad (170, 170-i, 170-i, 170, 170, 170+i, 170+i, 170)
  line (i, 0, i, 340);
  line (0, i, 340, i);
}
