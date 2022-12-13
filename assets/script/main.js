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


//interactie 2//

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', scaleHandler)
design.addEventListener('animationend', scaleHandler)

function scaleHandler(){
  design.classList.toggle('scale')
}

//interactie 3//

let btnAnd = document.querySelector('a:nth-of-type(3)')

btnAnd.addEventListener('dblclick', shakeHandler)
btnAnd.addEventListener('animationend', shakeHandler)

function shakeHandler(){
  btnAnd.classList.toggle('shake')
}

//interactie 4//

let develop = document.querySelector('a:nth-of-type(4)')

develop.addEventListener('click', flipHandler)
develop.addEventListener('animationend', flipHandler)

function flipHandler(){
  develop.classList.toggle('flip')
}