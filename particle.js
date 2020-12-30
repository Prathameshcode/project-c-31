class Particle {
    constructor(x,y,radius) {
      var options = {
          restitution:0.4
      }
      this.body = Bodies.rectangle(x,y,radius,options);
      this.color=color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill(this.color);
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, 10);
      pop();
    }
  };
