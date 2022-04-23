//-------INTERPRETAÇÃO DE CÓDIGO-------

/*(1.)
a. 10   50

b. O valor resultado da função não seria impresso no console. Não teria nada impresso no console.
*/

/*(2.)
a. A função coloca todo o texto inserido pelo usuário em minúsculo e checa se a palavra "cenoura" está presente no texto. Se sim, a função retorna positivo, se não, retorna negativo.A

b. i. true      ii. true        iii. true
*/

//-------ESCRITA DE CÓDIGO-------

/* (1.)
function imprimirInfo() {
    let nome = "Everton"
    let idade = "22"
    let cidade = "São Leopoldo"
    let profissao = "estudante"
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

imprimirInfo()
*/

/* (2.) a.
function soma(num1, num2) {
    num1 = Number(prompt('Digite o primeiro número'))
    num2 = Number(prompt('Digite o segundo número'))
    
    console.log(num1 + num2)
}
soma()
*/

/* b.
function maiorOuIgual(num1, num2) {
    num1 = Number(prompt('Digite o primeiro número'))
    num2 = Number(prompt('Digite o segundo número'))
    
    console.log(num1 >= num2)
}
maiorOuIgual()
*/

/* c.
function par(num1) {
    num1 = Number(prompt('Digite um número'))
    resto = num1 % 2
    console.log(resto < 1)
}
par()
*/

/* d.
function mensagem(string) {
    string = prompt('Escreva uma frase')
    stringMaiuscula = string.toUpperCase()
    caracteres = string.length
    console.log(`${stringMaiuscula} tem ${caracteres} caracteres de tamanho.`)
}
mensagem()
*/

/* (3.)
let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))

function soma(num1, num2) {
    return num1 + num2
}
function diferenca(num1, num2) {
    return num1 - num2
}
function multiplicacao(num1, num2) {
    return num1 * num2
}
function divisao(num1, num2) {
    return num1 / num2
}
console.log(`Números inseridos: ${num1} e ${num2}
Soma: ${soma(num1, num2)}
Diferença: ${diferenca(num1, num2)}
Multiplicação: ${multiplicacao(num1, num2)}
Divisão: ${divisao(num1, num2)}`)
*/


//-----DESAFIOS-----

/* (2.)
function pitagoras(catA, catB) {
    catA = Number(prompt("Digite o cateto a"))
    catB = Number(prompt("Digite o cateto b"))

    catA2 = Math.pow(catA, 2)
    catB2 = Math.pow(catB, 2)
    hip2 = catA2 + catB2
    console.log(Math.pow(hip2,1/2))
}
pitagoras()
*/