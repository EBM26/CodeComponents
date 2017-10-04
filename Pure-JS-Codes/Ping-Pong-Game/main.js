

class Vec { // creating the vector class for coordinates
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

}

class Rect { // creating class for rectangles since we'll be using them so much
	constructor(w, h) {
		this.pos = new Vec;
		this.size = new Vec(w, h);
	}
}

class Ball extends Rect { // is a child of Rect
	constructor(){
		super(10, 10); // inherits functions from Rect
		this.vel = new Vec;
	}
}

const canvas = document.getElementById('pong'); // getting canvas
const context = canvas.getContext('2d'); // drawing on canvas

const ball = new Ball; // creating new ball and new positioning of it
ball.pos.x = 100;
ball.pos.y = 50;

function update(dt) { // function that updates position
	ball.pos.x += ball.vel.x * dt; // movement of the ball is relative to update time difference 
	ball.pos.y += ball.vel.y * dt;
	context.fillStyle = '#000' // make rectangle background black
	context.fillRect(0, 0, canvas.width, canvas.height); // drawing a rectangle on the canvas
	context.fillStyle = '#fff' // make small square background white
	context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y); // drawing a small square on the canvas

}
