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