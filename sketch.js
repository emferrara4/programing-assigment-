var r, g, b;

function setup() {
  // put setup code here
    createCanvas(700,700);
    r = random(255);
    g = 0;
    b = random(255);

}

function draw() {
  // put drawing code here
    background(r, g, b);
}
function mousePressed(){
    r = random(255);
    b = random(255);
    background(r, g, b);
}
    

