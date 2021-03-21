var s,m,h;
var sAngle;
var mAngle;
var hAngle;

function setup() {
  createCanvas(1000,600);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate(400,300);
  rotate(-90);
  h = hour();
  s = second();
  m = minute();
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h%12,0,12,0,360);
  push();
  rotate(sAngle);
  stroke('green');
  strokeWeight(7);
  line(0,0,110,0);
  pop();
  push();
  rotate(mAngle);
  stroke('blue');
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(hAngle);
  stroke('red');
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  stroke('yellow');
  point(0,0);
  strokeWeight(13);
  noFill();
  stroke('green');
  //width and height mean radius in arc() function
  arc(0,0,420,400,0,sAngle);
  
  stroke('blue');
  arc(0,0,400,380,0,mAngle);

  stroke('red');
  arc(0,0,380,360,0,hAngle);
}