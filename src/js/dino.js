class Dino {
    constructor() {
        this.r = 70; //size
        this.x = 50; //z
        this.y = height - this.r; //y = screensize - size
        this.velocity = 0; // init vel to 0 so no jump on default
        this.gravity = 0.0135; // gravity
        this.lastTimestep = null; // to make the game a function of time
    }

    initialiseJump() { // make vel -2.5 
        if (this.y == height - this.r) {
            this.velocity = -2.5;
        }
    }

    move() { //makes shit move
        let currTime = millis();
        
        if (this.lastTimestep == null) {
            this.lastTimestep = currTime;
        }
        
        let deltaTime = currTime - this.lastTimestep;
        this.lastTimestep = currTime;
        this.y += this.velocity * deltaTime;
        this.velocity += this.gravity * deltaTime;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() { //makes show
        noStroke();
        background(0);
        // clear();
        fill(200, 12, 255);
        rect(this.x, this.y, this.r, this.r);
    }
}
