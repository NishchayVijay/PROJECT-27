class bob {
constructor (x,y,r){
    var options = {
        isStatic:false,
        restitution:0.5,
        friction:0,
        density:0.8
}
this.x=x;
this.y=y;
this.r=r;

this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
World.add(world,this.body)

}
display(){
var bob=this.body.position
push()
translate(bob.x,bob.y)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)
pop()
}
}