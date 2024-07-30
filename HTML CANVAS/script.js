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

c.beginPath();
c.arc (500, 300, 30, 0, Math.PI *  2, false)
c.strokeStyle = 'blue'
c.stroke()

const getRandomColor = () =>{
    let text = "0123456788ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += text[Math.floor(Math.random() * 16)]
    }
    return color;
}


for(let i = 0; i < 10; i++){
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false)
    c.strokeStyle = getRandomColor()
    c.stroke()
}

// console.log(Math.floor(Math.random() * 16)) 


