# Guia Básico de JavaScript

Este repositório contém exemplos básicos de JavaScript, abordando diversos conceitos fundamentais da linguagem. Cada seção inclui código de exemplo e explicações amigáveis para iniciantes.

---

## Índice

- [Tipos de Valores](#tipos-de-valores)
  - [Primitivos](#primitivos)
    - [String](#string)
    - [Number](#number)
    - [BigInt](#bigint)
    - [Boolean](#boolean)
    - [Undefined](#undefined)
    - [Null](#null)
    - [Symbol](#symbol)
  - [Não Primitivos (Referência)](#não-primitivos-referência)
    - [Object](#object)
    - [Array](#array)
    - [Function](#function)
    - [Date](#date)
    - [Map e Set](#map-e-set)
- [Formas de Declaração](#formas-de-declaração)
  - [var](#var)
  - [let](#let)
  - [const](#const)
- [Operadores Matemáticos](#operadores-matemáticos)
- [Operadores Relacionais](#operadores-relacionais)
- [Estruturas Condicionais](#estruturas-condicionais)
- [Laços de Repetição (Loops)](#laços-de-repetição-loops)
- [Funções](#funções)
- [Tratamento de Erros](#tratamento-de-erros)
- [Escopo e Contexto](#escopo-e-contexto)
- [Estruturas de Dados](#estruturas-de-dados)
- [Eventos e Temporizadores](#eventos-e-temporizadores)
- [Programação Assíncrona](#programação-assíncrona)
- [Operadores Avançados](#operadores-avançados)

---

## Tipos de Valores

### Primitivos

Os tipos primitivos são os tipos básicos de dados em JavaScript. Eles armazenam valores simples e imutáveis.

#### String

Strings são usadas para armazenar texto.

```javascript
let usuario = "Carlos";
console.log("String:", usuario);
```

#### Number

Armazena números, sejam inteiros ou decimais.

```javascript
let idadeUsuario = 29;
let peso = 72.5;
console.log("Number (inteiro):", idadeUsuario);
console.log("Number (decimal):", peso);
```

#### BigInt

Utilizado para representar números inteiros de precisão arbitrária.

```javascript
let numeroGigante = 98765432109876543210n;
console.log("BigInt:", numeroGigante);
```

#### Boolean

Armazena valores verdadeiros (`true`) ou falsos (`false`).

```javascript
let isOnline = false;
console.log("Boolean:", isOnline);
```

#### Undefined

Representa uma variável que foi declarada, mas não possui valor atribuído.

```javascript
let naoDefinido;
console.log("Undefined:", naoDefinido);
```

#### Null

Representa a ausência intencional de qualquer valor.

```javascript
let valorNulo = null;
console.log("Null:", valorNulo);
```

#### Symbol

Usado para criar identificadores únicos.

```javascript
let identificador = Symbol("id");
console.log("Symbol:", identificador);
```

### Não Primitivos (Referência)

Esses tipos são objetos que armazenam referências a valores.

#### Object

Objetos são coleções de propriedades, que são pares de chave e valor.

```javascript
let produto = { nome: "Caneta", preco: 2.5 };
console.log("Object:", produto);
```

#### Array

Arrays são listas ordenadas de valores.

```javascript
let frutas = ["maçã", "banana", "uva"];
console.log("Array:", frutas);
```

#### Function

Funções são blocos de código que podem ser executados quando chamados.

```javascript
function somaNumeros(a, b) {
  return a + b;
}
console.log("Function:", somaNumeros(3, 4));
```

#### Date

Usado para trabalhar com datas e horários.

```javascript
let dataAtual = new Date();
console.log("Date:", dataAtual);
```

#### Map e Set

Estruturas de dados especializadas.

**Map** é usado para mapear valores a chaves.

```javascript
let mapaExemplo = new Map();
mapaExemplo.set("chave1", "valor1");
console.log("Map:", mapaExemplo.get("chave1"));
```

**Set** é uma coleção de valores únicos.

```javascript
let conjuntoNumeros = new Set([10, 20, 30]);
console.log("Set:", conjuntoNumeros.has(20));
```

---

## Formas de Declaração

Em JavaScript, podemos declarar variáveis usando `var`, `let` ou `const`.

### var

Tem escopo de função e permite redeclaração.

```javascript
var numero1 = 100;
if (true) {
  var numero1 = 200;
}
console.log("VAR número1:", numero1); // Output: 200
```

> **Nota:** A variável `numero1` foi sobrescrita dentro do bloco `if` devido ao escopo de função do `var`.

### let

Tem escopo de bloco e não permite redeclaração no mesmo escopo.

```javascript
let numero2 = 300;
if (true) {
  let numero2 = 400;
  console.log("LET número2 dentro do bloco:", numero2); // Output: 400
}
console.log("LET número2 fora do bloco:", numero2); // Output: 300
```

> **Nota:** O `numero2` dentro do bloco `if` é uma nova variável, diferente da fora do bloco.

### const

Também tem escopo de bloco e não permite reatribuição.

```javascript
const numero3 = 500;
// numero3 = 600; // Erro: Não é permitido reatribuir const
console.log("CONST número3:", numero3); // Output: 500
```

> **Nota:** Embora não possamos reatribuir `numero3`, podemos modificar propriedades internas se for um objeto ou array.

```javascript
const objetoConst = { cor: "azul" };
objetoConst.cor = "verde";
console.log("CONST Object:", objetoConst.cor); // Output: verde
```

---

## Operadores Matemáticos

Usados para realizar operações aritméticas.

```javascript
console.log("5 + 3 =", 5 + 3);     // Adição
console.log("10 - 6 =", 10 - 6);   // Subtração
console.log("4 * 3 =", 4 * 3);     // Multiplicação
console.log("8 / 2 =", 8 / 2);     // Divisão
console.log("7 % 2 =", 7 % 2);     // Resto da divisão
console.log("2 ** 3 =", 2 ** 3);   // Exponenciação
```

---

## Operadores Relacionais

Usados para comparar valores.

```javascript
let valorA = 10;
let valorB = "10";
let valorC = 20;

console.log("valorA == valorB:", valorA == valorB);    // true (compara valor)
console.log("valorA === valorB:", valorA === valorB);  // false (compara valor e tipo)
console.log("valorA != valorC:", valorA != valorC);    // true
console.log("valorA > valorC:", valorA > valorC);      // false
```

---

## Estruturas Condicionais

Permitem executar código baseado em condições.

```javascript
let idadeUsuario2 = 16;

if (idadeUsuario2 < 18) {
  console.log("Menor de idade.");
} else if (idadeUsuario2 === 18) {
  console.log("Tem 18 anos.");
} else {
  console.log("Maior de idade.");
}
```

Também podemos usar o operador ternário para condições simples:

```javascript
let permissao = idadeUsuario2 >= 18 ? "Permitido" : "Proibido";
console.log("Permissão:", permissao); // Output: Proibido
```

---

## Laços de Repetição (Loops)

Permitem executar um bloco de código múltiplas vezes.

### For

Usado quando sabemos o número de iterações.

```javascript
for (let i = 0; i < 3; i++) {
  console.log(`Iteração ${i}`);
}
```

### While

Executa enquanto a condição for verdadeira.

```javascript
let contador2 = 0;
while (contador2 < 3) {
  console.log(`Contador: ${contador2}`);
  contador2++;
}
```

### Do...While

Executa pelo menos uma vez antes de verificar a condição.

```javascript
let numeroTeste = 3;
do {
  console.log(`Número: ${numeroTeste}`);
  numeroTeste--;
} while (numeroTeste > 0);
```

### For...Of

Itera sobre elementos iteráveis (como arrays).

```javascript
let listaNumeros = [1, 2, 3];
for (const num of listaNumeros) {
  console.log(num);
}
```

### For...In

Itera sobre as propriedades enumeráveis de um objeto.

```javascript
let pessoaInfo = { nome: "Carlos", idade: 29 };
for (const propriedade in pessoaInfo) {
  console.log(`${propriedade}: ${pessoaInfo[propriedade]}`);
}
```

### Controle de Loops

Podemos usar `break` para sair do loop e `continue` para pular para a próxima iteração.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;         // Sai do loop quando i é 3
  if (i % 2 === 0) continue;  // Pula números pares
  console.log(i);             // Output: 1
}
```

---

## Funções

Blocos de código reutilizáveis.

### Criando Funções

```javascript
function soma(a, b) {
  return a + b;
}
console.log("Soma:", soma(2, 3)); // Output: 5
```

### Tipos de Funções

#### Funções Nomeadas

Possuem um nome e podem ser reutilizadas.

```javascript
function saudacao() {
  return "Olá!";
}
console.log("Função Nomeada:", saudacao());
```

#### Funções Anônimas

Não possuem nome e são geralmente atribuídas a uma variável.

```javascript
const saudacaoAnonima = function () {
  return "Olá!";
};
console.log("Função Anônima:", saudacaoAnonima());
```

#### Arrow Functions

Sintaxe curta para funções anônimas.

```javascript
const multiplicar = (a, b) => a * b;
console.log("Arrow Function:", multiplicar(2, 3)); // Output: 6
```

### Parâmetros e Valores Padrão

Podemos definir valores padrão para parâmetros.

```javascript
function multiplicarComPadrao(a, b = 1) {
  return a * b;
}
console.log("Com Valor Padrão:", multiplicarComPadrao(5)); // Output: 5
```

### Funções como Argumentos (Callbacks)

Funções podem ser passadas como argumentos para outras funções.

```javascript
function calcular(a, b, operacao) {
  return operacao(a, b);
}
const somar = (x, y) => x + y;
console.log("Callback Function:", calcular(2, 3, somar)); // Output: 5
```

### Funções Recursivas

Funções que chamam a si mesmas.

```javascript
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
console.log("Fatorial:", fatorial(5)); // Output: 120
```

---

## Tratamento de Erros

Permite lidar com erros de forma controlada.

### Try...Catch

Captura erros em blocos de código.

```javascript
try {
  let obj;
  console.log(obj.nome); // Erro: obj é undefined
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}
```

### Bloco Finally

Executa independentemente de ter ocorrido erro ou não.

```javascript
try {
  let x = 10;
  console.log(x.toUpperCase()); // Erro: x é um número
} catch (erro) {
  console.log("Erro capturado:", erro.message);
} finally {
  console.log("Bloco finally executado.");
}
```

### Lançando Erros com Throw

Podemos lançar nossos próprios erros.

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida!");
  }
  return a / b;
}

try {
  console.log("Divisão:", dividir(10, 0));
} catch (erro) {
  console.log("Erro:", erro.message);
}
```

---

## Escopo e Contexto

### Escopo

Refere-se à acessibilidade das variáveis em diferentes partes do código.

#### Escopo Global

Variáveis declaradas fora de funções ou blocos.

```javascript
let globalVar = "Sou global";

function testeEscopoGlobal() {
  console.log(globalVar); // Acessa a variável global
}
testeEscopoGlobal();
```

#### Escopo Local (Função)

Variáveis declaradas dentro de uma função.

```javascript
function testeEscopoLocal() {
  let localVar = "Sou local";
  console.log(localVar); // Acessível dentro da função
}
testeEscopoLocal();
// console.log(localVar); // Erro: localVar não é definida
```

#### Escopo de Bloco

Variáveis declaradas com `let` ou `const` dentro de blocos `{ }`.

```javascript
if (true) {
  let blocoVar = "Sou de bloco";
  console.log(blocoVar); // Acessível dentro do bloco
}
// console.log(blocoVar); // Erro: blocoVar não é definida
```

### Contexto (this)

Refere-se ao objeto ao qual uma função pertence.

#### Contexto Global

No navegador, `this` no contexto global refere-se ao objeto `window`.

```javascript
console.log("Contexto Global:", this);
```

#### Dentro de Funções

O valor de `this` pode variar.

```javascript
function testeThis() {
  console.log("Dentro de uma função, this é:", this);
}
testeThis();
```

#### Em Objetos

Dentro de métodos de objetos, `this` refere-se ao próprio objeto.

```javascript
const obj = {
  nome: "Nicholas",
  saudacao: function () {
    return `Olá, ${this.nome}`;
  },
};
console.log(obj.saudacao()); // Output: Olá, Nicholas
```

---

## Estruturas de Dados

### Arrays

Listas ordenadas de elementos.

```javascript
let numeros = [10, 20, 30];
numeros.push(40); // Adiciona ao final
console.log("Array:", numeros);
console.log("Elemento no índice 1:", numeros[1]); // Output: 20
```

### Objetos

Coleções de pares chave-valor.

```javascript
let pessoa = { nome: "Nicholas", idade: 34 };
console.log("Objeto pessoa:", pessoa);
console.log("Nome da pessoa:", pessoa.nome);
```

### Map

Coleção de pares chave-valor onde as chaves podem ser de qualquer tipo.

```javascript
let mapa = new Map();
mapa.set("chave", "valor");
console.log("Valor no Map:", mapa.get("chave")); // Output: valor
```

### Set

Coleção de valores únicos.

```javascript
let conjunto = new Set([1, 2, 2, 3]);
console.log("Set:", conjunto); // Output: Set {1, 2, 3}
```

---

## Eventos e Temporizadores

### Temporizadores

Permitem executar código após um determinado tempo.

#### setTimeout

Executa uma função após um atraso especificado.

```javascript
setTimeout(() => {
  console.log("Executado após 2 segundos");
}, 2000);
```

#### setInterval

Executa uma função repetidamente em intervalos especificados.

```javascript
let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  if (contador === 5) {
    clearInterval(intervalo); // Para o intervalo
  }
}, 1000);
```

---

## Programação Assíncrona

### Promises

Representam operações assíncronas que podem ser concluídas com sucesso ou falha.

```javascript
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
```

### Async/Await

Sintaxe para trabalhar com Promises de forma mais clara.

```javascript
async function exemploAsync() {
  try {
    let resultado = await promessa;
    console.log("Resultado com async/await:", resultado);
  } catch (erro) {
    console.error("Erro com async/await:", erro);
  }
}
exemploAsync();
```

---

## Operadores Avançados

### Desestruturação

Extrai dados de arrays ou objetos.

#### Array

```javascript
let [a, b] = [10, 20];
console.log("Desestruturação de array:", a, b); // Output: 10, 20
```

#### Objeto

```javascript
let { nome, idade } = { nome: "Nicholas", idade: 34 };
console.log("Desestruturação de objeto:", nome, idade); // Output: Nicholas, 34
```

### Operador Spread (...)

Permite expandir elementos iteráveis.

#### Em Arrays

```javascript
let numerosOriginal = [1, 2, 3];
let novosNumeros = [...numerosOriginal, 4, 5];
console.log("Operador Spread em array:", novosNumeros); // Output: [1, 2, 3, 4, 5]
```

#### Em Objetos

```javascript
let objOriginal = { a: 1, b: 2 };
let novoObj = { ...objOriginal, c: 3 };
console.log("Operador Spread em objeto:", novoObj); // Output: { a: 1, b: 2, c: 3 }
```

### Nullish Coalescing (??)

Retorna o operando da direita se o da esquerda for `null` ou `undefined`.

```javascript
let valor = null;
console.log("Nullish Coalescing:", valor ?? "Valor padrão"); // Output: Valor padrão

let valorDefinido = "Texto";
console.log("Nullish Coalescing com valor:", valorDefinido ?? "Valor padrão"); // Output: Texto
```

### Encadeamento Opcional (?.)

Acessa propriedades aninhadas sem causar erro se alguma for `undefined` ou `null`.

```javascript
let pessoaObj = { nome: "Nicholas" };
console.log("Encadeamento Opcional:", pessoaObj?.idade); // Output: undefined

let pessoaComEndereco = { nome: "Ana", endereco: { cidade: "São Paulo" } };
console.log("Cidade:", pessoaComEndereco?.endereco?.cidade); // Output: São Paulo
console.log("Telefone:", pessoaComEndereco?.contato?.telefone); // Output: undefined
```

---

## Conclusão

Este guia apresenta conceitos fundamentais do JavaScript com exemplos práticos. Esperamos que seja útil para iniciantes que desejam aprender e entender melhor a linguagem. Sinta-se à vontade para explorar, testar o código e aprofundar seus conhecimentos!

---

# Instruções

Para executar os exemplos:

1. Copie o código desejado.
2. Cole em um arquivo JavaScript ou no console do navegador.
3. Execute e observe os resultados no console.

---