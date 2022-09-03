class Cannon {
  constructor(x, y, w, h, angle) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = angle;
  }

  display() {
    if (keyIsDown(LEFT_ARROW)) {
      this.angle -= 0.02;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.angle += 0.02;
    }
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rectMode(CENTER);
    fill("white");
    rect(0, 0, this.w, this.h);
    pop();

    arc(130, 180, 140, 140, PI, TWO_PI);
  }
}
