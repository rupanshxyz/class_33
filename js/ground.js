class Ground {
    constructor(x, y, w, h) {
      var options = {
        isStatic: true,
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
  
     // this.Image = loadImage("C27-Ta-v4--main/assets/background.gif");
    }
  
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect( 0, 0, this.w, this.h);
      pop()
    }
  }
  