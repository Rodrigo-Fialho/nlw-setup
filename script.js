const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) //Adiocionando a função no evento de cliclar.
form.addEventListener("change", save) //Salva se houve alguma alteração.

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //Criando com a data de hoje
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    //Verifica se dia já existe
    alert("Dia já incluso ❌")
    return
  }
  alert("Adicionado com Sucesso ✔")
  nlwSetup.addDay(today) //Adicionando dia
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
