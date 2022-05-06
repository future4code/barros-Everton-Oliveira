//-----EXERCICIOS DE INTERPRETAÇÃO-----
/*
1.a) O objeto, o índice e o array, da variável, separados.
*/
/*
2. a) 
Amanda Rangel
Laís Petra
Leticia Chijo
*/
/*
3. a)
{ nome: "Amanda Rangel", apelido: "Mandi" }
{ nome: "Laís Petra", apelido: "Laura" }
*/

//-----EXERCICIOS DE ESCRITA-----
/*
//1. a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const nomesPets = pets.map((pets) =>{
    console.log(pets.nome)
})
*/
/*
//b)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const filtrarPets = pets.filter((pets) =>{
    return pets.raca === "Salsicha"
})

console.log(filtrarPets)
*/
/*
//b)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const filtrarPets = pets.filter((pets) =>{
    if (pets.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)
    }
})
*/

//2.
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
*/
/*
//a)
const nomesProdutos = produtos.map((produtos) =>{
    console.log(produtos.nome)
})
*/

//b)
/*
function mapear(produtos) {
    let precoComDesconto = produtos.preco - (produtos.preco * 0.05)
    return {"nome": produtos.nome, "preço": precoComDesconto.toFixed(2)}
}

let arrayComDesconto = produtos.map(mapear)

console.log(arrayComDesconto)
*/
//c)
/*
const filtrarProdutos = produtos.filter((produtos) =>{
    if(produtos.categoria === "Bebidas") {
        console.log(produtos)
    }
})
*/
//d)
/*
const ype = produtos.filter ((produtos) =>{
    if (produtos.nome.includes ("Ypê")) {
        console.log(produtos)
    }
})
*/
//e)
/*
const fraseProdutos = produtos.filter ((produtos) =>{
    if (produtos.nome.includes("Ypê") === true) {
        console.log(`Compre ${produtos.nome} por R$${produtos.preco}`)
    }
})
*/