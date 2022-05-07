// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(alturaRetangulo, larguraRetangulo) {
  // implemente sua lógica aqui
  alturaRetangulo = Number(prompt('Digite a altura do retângulo'))
  larguraRetangulo = Number(prompt("Digite a largura do retângulo"))
  console.log(alturaRetangulo * larguraRetangulo)
}
calculaAreaRetangulo


// EXERCÍCIO 02

function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Digite o ano atual"))
  anoDeNascimento = Number(prompt("Digite o seu ano nascimento"))
  console.log(anoAtual - anoDeNascimento)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}
let peso = Number(prompt("Digite seu peso"))
let altura = Number(prompt("Digite sua altura"))

calculaIMC

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  nome = prompt('Digite seu nome:')
  idade = prompt('Digite sua idade:')
  email = prompt('Digite seu email:')
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
  cor1 = prompt('Digite sua cor favorita')
  cor2 = prompt('Digite outra cor favorita')
  cor3 = prompt('Digite mais uma cor favorita')

  let coresFavoritas = [`${cor1}`,`${cor2}`, `${cor3}`]
  console.log(coresFavoritas)
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}
string = prompt('Escreva uma frase:')


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let total = custo / valorIngresso
  return total
}
custo = Number(prompt("Qual o custo do espetáculo?"))
valorIngresso = Number(prompt("Qual o valor de cada ingresso?"))


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanho = string1.length === string2.length

  return tamanho
}
string1 = prompt("Digite uma frase ou palavra:")
string2 = prompt("Digite outra frase ou palavra:")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  ultimo = array.length - 1
  return array[ultimo]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let copoVazio = array[array.length - 1]
  array[array.length -1] = array[0]
  array[0] = copoVazio
  return array
}
let array = []


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}
string1 = prompt("Digite uma mensagem")
string2 = prompt("Digite outra mensagem")

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  console.log(((((anoN-nascimento) <= 20) && ((rg + 5) <= anoN)) && ((rg + 5) >= anoN)) || ((20 < (anoN-nascimento) <= 50) && ((rg + 10) <= anoN)) || ((anoN-nascimento) > 50) && ((rg + 15) <= anoN))
}
let anoN = Number(prompt("Qual o ano atual?")) 
let nascimento = Number(prompt("Qual seu ano de nascimento?"))
let rg = Number(prompt("Qual ano sua carteira de identidade foi emitida?"))


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)
}
let ano = Number(prompt("Digite um ano:"))


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let ensino = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt ("Você possui disponibilidade exclusiva durante o curso?")

  let incricao = (idade === "sim") && (ensino === "sim") && (disponibilidade == "sim")
  console.log(incricao)
}
