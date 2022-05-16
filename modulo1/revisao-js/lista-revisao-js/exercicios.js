// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = array.filter((i) => {
        return i % 2 === 0
    })
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let arrayAoQuadrado = []
 for (const numero of array) {
   if (numero % 2 === 0) {
     arrayAoQuadrado.push(numero*numero)
   }
 }
 return arrayAoQuadrado
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

  if (numero1 > numero2) {
    let numero
    let diferenca
    let modulo
    numero = num1
    diferenca = num1 - num2
    modulo = num1 % num2 === 0
  }else{
    numero = num2
    diferenca = num2 - num1
    modulo = num2 % num1 === 0
  }

  let doisNumeros = {
    maiorNumero: numero,
    maiorDivisivelPorMenor: modulo,
    diferenca: diferenca
  }
  return doisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const numero = []
   for (let i = 0; numero.length < n; i++) {
     if (i % 2 === 0) {
       numero.push(i)
     }
   }
   return numero
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB === ladoC) {
    return "Equilátero"
  } else if (ladoA ===) {

  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const array2 = array
  const maiorEMenor = []
  const maximo = array2.reduce(function(a,b){
    return Math.max(a, b - 1)
  })
  const minimo = array2.reduce(function(a,b){
    return Math.min(a, b + 1)
  })
  maiorEMenor.sort(maximo)
  maiorEMenor.push(minimo)
  return maiorEMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let frase = ""
   for (let ator of filme.atores) {
     frase += `${ator}, `
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const objeto = {
     ...pessoa,
     nome: "ANÔNIMO"
   }
   return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = []
   for (let pessoa of pessoas) {
     if ((pessoa.idade > 14 && pessoa.idade < 60) && pessoa.altura >= 1.5){
       pessoasAutorizadas.push(pessoa)
     }
   }
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = []
   for (let pessoa of pessoas) {
     if ((pessoa.idade <= 14 || pessoa.idade >= 60) || pessoa.altura <= 1.5){
       pessoasNaoAutorizadas.push(pessoa)
     }
   }
   return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a,b) => a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}