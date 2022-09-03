class Tower {
  constructor(x, y, w, h) {
    var options = {
      istatic: true,
    };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.body = Matter.Bodies.rectangle(
      this.x,
      this.y,
      this.w,
      this.h,
      options
    );

    this.Image = loadImage("assets/tower.png");
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.Image, 0, 0, this.w, this.y);
    pop()
  }
}
