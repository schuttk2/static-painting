function setup() {
  createCanvas(600, 600);
  background(255);
  noLoop();
}

function draw() {

  //red triangle
  fill(178, 35, 19);
  quad(600, 0, 600, 600, 500, 600, 250, 375);

  //bottom gray triangle
  fill(175, 180, 186);
  triangle(250, 375, 500, 600, 250, 600);

  //top middle triangle
  fill(209, 202, 192);
  quad(250, 375, 250, 0, 315, 0, 460, 150);

  //top right triangle
  fill(108, 98, 99);
  triangle(600, 0, 460, 150, 315, 0);

  //black triangle
  fill(44, 40, 39);
  beginShape();
  vertex(250, 600);
  vertex(250, 0);
  vertex(225, 0);
  vertex(0, 225);
  vertex(0, 350);
  endShape(CLOSE);

  //top right triangle
  fill(168, 172, 181);
  triangle(0, 0, 225, 0, 0, 225);

  //bottom white triangle
  fill(223, 216, 208);
  triangle(250, 600, 125, 475, 0, 600);

  //yellow triangle
  fill(210, 161, 69);
  triangle(0, 600, 125, 475, 0, 350);

}