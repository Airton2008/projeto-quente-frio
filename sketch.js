let x;
let y; 

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x)
  y = random(400);
  y = int(y)
}

function draw() {
  background('rgb(100,175,252)');
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  let distancia
  distancia = dist(mouseX,mouseY,y,x);
  circle(mouseX,mouseY,distancia);
        if(distancia > 60){
   fill('purple')
 }
    if(distancia < 60){
   fill('green')
 }
  //circle(x, y, 10);
  
  if(distancia < 3){
    text('parabéns!', 200, 200)
    noLoop();
  }
}
