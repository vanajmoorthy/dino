class Dino {
    constructor() {
        this.r = 70;
        this.x = 50;
        this.y = height - this.r;
        this.velocity = 0;
        this.gravity = 0.0135;
        this.lastTimestep = null;
    }

    initialiseJump() {
        if (this.y == height - this.r) {
            this.velocity = -2.5;
        }
    }

    move() {
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

    show() {
        noStroke();
        background(0);
        // clear();
        fill(200, 12, 255);
        rect(this.x, this.y, this.r, this.r);
    }
}
