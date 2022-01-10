let body = document.querySelector("body")
let btn = document.querySelector("button")
let colores = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

btn.addEventListener('click', unicoBackground)

function unicoBackground() {
    body.style.backgroundColor = 'blue';
}


btn.addEventListener('click', cambiarBackground)

function cambiarBackground() {
    let colorIndice = parseInt(Math.random() * colores.length)
    console.log(colorIndice)
    body.style.backgroundColor = colores[colorIndice]
}
