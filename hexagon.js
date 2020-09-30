class hexagonClass {
    constructor(x, y, r) {
        var options =
        {
            isStatic: false,
            restitution: 0.001,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.r = r;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options);

        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

}