const hour = document.getElementById('hour');
const minute = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h > 12){
        h = h - 12;
        ampm = "pm";
    }

    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;

    setTimeout(() => {
        updateClock();
    },1000)
}

updateClock();