// yeah I got bored of commenting

class Cactus {
	constructor() {
		this.r = 70;
		this.x = 1920;
		this.y = height - this.r;
		this.velocity = -1;
		this.lastTimestep = null;
	}

	move() {
		let currTime = millis();

		if (this.lastTimestep == null) {
			this.lastTimestep = currTime;
		}

		let deltaTime = currTime - this.lastTimestep;
		this.lastTimestep = currTime;

        this.x += this.velocity * deltaTime;
	}

	show() {
		noStroke();
		// clear(); 
		fill(200, 12, 255);
        rect(this.x, this.y, this.r - 40, this.r);
	}
}
