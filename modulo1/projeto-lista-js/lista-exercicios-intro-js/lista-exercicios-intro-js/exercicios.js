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
  let tamanho = altura * altura
  return peso / tamanho
}
let peso = Number(prompt("Digite o seu peso"))
let altura = Number(prompt("Digite a sua altura"))

console.log(calculaIMC(peso, altura))

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
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}