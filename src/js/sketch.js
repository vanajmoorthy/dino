// no comments 4 u; pretty self-hExplanatory
let dino;
let cacti = [];

function setup() {
	createCanvas(800, 450);
    background(0);
	dino = new Dino();
}

function keyPressed() {
	if (key == " ") {
		dino.initialiseJump();
	} // Jump when key space is pressed
}
function draw() {
	// if (random(1) < 0.007) {
	// 	cactus = new Cactus();
	// 	cacti.push(cactus);
	// 	console.log("sup");
    // }
    
    // for (i = 0; i < cacti.length; i++) {
    //     cacti[i].show();
    //     cacti[i].move();
    // }

	// cacti.forEach(() => {
	// 	cactus.show();
	// 	cactus.move();
	// 	// console.log("kgjkdfgd");
	// });

	if (random(1) < 0.07) {
		cacti.push(new Cactus());
		console.log("sup");
	}

	for (let i = 0; i < cacti.length; i++) {
		cacti[i].move();
		cacti[i].show();
	}

	dino.show();
    dino.move();
}
