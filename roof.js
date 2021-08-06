class roof {
    constructor (x,y,w,h){
        var options = {
            isStatic:true,
            restitution:0.5,
            friction:0,
            density:0.8
    }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body)
    
    }
    display(){
    var roof=this.body.position
    push()
    translate(roof.x,roof.y)
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
    }
    }