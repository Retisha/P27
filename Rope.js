class Rope{
    constructor(bodyA,pointB,x,y){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
           
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pointB = pointB;
        this.x = x;
    }
    
    
    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;//birds position
        var posB = this.pointB;
        strokeWeight(3)
        line(posA.x,posA.y,posB.x,posB.y)
        }
    }
}