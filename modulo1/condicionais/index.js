//-----INTERPRETAÇÃO DE CÓDIGO-----
/*
1. a) Ele pede um número ao usuário, divide esse número por 2 e confere se a resposta dessa divisão é igual a zero. Depois disso, retorna uma resposta ao usuário de acordo com o resultado desses comandos.

b) Para os números pares.

c) Números ímpares.
*/
/*
2. a) Para perguntar uma fruta ao usuário e dar o preço da mesma.

b) O preço da fruta Maçã é R$ 2.25
*/
/*
3. a) Está declarando uma variável e pedindo um número ao usuário. Também está convertendo essa resposta para number.
*/
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
    console.log("Esse número passou no teste")

} else {
    console.log("Essa mensagem é secreta!!!")
}

b) A mensagem será "Este número passou no teste", e abaixo uma mensagem de erro, já que a variável mensagem não está sendo declarada no lugar correto. No caso de um número negativo, a resposta do console será apenas a mensagem de erro da variavel mensagem.

c) Haverá um erro porque a variável está sendo declarada dentro do escopo if, portanto não será acessada quando for requisitada fora dele.
*/

//-----ESCRITA DE CÓDIGO-----

//1.
///*a)*/let idade = /*b)*/Number(prompt("Qual a sua idade?"))

///*c)*/if (idade >= 18) {
//    console.log("Você pode dirigir")
//}else {
//    console.log("Você não pode dirigir")
//}

//2.
/*let turno = prompt(`Qual turno você estuda?
Digite "M" (matutino/manhã)
Digite "V" (vespertino/tarde)
Digite "N" (noturno/noite)`)

if (turno === "M") {
    console.log("Bom dia!")
}else if (turno === "V") {
    console.log("Boa tarde!")
}else if (turno === "N") {
    console.log("Boa noite!")
}
*/
/*
//3.
let turno = prompt(`Qual turno você estuda?
Digite "M" (matutino/manhã)
Digite "V" (vespertino/tarde)
Digite "N" (noturno/noite)`)

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
}
*/

//4. 
let filme = prompt("Qual o gênero do filme?")
let valor = Number(prompt("Qual o valor do ingresso?"))

if (filme === "Fantasia" && valor < 15) {
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme :(")
}



