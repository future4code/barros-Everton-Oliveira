//-------INTERPRETAÇÃO DE CÓDIGO-------

/* (1.) a) Matheus Nachtergaele
Virginia Cavendish
{canal: Globo, horario: 14h}
*/


/* (2.) a) nome: Juca, idade: 3, raca: "SRD"
nome: Juba, idade: 3, raca: "SRD"
nome: Jubo, idade: 3, raca: "SRD"

b) Copia todos os dados dos objetos informados anteriormente.
*/

/*(2.) a) false 
undefined

b) false porque backender tem no objeto e undefined porque não tem altura no objeto
*/

//-------ESCRITA DE CÓDIGO-------

/*
//1. a)
const pessoa = {
    nome: "Everton", 
    apelidos: ["Evertinho", "Vertinho", "Verto"]
 }
 
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)

// b)
const outraPessoa = {
    ...pessoa,
    apelidos: ["Lindão", "Totoso", "BradPitt"]
}

console.log(`Eu sou ${outraPessoa.nome}, mas pode me chamar de ${outraPessoa.apelidos[0]}, ${outraPessoa.apelidos[1]} ou ${outraPessoa.apelidos[2]}.`)
*/

//2. a)

const pessoa1 = {
    nome: "Everton", 
    idade: 22,
    profissao: "Jogador profissional de Jokenpô"
}

const pessoa2 = {
     ...pessoa1,
    nome: "Jorge", 
    idade: 44,
    profissao: "Jogador amador de Jokenpô"
}

function pessoa(nome, nomeCaracteres, idade, profissao, profissaoCaracteres) {
    let array = []
	array[0] = nome
	array[1] = nomeCaracteres
	array[2] = idade
	array[3] = profissao
	array[4] = profissaoCaracteres
	console.log(array)

}
pessoa(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)

 pessoa(pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length)


 