let cor;
let horizontal;
let vertical;

function setup() {
  createCanvas(500, 500);
  background("rgb(28,73,28)");
  cor = color(random(0,255),random(0,255),random(0,255));
  horizontal = 250;
  vertical = 250;
}

function draw() {
  circle(horizontal,vertical,70);
  fill(cor);
  
  if(mouseX > horizontal){
    horizontal++
  }
   
  if(mouseX < horizontal){
    horizontal--
  }
 if(mouseY < vertical){
    vertical--
  }
   if(mouseY > vertical){
    vertical++
  }
  
  if(mouseIsPressed){
     cor = color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
     
}
