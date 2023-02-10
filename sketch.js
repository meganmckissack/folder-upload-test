function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  
   fill(100);
  for(let i = 0; i <= width; i+= 20) {
    for(let j = 0; j <= height; j+= 20) {
      circle(mouseX, mouseY, 10);
    }
}
