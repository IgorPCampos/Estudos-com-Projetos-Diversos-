function inserir(num) {
    document.querySelector('#resultado').innerHTML += num
}

function limpar() {
    document.querySelector('#resultado').innerHTML = ''
}

function apagar() {
    let resultado = document.querySelector('#resultado').innerHTML 
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
 
function calcular() {
    let resultado = document.querySelector('#resultado').innerHTML 
    if (resultado) {
        document.querySelector('#resultado').innerHTML = eval(resultado)
    } else {
        document.querySelector('#resultado').innerHTML = "Digite um número"
    }
    
}