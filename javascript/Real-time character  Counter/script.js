
const textareaEl = document.querySelector('#textarea');
const totalCounterEl = document.querySelector('#total-counter');

textareaEl.addEventListener('keyup', () =>{
    updateCounter()
});

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
}