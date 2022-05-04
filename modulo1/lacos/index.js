//----------EXERCICIOS INTERPRETAÇÃO----------

/* 1- Está imprimindo o valor da soma de todos os números menores que 5, a partir do 0. O número impresso é 10.
*/
/*
//2.
a) 19
21
23
25
27
30

b) 
*/
/*
3. 
*
**
***
****
*/


//--------ESCRITA DE CÓDIGO--------

/*
//1. 
let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomesBichinhos = []

if (bichinhos == 0) {
    console.log("Que pena! Você pode adotar um pet!")
}else {
    for (let i = 0; i < bichinhos ; i++) {
        const nome = prompt("Digite, um por um, o nome dos seus bichinhos:")
        nomesBichinhos.push(nome)
    }
}

console.log(nomesBichinhos)
*/
//2.
/* 
a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let B = 0; B < arrayOriginal.length; B++) {
    const arrayOriginal2 = arrayOriginal[B];
    console.log(arrayOriginal2);
}
*/
/*
//b) let numeros = [80, 30, 130, 40, 60]

for (let num of numeros) {
    numeros = num / 10
    console.log(numeros)
}
*/
/*
// c)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayPares = []
    for(let valor of arrayOriginal) {
        if(valor % 2 === 0) {
            arrayPares.push(valor)
        }
    }
console.log(arrayPares)
*/
/*
//d)
let arrayStrings = []
let i = 0
for(let valor of arrayOriginal) {
    arrayStrings.push(`O elemento do index ${i} é: ${valor}`)
    i++ 
}

console.log(arrayStrings)
*/
/*
c)
let maiorNumero = 0
let menorNumero = arrayOriginal[0]

for (let numero of arrayOriginal) {
    if (numero > maiorNumero){
        maiorNumero = numero
    } else if (numero < menorNumero)
    menorNumero = numero
}

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}.`)
*/