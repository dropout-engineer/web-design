var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100)

console.log(canvas)

c.beginPath()
c.moveTo(100, 300)
c.lineTo(400, 100)
c.lineTo(400, 200)
c.lineTo(300, 100)
c.strokeStyle = '#fa34a3';
c.stroke()