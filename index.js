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

  function Barrell(x, y, width, height, color, size){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.size = size;
        Barrell.prototype.draw = function(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fill();
    }
  }
 

  let testBall = new Ball(50, 100, 4, 4, 'black', 30);
  testBall.draw();

  let testBarrell = new Barrell(45, 100, 10, 60, 'red', 40);
  testBarrell.draw();


// ---------------------------------------------------------
// ROTATING THE CANNON
// <this is where I left off>
const box = document.querySelector('canvas');
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function rotateCannon(event) {
    pageX.testBarrell = event.pageX;
    pageY.testBarrell = event.pageY;
}

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);

