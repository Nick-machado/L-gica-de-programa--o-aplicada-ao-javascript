// * ********** TIPOS DE VALORES **********

console.log("********** TIPOS DE VALORES **********")

// * PRIMITIVOS

console.log("PRIMITIVOS")

// * 1. String: Armazena textos.
let nome = "Nicholas"; // Exemplo de string
console.log(nome); // Output: Nicholas

// * 2. Number: Armazena números (inteiros ou decimais).
let idade = 34; // Exemplo de número inteiro
let altura = 1.75; // Exemplo de número decimal
console.log(idade, altura); // Output: 34, 1.75

// * 3. BigInt: Números muito grandes.
let grandeNumero = 12345678901234567890n; // Nota: 'n' no final indica BigInt
console.log(grandeNumero); // Output: 12345678901234567890n

// * 4. Boolean: Armazena verdadeiro ou falso.
let ativo = true; // Exemplo de boolean
console.log(ativo); // Output: true

// * 5. Undefined: Declarada, mas sem valor.
let indefinido;
console.log(indefinido); // Output: undefined

// * 6. Null: Intencionalmente sem valor.
let vazio = null;
console.log(vazio); // Output: null

// * 7. Symbol: Valor único, usado como identificadores.
let id = Symbol("id");
console.log(id); // Output: Symbol(id)

// * NÃO PRIMITIVOS (REFERÊNCIA)

console.log("NÃO PRIMITIVOS (REFERÊNCIA)")

// * 1. Object: Estrutura com propriedades.
let pessoa = {
  nome: "Nicholas",
  idade: 34
};
console.log(pessoa.nome); // Output: Nicholas

// * 2. Array: Lista ordenada de valores.
let numeros = [1, 2, 3];
console.log(numeros[0]); // Output: 1

// * 3. Function: Blocos de código reutilizáveis.
function saudacao() {
    let x = 1 + 1
    return `O valor é ${x}`;
}
console.log(saudacao()); // Output: Olá!

// * 4. Date: Representa datas e horários.
let hoje = new Date();
console.log(hoje); // Output: Data atual

// * 5. Map e Set: Estruturas de dados especializadas.
let mapa = new Map();
mapa.set("chave", "valor");
console.log(mapa.get("chave")); // Output: valor

let conjunto = new Set([1, 2, 3]);
console.log(conjunto.has(2)); // Output: true

// ********** FORMAS DE DECLARAÇÃO **********

console.log("********** FORMAS DE DECLARAÇÃO **********")

// * 1. VAR: Escopo de função, comportamento de hoisting.
var x = 10; // Declarada e inicializada
if (true) {
  var x = 20; // Sobrescreve a variável no mesmo escopo
}
console.log(x); // Output: 20

// * 2. LET: Escopo de bloco, não permite redeclaração.
let y = 30;
if (true) {
  let y = 40; // Nova variável (escopo diferente)
  console.log(y); // Output: 40
}
console.log(y); // Output: 30

// * 3. CONST: Escopo de bloco, valor constante (imutável).
const z = 50;
// z = 60; // Erro: Não é permitido reatribuir const
console.log(z); // Output: 50

// Objetos e Arrays declarados com const podem ser modificados internamente.
const pessoaConst = { nome: "Ana" };
pessoaConst.nome = "Carlos"; // Permitido, pois estamos alterando a propriedade
console.log(pessoaConst.nome); // Output: Carlos

// ********** OPERADORES MATEMÁTICOS **********

console.log("********** OPERADORES MATEMÁTICOS **********")

// * 1. ADIÇÃO (+):

var x = 1 + 1
console.log(x)

// * 2. SUBTRAÇÃO (-):

var x = 2 - 1
console.log(x)

// * 3. MULTIPLICAÇÃO (*):

var x = 2 * 2
console.log(x)

// * 4. DIVISÃO (/):

var x = 6 / 3
console.log(x)

// * 5. RESTO DA DIVISÃO (%):

var x = 6 % 4
console.log(x)

// * 6. EXPONENCIAL - ELEVADO (**):

var x = 2 ** 2
console.log(x)

// ********** OPERADORES RELACIONAIS **********

console.log("********** OPERADORES RELACIONAIS **********")

// * 1. IGUAL (valor, não tipo) (==):

var x = 1
var a = "1"

if (x == a) {
  console.log(true)
} else {
  console.log(false)
}

// * 2. ESTRITAMENTE IGUAL (valor e tipo) (===):

var x = 1
var a = "1"

if (x === a) {
  console.log(true)
} else {
  console.log(false)
}

// * 3. DIFERENTE (valor, não tipo) (!=):

var x = 1
var a = "1"

if (x != a) {
  console.log(true)
} else {
  console.log(false)
}

// * 4. ESTRITAMENTE DIFERENTE (valor e tipo) (!==):

var x = 1
var a = "1"

if (x !== a) {
  console.log(true)
} else {
  console.log(false)
} 