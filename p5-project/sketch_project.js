var bugs = []; // array of Jitter objects

function setup() {
  createCanvas(1000, 1000);
  // Create objects
  for (var i=0; i<100; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(244, 66, 158);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(50,150);
  this.speed =5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}