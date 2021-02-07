class Ball{
    constructor(x,y,radius){
        var options={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.2,
            'density':1.2
        }
        this.x = x;
        this.y = y;
       this.radius = radius;
        
        //this.image = loadImage('paper.png')
    
    
    this.body = Bodies.circle(this.x,this.y,this.radius,options)

    World.add(world,this.body);
}
display()
{
    var posPaper = this.body.position;
    //imageMode(CENTER)
   // image(this.image,posPaper.x,posPaper.y,100,100)
    ellipseMode(RADIUS)
    ellipse(posPaper.x,posPaper.y,this.radius,this.radius)
}
}

