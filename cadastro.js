let nomeParticipante = ["Maurício", "Roberta", "Rosangela"]
let nomePalestrante = ["Benício"]
let dataEvento = new Date("2020,11,13")
let dataAtual = new Date("2020,10,16")
let nomeEvento = ("Conferência")
let idades = [18, 23, 25, 19] //idade dos participantes
const buscaIdade = idades.find(elemento => elemento < 18)

if (dataEvento < dataAtual) { //verificando se a data do evento é posterior a data atual
    console.log("Evento não permitido! Data inválida.")

} else if(buscaIdade != undefined){ //verificando se há participante menor de 18 anos
    console.log("Cadastro não permitido. Participante menor de 18 anos.")

} else if(nomeParticipante.length>100){ //verificando se há mais de 100 participantes
    console.log("Cadastro não permitido. Evento excedeu o limite de 100 participantes")

}else{
    console.log("Cadastro Permitido")
    console.log("------------",`${nomeEvento}`,"------------") //evento permitido. Lista de participantes e palestrantes por evento
    console.log("Participantes:",`${nomeParticipante}`)
    console.log("Palestrante(s):", `${nomePalestrante}`)
}

