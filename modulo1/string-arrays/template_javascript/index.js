//-------INTERPRETAÇÃO DE CÓDIGO-------

/* (1.)
a. undefined
b. null
c. 11
d. 3
e. 11
f. 9
*/

/* (2.)

"SUBI NUM ÔNIBUS EM MIRROCOS"

*/


//-------ESCRITA DE CÓDIGO-------

/* (1.)
let nome = prompt("Digite seu nome de usuário:")
let email = prompt("Digite seu email:")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)
*/
// (2.)
/*
let comidas = ["pizza","churrasco","lasanha","brigadeiro","sorvete"]

console.log("a.", comidas)

console.log(`b. Essas são minhas comidas preferidas:
${comidas[0]};
${comidas[1]};
${comidas[2]};
${comidas[3]};
${comidas[4]}.`)

let usuario = prompt("Qual a sua comida preferida?")

console.log(`c. Essas são minhas comidas preferidas:
${comidas[0]};
${usuario};
${comidas[2]};
${comidas[3]};
${comidas[4]}.`)
*/
// (3.)

/* a. */ let listaDeTarefas = []

/* b. */ let tarefa1 = prompt("Diga uma tarefa que você faz durante o dia")
let tarefa2 = prompt("Diga outra tarefa que você faz durante o dia")
let tarefa3 = prompt("Diga mais uma tarefa que você faz durante o dia")

listaDeTarefas = [tarefa1, tarefa2, tarefa3]

/* c. */ console.log(listaDeTarefas)

/* d. */ let feito = Number(prompt(`Digite o número da tarefa que você já realizou hoje:
0 => ${tarefa1}
1 => ${tarefa2}
2 => ${tarefa3}`))

//let tarefas = listaDeTarefas -  [feito]

//console.log(tarefas)
listaDeTarefas.splice(feito,1)

console.log(listaDeTarefas)


/*

*/