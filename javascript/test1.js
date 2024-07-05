let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 150, 200, 200);
// c.rect(500, 500, 150, 150);
// c.strokeRect(400, 400, 100, 100);
// c.strokeStyle = 'green'
// c.stroke();
// console.log(canvas);

// line

// c.beginPath();
// c.moveTo(100, 100);
// c.lineTo(400, 300);
// c.lineTo(100, 200);
// c.lineTo(200, 300);
// c.lineTo(300, 400);
// c.lineTo(100, 500);
// c.lineWidth = 4;
// c.strokeStyle = "red";
// c.stroke();

// c.beginPath();
// c.arc(500, 500, 130, 0, Math.PI*2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (let i = 0; i < 100; i++) {
// 	let x = Math.random() * window.innerWidth;
// 	let y = Math.random() * window.innerHeight;

//   c.beginPath();
//   c.arc(x, y, 70, 0, Math.PI * 2, false);
//   c.strokeStyle = "yellow";
//   c.fillStyle = 'red'
//   c.stroke();
//   c.fill();
// }


// 15:00


let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.beginPath();
c.arc(x, y, radius, 0, Math.PI * 2, false);
c.strokeStyle = 'yellow';
c.fillStyle = 'green';
c.fill();
c.stroke();
if(x + radius > innerWidth || x - radius < 0){
	dx = -dx;
}

if(y + radius > innerHeight || y - radius < 0){
	dy = -dy;
}

x = x+dx;
y = y+dy;

console.log(innerHeight);
console.log(innerWidth);

}

animate();