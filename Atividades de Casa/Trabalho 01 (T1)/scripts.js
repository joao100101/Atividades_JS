function trocarCor(){
let corAnterior = "a"
    let cores = ["red", "cyan", "pink", "blue", "white", "orange", "yellow"]
    let aleatorio = Math.round(Math.random() * 6)
    
    document.body.style.backgroundColor = cores[aleatorio]
}