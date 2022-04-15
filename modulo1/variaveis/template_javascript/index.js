/*

----------Interpretação de Código----------

1. O primeiro valor a ser mostrado no console será 10. Já o segundo e terceiro valores, serão 10 e 5, respectivamente.

2. Serão impressos: 10 10 10 
Isso se dá pela ordem que as variáveis "c", "b" e "a" foram definidas.

3. O programa pergunta informações sobre a renda do usuário por dia e tenta informar, erroneamente, a renda por hora

Sugestão de nomes para as variáveis:
let quantasHorasVoceTrabalhaPorDia = prompt( "Quantas horas você trabalha por dia?" )
let quantoVoceRecebePorDia = prompt( "Quanto você recebe por ida?" )

*/


// ----------Escrita de Código----------

//  ------Exercício 1------

// ---(a, b, c, d)---

/*
let nome 
let idade 

console.log( typeof nome, idade )
*/

// A mensagem "undefined" é mostrada no console.Isso acontece por não existir um valor atribuído a nenhuma das duas variáveis.


// ---(e, f)---

/*
let nome = prompt( " Qual seu nome?" )
let idade = prompt( "Qual a sua idade?" )

console.log( nome, idade )
console.log( typeof nome, typeof idade )
*/

// Após atribuído um valor à variável, o tipo string é mostrado como variável, quando perguntado o typeof.


// ---(g)---

/*
let nome = prompt( " Qual seu nome? " )
let idade = prompt( " Qual a sua idade? " )

console.log( nome, idade )
console.log( "Olá!", nome, "você tem ", idade, " anos." )
*/

// ------Exercício 2------

/*
let fome =  prompt( "Você está com fome?" )
let pipoca = prompt( "Você gosta de pipoca?" )
let orkut = prompt( "Você usa orkut?" )

console.log( "Você está com fome?" , fome )
console.log( "Você gosta de pipoca?" , pipoca )
console.log( "Você usa orkut?" , orkut )
*/

// ------Exercício 3------

/*
let a = 1
let c = a
let b = 2

console.log( "O valor de a é" , a)
console.log( "O valor de b é" , b)
*/

// Aqui está a lógica para trocar os valores

/*
a = b
b = c

console.log( "O novo valor de a é" , a )
console.log( "O novo valor de b é" , b )
*/

//----------DESAFIO----------

let numero1 = prompt( "Qual o primeiro número?" )
let numero2 = prompt( "Qual o segundo número?" )

let numero1Convertido = Number(numero1)
let numero2Convertido = Number(numero2)

console.log( numero1, "+", numero2, "=", numero1Convertido+numero2Convertido )
console.log( numero1, "x", numero2, "=", numero1Convertido*numero2Convertido )
