class Bob {
    constructor(x,y){
        var options ={
            isStastic: false,
            restitution: 1,
            friction: 0,
            density: 7.0,

        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);

        console.log(this.body);
    }

    display(){
        Push();
        ellipsemode(RADIUS);
        Fill(254,0,255);
        ellipse(this.body.position.x,this.body.position,y,25,25);
        Pop();
    }
}