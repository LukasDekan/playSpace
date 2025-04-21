// ---------------------------------------------------------
// CREATING THE CANNON

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  
    this.draw = function() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    };
  
    this.update = function() {
      this.x += this.velX;
      this.y += this.velY;
    };
  }

  function Barrell(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.angle = 0;
  
    this.draw = function() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.width / 2, -this.height, this.width, this.height);
      ctx.restore();
    };
  
    this.update = function(x, y) {
      this.x = x;
      this.y = y;
    };
  }
 

  let testBall = new Ball(50, 100, 4, 4, 'black', 30);

  let testBarrell = new Barrell(45, 100, 10, 60, 'red');


// ---------------------------------------------------------
// ROTATING THE CANNON
canvas.addEventListener("mousemove", function(e) {
  const dx = e.pageX - testBarrell.x;
  const dy = e.pageY - testBarrell.y;
  testBarrell.angle = Math.atan2(dy, dx);
});

let keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

function loop() {
  ctx.clearRect(0, 0, width, height);

  // Apply "force"
  if (keys["KeyW"]) testBall.velY -= 0.4;
  if (keys["KeyS"]) testBall.velY += 0.4;
  if (keys["KeyA"]) testBall.velX -= 0.4;
  if (keys["KeyD"]) testBall.velX += 0.4;

  // Apply friction (optional)
  testBall.velX *= 0.9;
  testBall.velY *= 0.9;

  // Update positions
  testBall.update();
  testBarrell.update(testBall.x, testBall.y);

  // Draw
  testBall.draw();
  testBarrell.draw();

  requestAnimationFrame(loop);
}

loop();

