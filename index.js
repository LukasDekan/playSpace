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

    Ball.prototype.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      
  }

  function Barrell(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.angle = 0;

    Barrell.prototype.draw = function(){
      ctx.save();
      ctx.translate(this.x, this.y); 
      ctx.rotate(this.angle);        
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.width/2, -this.height, this.width, this.height); // draw barrel centered
      ctx.restore();
    }
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

function loop() {
  ctx.clearRect(0, 0, width, height);

  testBall.draw();       // optional: only if you want the ball
  testBarrell.draw();    // update barrel with current rotation

  requestAnimationFrame(loop);
}

loop();

