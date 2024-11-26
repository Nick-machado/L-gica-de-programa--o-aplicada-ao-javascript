// ********** TIPOS DE VALORES **********

console.log("********** TIPOS DE VALORES **********");

// PRIMITIVOS
console.log("PRIMITIVOS");

// 1. String: Armazena textos.
let usuario = "Carlos";
console.log("String:", usuario);

// 2. Number: Armazena números (inteiros ou decimais).
let idadeUsuario = 29;
let peso = 72.5;
console.log("Number (inteiro):", idadeUsuario);
console.log("Number (decimal):", peso);

// 3. BigInt: Números muito grandes.
let numeroGigante = 98765432109876543210n;
console.log("BigInt:", numeroGigante);

// 4. Boolean: Armazena verdadeiro ou falso.
let isOnline = false;
console.log("Boolean:", isOnline);

// 5. Undefined: Declarada, mas sem valor.
let naoDefinido;
console.log("Undefined:", naoDefinido);

// 6. Null: Intencionalmente sem valor.
let valorNulo = null;
console.log("Null:", valorNulo);

// 7. Symbol: Valor único, usado como identificadores.
let identificador = Symbol("id");
console.log("Symbol:", identificador);

// NÃO PRIMITIVOS (REFERÊNCIA)
console.log("NÃO PRIMITIVOS (REFERÊNCIA)");

// 1. Object: Estrutura com propriedades.
let produto = { nome: "Caneta", preco: 2.5 };
console.log("Object:", produto);

// 2. Array: Lista ordenada de valores.
let frutas = ["maçã", "banana", "uva"];
console.log("Array:", frutas);

// 3. Function: Blocos de código reutilizáveis.
function somaNumeros(a, b) {
  return a + b;
}
console.log("Function:", somaNumeros(3, 4));

// 4. Date: Representa datas e horários.
let dataAtual = new Date();
console.log("Date:", dataAtual);

// 5. Map e Set: Estruturas de dados especializadas.
let mapaExemplo = new Map();
mapaExemplo.set("chave1", "valor1");
console.log("Map:", mapaExemplo.get("chave1"));

let conjuntoNumeros = new Set([10, 20, 30]);
console.log("Set:", conjuntoNumeros.has(20));

// ********** FORMAS DE DECLARAÇÃO **********

console.log("********** FORMAS DE DECLARAÇÃO **********");

// 1. VAR: Escopo de função, comportamento de hoisting.
var numero1 = 100;
if (true) {
  var numero1 = 200;
}
console.log("VAR número1:", numero1);

// 2. LET: Escopo de bloco, não permite redeclaração.
let numero2 = 300;
if (true) {
  let numero2 = 400;
  console.log("LET número2 dentro do bloco:", numero2);
}
console.log("LET número2 fora do bloco:", numero2);

// 3. CONST: Escopo de bloco, valor constante (imutável).
const numero3 = 500;
// numero3 = 600; // Erro: Não é permitido reatribuir const
console.log("CONST número3:", numero3);

// Objetos e Arrays declarados com const podem ser modificados internamente.
const objetoConst = { cor: "azul" };
objetoConst.cor = "verde";
console.log("CONST Object:", objetoConst.cor);

// ********** OPERADORES MATEMÁTICOS **********

console.log("********** OPERADORES MATEMÁTICOS **********");

console.log("5 + 3 =", 5 + 3); // Adição
console.log("10 - 6 =", 10 - 6); // Subtração
console.log("4 * 3 =", 4 * 3); // Multiplicação
console.log("8 / 2 =", 8 / 2); // Divisão
console.log("7 % 2 =", 7 % 2); // Resto
console.log("2 ** 3 =", 2 ** 3); // Exponenciação

// ********** OPERADORES RELACIONAIS **********

console.log("********** OPERADORES RELACIONAIS **********");

let valorA = 10;
let valorB = "10";
let valorC = 20;

console.log("valorA == valorB:", valorA == valorB); // Comparação de valor
console.log("valorA === valorB:", valorA === valorB); // Comparação de valor e tipo
console.log("valorA != valorC:", valorA != valorC); // Diferença de valor
console.log("valorA > valorC:", valorA > valorC); // Maior que

// ********** ESTRUTURAS CONDICIONAIS **********

console.log("********** ESTRUTURAS CONDICIONAIS **********");

let idadeUsuario2 = 16;

if (idadeUsuario2 < 18) {
  console.log("Menor de idade.");
} else if (idadeUsuario2 === 18) {
  console.log("Tem 18 anos.");
} else {
  console.log("Maior de idade.");
}

let permissao = idadeUsuario2 >= 18 ? "Permitido" : "Proibido";
console.log("Permissão:", permissao);

// ********** LAÇOS DE REPETIÇÃO (LOOPS) **********

console.log("********** LAÇOS DE REPETIÇÃO (LOOPS) **********");

// FOR: Número conhecido de iterações
for (let i = 0; i < 3; i++) {
  console.log(`Iteração ${i}`);
}

// WHILE: Repetição enquanto a condição é verdadeira
let contador2 = 0;
while (contador2 < 3) {
  console.log(`Contador: ${contador2}`);
  contador2++;
}

// DO...WHILE: Garante uma execução mínima
let numeroTeste = 3;
do {
  console.log(`Número: ${numeroTeste}`);
  numeroTeste--;
} while (numeroTeste > 0);

// FOR...OF: Itera sobre elementos de coleções
let listaNumeros = [1, 2, 3];
for (const num of listaNumeros) {
  console.log(num);
}

// FOR...IN: Itera sobre as propriedades de um objeto
let pessoaInfo = { nome: "Carlos", idade: 29 };
for (const propriedade in pessoaInfo) {
  console.log(`${propriedade}: ${pessoaInfo[propriedade]}`);
}

// CONTROLE DE LOOPS: BREAK e CONTINUE
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Sai do loop
  if (i % 2 === 0) continue; // Pula números pares
  console.log(i);
}

// ********** FUNÇÕES **********

console.log("********** FUNÇÕES **********");

// 1. Criando Funções
function soma(a, b) {
  return a + b;
}
console.log("Soma:", soma(2, 3)); // Output: 5

// 1.2. Tipos de Funções

// 1.2.1. Funções Nomeadas
function saudacao() {
  return "Olá!";
}
console.log("Função Nomeada:", saudacao()); // Output: Olá!

// 1.2.2. Funções Anônimas
const saudacaoAnonima = function () {
  return "Olá!";
};
console.log("Função Anônima:", saudacaoAnonima()); // Output: Olá!

// 1.2.3. Arrow Functions (Funções de Seta)
const multiplicar = (a, b) => a * b;
console.log("Arrow Function:", multiplicar(2, 3)); // Output: 6

// 1.3. Parâmetros e Valores Padrão
function multiplicarComPadrao(a, b = 1) {
  return a * b;
}
console.log("Com Valor Padrão:", multiplicarComPadrao(5)); // Output: 5

// 1.4. Funções como Argumentos (Callbacks)
function calcular(a, b, operacao) {
  return operacao(a, b);
}
const somar = (x, y) => x + y;
console.log("Callback Function:", calcular(2, 3, somar)); // Output: 5

// 1.5. Funções Recursivas
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
console.log("Fatorial:", fatorial(5)); // Output: 120

// ********** TRATAMENTO DE ERROS **********

console.log("********** TRATAMENTO DE ERROS **********");

// 2.1. Estrutura do try...catch
try {
  let resultado = 10 / 0; // Não gera erro, mas resulta em Infinity
  console.log("Resultado:", resultado); // Output: Infinity

  let obj;
  console.log(obj.nome); // Gera um erro porque 'obj' é undefined
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}

// 2.2. Bloco finally
try {
  let x = 10;
  console.log(x.toUpperCase()); // Isso vai gerar um erro
} catch (erro) {
  console.log("Erro capturado:", erro.message);
} finally {
  console.log("Bloco finally executado.");
}
// Output:
// Erro capturado: x.toUpperCase is not a function
// Bloco finally executado.

// 2.3. Lançando Erros com throw
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida!");
  }
  return a / b;
}

try {
  console.log("Divisão:", dividir(10, 0));  
} catch (erro) {
  console.log("Erro:", erro.message); // Output: Erro: Divisão por zero não é permitida!
}

// ********** ESCOPO E CONTEXTO **********

console.log("********** ESCOPO E CONTEXTO **********");

// ESCOPO

// 1. Escopo Global
let globalVar = "Sou global";

function testeEscopoGlobal() {
  console.log(globalVar); // Acessa a variável global
}
testeEscopoGlobal();

// 2. Escopo Local (Função)
function testeEscopoLocal() {
  let localVar = "Sou local";
  console.log(localVar); // Acessível dentro da função
}
testeEscopoLocal();
// console.log(localVar); // Erro: localVar não é definida

// 3. Escopo de Bloco
if (true) {
  let blocoVar = "Sou de bloco";
  console.log(blocoVar); // Acessível dentro do bloco
}
// console.log(blocoVar); // Erro: blocoVar não é definida

// CONTEXTO (this)

// 1. Contexto Global
console.log("Contexto Global:", this); // No navegador, é o objeto 'window'; no Node.js, é um objeto vazio {}

// 2. Dentro de Funções
function testeThis() {
  console.log("Dentro de uma função, this é:", this); // No modo estrito, undefined; fora dele, global object
}
testeThis();

// 3. Em Objetos
const obj = {
  nome: "Nicholas",
  saudacao: function () {
    return `Olá, ${this.nome}`;
  },
};
console.log(obj.saudacao()); // Output: Olá, Nicholas

// ********** ESTRUTURAS DE DADOS **********

console.log("********** ESTRUTURAS DE DADOS **********");

// 1. Arrays
let numeros = [10, 20, 30];
numeros.push(40); // Adiciona ao final
console.log("Array:", numeros);
console.log("Elemento no índice 1:", numeros[1]); // Output: 20

// 2. Objetos
let pessoa = { nome: "Nicholas", idade: 34 };
console.log("Objeto pessoa:", pessoa);
console.log("Nome da pessoa:", pessoa.nome);

// 3. Map
let mapa = new Map();
mapa.set("chave", "valor");
console.log("Valor no Map:", mapa.get("chave")); // Output: valor

// 4. Set
let conjunto = new Set([1, 2, 2, 3]);
console.log("Set:", conjunto); // Output: Set {1, 2, 3}

// ********** EVENTOS E TEMPORIZADORES **********

console.log("********** EVENTOS E TEMPORIZADORES **********");

// Eventos (Este exemplo funciona no navegador)
/*
document.querySelector("button").addEventListener("click", function () {
  console.log("Botão clicado!");
});
*/

// Temporizadores

// 1. setTimeout
setTimeout(() => {
  console.log("Executado após 2 segundos");
}, 2000);

// 2. setInterval
let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  if (contador === 5) {
    clearInterval(intervalo); // Para o intervalo
  }
}, 1000);

// ********** PROGRAMAÇÃO ASSÍNCRONA **********

console.log("********** PROGRAMAÇÃO ASSÍNCRONA **********");

// 1. Promises
let promessa = new Promise((resolve, reject) => {
  let sucesso = true;
  if (sucesso) {
    resolve("Deu certo!");
  } else {
    reject("Deu errado!");
  }
});

promessa
  .then((resultado) => console.log("Promise resolvida:", resultado))
  .catch((erro) => console.error("Promise rejeitada:", erro));

// 2. Async/Await
async function exemploAsync() {
  try {
    let resultado = await promessa;
    console.log("Resultado com async/await:", resultado);
  } catch (erro) {
    console.error("Erro com async/await:", erro);
  }
}
exemploAsync();

// ********** OPERADORES AVANÇADOS **********

console.log("********** OPERADORES AVANÇADOS **********");

// 1. Desestruturação

// Array
let [a, b] = [10, 20];
console.log("Desestruturação de array:", a, b); // Output: 10, 20

// Objeto
let { nome, idade } = { nome: "Nicholas", idade: 34 };
console.log("Desestruturação de objeto:", nome, idade); // Output: Nicholas, 34

// 2. Operador Spread (...)

let numerosOriginal = [1, 2, 3];
let novosNumeros = [...numerosOriginal, 4, 5];
console.log("Operador Spread em array:", novosNumeros); // Output: [1, 2, 3, 4, 5]

let objOriginal = { a: 1, b: 2 };
let novoObj = { ...objOriginal, c: 3 };
console.log("Operador Spread em objeto:", novoObj); // Output: { a: 1, b: 2, c: 3 }

// 3. Nullish Coalescing (??)
let valor = null;
console.log("Nullish Coalescing:", valor ?? "Valor padrão"); // Output: Valor padrão

let valorDefinido = "Texto";
console.log("Nullish Coalescing com valor:", valorDefinido ?? "Valor padrão"); // Output: Texto

// 4. Encadeamento Opcional (?.)
let pessoaObj = { nome: "Nicholas" };
console.log("Encadeamento Opcional:", pessoaObj?.idade); // Output: undefined

let pessoaComEndereco = { nome: "Ana", endereco: { cidade: "São Paulo" } };
console.log("Acessando propriedade existente:", pessoaComEndereco?.endereco?.cidade); // Output: São Paulo
console.log("Acessando propriedade inexistente:", pessoaComEndereco?.contato?.telefone); // Output: undefined