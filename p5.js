let b1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  noStroke();
  fill(120,130,250);
  stroke(255);
  b1 = new Bubble("frienmd", random(windowWidth), random(windowHeight), 0.2);
}

function draw() {
  background(0,0,0);
  stroke(255);
  fill(150,150,250);
  
  b1.draw();
}

class Bubble {
  constructor(n, x, y, radius){
    this.name = n;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.vy = 1;
  }
  
  draw() {
    let rad = min(windowWidth, windowHeight)*this.radius;
    ellipse(this.x, this.y,rad);

    // the face
    fill(0)
    
    if(this.checkMouse(rad)) {
    arc(this.x, this.y - rad * .02,rad * 0.8,rad * 0.8, 0, PI, CHORD);
    } 
    else {
    line(this.x - rad/4, this.y + rad/4, this.x + rad/4, this.y + rad/4);
    }
    
    ellipse(this.x + rad * 0.2, this.y - rad * 0.2, rad * 0.2); 
    ellipse(this.x - rad * 0.2, this.y - rad * 0.2, rad * 0.2); 
    this.move();
  }
   
  move() {
    if(this.x > windowWidth || this.x < 0) {
      this.vx *= -1;
    }
    if(this.y>windowHeight || this.y < 0) {
      this.vy *= -1;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
  
  checkMouse(rad) {
    if(abs(this.x - mouseX) < rad/2 && abs(this.y - mouseY) < rad/2) {
      return true;
    }
  }
}