class CannonBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.trajetory = [];

    var options = {
      isStatic: true,
    };

    this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);

    this.Image = loadImage("./assets/cannonball.png");
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(15);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;


    if(this.body.velocity.x>0 && this.body.position.x>230){
      var position = [pos.x, pos.y];
      this.trajetory.push(position);
    }
   

    for(var i=0;i<this.trajetory.length;i+=1){
      image(this.Image,this.trajetory[i][0],this.trajetory[i][1],8,8)

    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.Image, 0, 0, this.r, this.r);
    pop();
  }
}
