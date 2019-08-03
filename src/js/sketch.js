let dino;
let cacti = [];

function setup() {
	createCanvas(800, 450);
    background(0);
    cactus = new Cactus();
	dino = new Dino();
}

function keyPressed() {
	if (key == " ") {
		dino.initialiseJump();
	}
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

	dino.show();
    dino.move();
    
    cactus.show();
    cactus.move();
}
