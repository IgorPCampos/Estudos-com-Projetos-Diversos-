const texto = document.querySelector('input')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const ul = document.querySelector('ul')

var itensDB = []

btnDeleteAll.onclick = () => {
  itensDB = [] // deixa vazio todo o vetor
  updateDB()
}

texto.addEventListener('keypress', e => {
  if (e.key == 'Enter' && texto.value != '') {
    setItemDB()
  }
})

btnInsert.onclick = () => {
  if (texto.value != '') {
    setItemDB()
  }
}

function setItemDB() {
  if (itensDB.length >= 20) {
    alert('Limite máximo de 20 itens atingido!')
    return
  }

  itensDB.push({ 'item': texto.value, 'status': '' }) //o status é pra verificar se está checked
  updateDB()
}

function updateDB() {
  localStorage.setItem('todolist', JSON.stringify(itensDB)) //o setItem vai colocar o vetor itensDB no localStorage com o nome todolist 
  loadItens()
}

function loadItens() {
  ul.innerHTML = ""; //Para nao repetir o que já foi colocado 
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? [] // o getItem vai pegar o vetor de nome todolist e colocar na variavel itensDB
  itensDB.forEach((item, i) => { // o indice serve para saber qual queremos excluir ou dar como checked
    insertItemTela(item.item, item.status, i)
  })
}

function insertItemTela(text, status, i) {
  const li = document.createElement('li')
  
  li.innerHTML = `
    <div class="divLi">
      <input type="checkbox" ${status} data=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data=${i}><i class='bx bx-trash'></i></button>
    </div>
    `
  ul.appendChild(li)

  if (status) { // Primeiramente o status chega vazio depois passa pela função done que preenche com o checked e volta aqui e adiciona a classe
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through') // Essa classe esta no css e faz com que sublinhe o texto na lista
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }

  texto.value = '' // isso faz com que o que foi digitado suma. Senao tivesse isso eu teria que apagar o texto e escrever outra coisa, fica mais pratica apagar o texto logo depois dele ser adicionado na lista
}

function done(chk, i) {

  if (chk.checked) {
    itensDB[i].status = 'checked' 
  } else {
    itensDB[i].status = '' 
  }

  updateDB()
}

function removeItem(i) {
  itensDB.splice(i, 1)
  /* o splice funciona assim
  const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1   ,   0   , 'Feb');
    o primeiro digito corresponde a posição do array, o segundo serve para saber quantos vai excluir/substituir e o terceiro pelo o que vai substituir se nao colocar nada vai so excluir
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
  */ 
  updateDB()
}

loadItens()