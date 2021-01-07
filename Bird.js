class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.images = loadImage("sprites/smoke.png")
    this.traj=[]//empty array
  }

  display() {
    var pos = this.body.position
    if(pos.x>220 && this.body.velocity.x>10){
      var position = [pos.x,pos.y]
      this.traj.push(position)
    }
   for(var p=0;p<this.traj.length;p=p+1){
     image(this.images,this.traj[p][0],this.traj[p][1])
   }
    super.display();
  }
}
