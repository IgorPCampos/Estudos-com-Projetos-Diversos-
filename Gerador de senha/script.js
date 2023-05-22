let slider = document.querySelector('#slider')
let button = document.querySelector('#button')
let tamanho = document.querySelector('#valor')
let password = document.querySelector('#password')
let container = document.querySelector('#container-password')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#@"
let novaSenha = ""

tamanho.innerHTML = slider.value

slider.oninput = function () {
    tamanho.innerHTML = this.value
}

function gerarSenha() {
    let pass = ""
    for (let i = 0, n = charset.length; i < slider.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }

    container.style.display = 'block'
    password.innerHTML = pass
    novaSenha = pass
}

function copiarSenha() {
    alert('Senha copiada')
    navigator.clipboard.writeText(novaSenha)
}