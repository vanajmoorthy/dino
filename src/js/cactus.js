// yeah I got bored of commenting

class Cactus {
	constructor() {
		this.size = 70;
		this.x = width;
		this.y = height - this.size;
		this.velocity = -1
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
		// clear(); 
		fill(200, 12, 255);
        rect(this.x, this.y, this.size - 40, this.size);
	}
}
