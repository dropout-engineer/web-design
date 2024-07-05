const input = document.querySelector('.input')
const body = document.querySelector('body')

input.checked = JSON.parse(localStorage.getItem('mode'))
updateText()

function updateText() {
    if(input.checked){
        body.style.background = 'black'
    }else{
        body.style.background = 'white'
    }
}

input.addEventListener('input', () => {
    updateText()
    updateLocalStorage()
})

function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(input.checked))
}