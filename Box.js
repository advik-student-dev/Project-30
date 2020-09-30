class boxClass {
    constructor(x, y, width, height) {
        var options =
        {
            isStatic: false,
            restitution: 0.5,
            friction: 0.04,
            density: 0.001
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
    }
    display() {
        if (this.body.speed < 3) {
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 0.0005;
            tint(255, this.Visiblity);
            rect(this.Visiblity, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
    }
}











//class boxClass extends BaseClass {
    //constructor(x, y) {
      //super(x, y, 50, 50);
      //this.Visiblity = 255;
    //}

    //display() {
      //if (this.body.speed < 3) {
        //super.display();
      //}
      //else {
        //World.remove(world, this.body);
        //push();
        //this.Visiblity = this.Visiblity - 5;
        //tint(255, this.Visiblity);
        //rect(this.body.position.x, this.body.position.y, 50, 50);
        //pop();
      //}
    //}
//}