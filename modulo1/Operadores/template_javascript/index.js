//-----INTERPRETAÇÃO DE CÓDIGO-----

/*
1. As mensagens mostradas no console serão: 
 a. false
 b. false
 c. true
 d. boolean
*/
/*
2. O problema no código está nas variaveis que não foram convertidas para o tipo Number, o que não deixa a soma das mesmas acontecer.
No console, será impresso uma resposta, seguida da outra, já que o "+" também faz a funcção da vírgula no comando console.log().
*/
/*
3. 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/


//-----ESCRITA DE CÓDIGO-----

//1.
/*
let idade1 = Number(prompt("Qual a sua idade?"))
let idade2 = Number(prompt("Qual a idade de seu(sua) melhor amigo(a)?"))


console.log("Sua idade é maior que a do seu(sua) melhor amigo(a)?", idade1 > idade2)

let diferenca = idade1 - idade2

console.log("A diferença de idade entre vocês é de", diferenca, "anos.")
*/

//2.
/*
let numeroPar = Number(prompt("Escreva um número par"))

let resto = numeroPar % 2

console.log("O resto do número que você digitou, se dividido por 2 é ", resto)

// C) Números pares inteiros são todos divisíveis por 2, portanto, não existe resto de uma divisão exata.
// D) No caso de um número ímpar inteiro, o resto sempre será 1, já que o próximo número inteiro seria divisível por 2.
*/

//3.
/*
let idade = Number(prompt("Quantos anos você tem?"))
let idadeEmMeses = idade * 12
let idadeEmDias = idade * 365
let idadeEmHoras = idadeEmDias * 24

console.log("a) Você tem", idadeEmMeses, "meses de idade")
console.log("b) Você tem", idadeEmDias, "dias de idade")
console.log("c) Você tem", idadeEmHoras, "horas de idade")
*/

//4.

let numero1 = Number(prompt("Digite o primeiro número"))
let numero2 = Number(prompt("Digite o segundo número"))
let maior2 = numero1 > numero2
let igual2 = numero1 === numero2
let resto1 = numero1 % numero2
let resto2 = numero2 % numero1
let divisao1 = resto1 === 0
let divisao2 = resto2 ===0

console.log("O primeiro numero é maior que segundo?", maior2)
console.log("O primeiro numero é igual ao segundo?", igual2)
console.log("O primeiro numero é divisível pelo segundo?", divisao1)
console.log("O segundo numero é divisível pelo primeiro?", divisao2)
