let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


//interactie 1 //

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', rotateHandler)
frontend.addEventListener('animationend', rotateHandler)

function rotateHandler(){
  frontend.classList.toggle('rotate')
}