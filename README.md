# Estudo de JavaScript: Tipos de Valores, Formas de Declaração, Operadores e Estruturas de Controle

Este repositório contém um estudo básico sobre JavaScript, abordando tipos de valores, formas de declaração de variáveis, operadores matemáticos e relacionais, estruturas condicionais e laços de repetição. Abaixo, você encontrará explicações simples e exemplos para cada tópico.

## Índice

1. [Tipos de Valores](#tipos-de-valores)
   - [Primitivos](#primitivos)
   - [Não Primitivos (Referência)](#não-primitivos-referência)
2. [Formas de Declaração](#formas-de-declaração)
3. [Operadores Matemáticos](#operadores-matemáticos)
4. [Operadores Relacionais](#operadores-relacionais)
5. [Estruturas Condicionais](#estruturas-condicionais)
6. [Laços de Repetição (Loops)](#laços-de-repetição-loops)

---

## Tipos de Valores

### Primitivos

1. **String**: Armazena textos.

   ```javascript
   let usuario = "Carlos";
   console.log("String:", usuario); // Output: String: Carlos
   ```

2. **Number**: Armazena números (inteiros ou decimais).

   ```javascript
   let idadeUsuario = 29;
   let peso = 72.5;
   console.log("Number (inteiro):", idadeUsuario); // Output: Number (inteiro): 29
   console.log("Number (decimal):", peso); // Output: Number (decimal): 72.5
   ```

3. **BigInt**: Números inteiros de precisão arbitrária.

   ```javascript
   let numeroGigante = 98765432109876543210n;
   console.log("BigInt:", numeroGigante); // Output: BigInt: 98765432109876543210n
   ```

4. **Boolean**: Armazena verdadeiro ou falso.

   ```javascript
   let isOnline = false;
   console.log("Boolean:", isOnline); // Output: Boolean: false
   ```

5. **Undefined**: Variável declarada, mas sem valor atribuído.

   ```javascript
   let naoDefinido;
   console.log("Undefined:", naoDefinido); // Output: Undefined: undefined
   ```

6. **Null**: Representa ausência intencional de valor.

   ```javascript
   let valorNulo = null;
   console.log("Null:", valorNulo); // Output: Null: null
   ```

7. **Symbol**: Valor único, usado como identificador.

   ```javascript
   let identificador = Symbol("id");
   console.log("Symbol:", identificador); // Output: Symbol: Symbol(id)
   ```

### Não Primitivos (Referência)

1. **Object**: Estrutura com propriedades.

   ```javascript
   let produto = { nome: "Caneta", preco: 2.5 };
   console.log("Object:", produto); // Output: Object: { nome: 'Caneta', preco: 2.5 }
   ```

2. **Array**: Lista ordenada de valores.

   ```javascript
   let frutas = ["maçã", "banana", "uva"];
   console.log("Array:", frutas); // Output: Array: [ 'maçã', 'banana', 'uva' ]
   ```

3. **Function**: Blocos de código reutilizáveis.

   ```javascript
   function somaNumeros(a, b) {
     return a + b;
   }
   console.log("Function:", somaNumeros(3, 4)); // Output: Function: 7
   ```

4. **Date**: Representa datas e horários.

   ```javascript
   let dataAtual = new Date();
   console.log("Date:", dataAtual); // Output: Date: [data atual]
   ```

5. **Map e Set**: Estruturas de dados especializadas.

   - **Map**: Coleção de pares chave-valor.

     ```javascript
     let mapaExemplo = new Map();
     mapaExemplo.set("chave1", "valor1");
     console.log("Map:", mapaExemplo.get("chave1")); // Output: Map: valor1
     ```

   - **Set**: Coleção de valores únicos.

     ```javascript
     let conjuntoNumeros = new Set([10, 20, 30]);
     console.log("Set:", conjuntoNumeros.has(20)); // Output: Set: true
     ```

---

## Formas de Declaração

1. **VAR**: Escopo de função, comportamento de hoisting.

   ```javascript
   var numero1 = 100;
   if (true) {
     var numero1 = 200;
   }
   console.log("VAR número1:", numero1); // Output: VAR número1: 200
   ```

2. **LET**: Escopo de bloco, não permite redeclaração no mesmo escopo.

   ```javascript
   let numero2 = 300;
   if (true) {
     let numero2 = 400;
     console.log("LET número2 dentro do bloco:", numero2); // Output: LET número2 dentro do bloco: 400
   }
   console.log("LET número2 fora do bloco:", numero2); // Output: LET número2 fora do bloco: 300
   ```

3. **CONST**: Escopo de bloco, valor constante (imutável).

   ```javascript
   const numero3 = 500;
   // numero3 = 600; // Erro: Não é permitido reatribuir const
   console.log("CONST número3:", numero3); // Output: CONST número3: 500
   ```

   **Nota**: Objetos e arrays declarados com `const` podem ter suas propriedades modificadas.

   ```javascript
   const objetoConst = { cor: "azul" };
   objetoConst.cor = "verde";
   console.log("CONST Object:", objetoConst.cor); // Output: CONST Object: verde
   ```

---

## Operadores Matemáticos

1. **Adição (+)**:

   ```javascript
   console.log("5 + 3 =", 5 + 3); // Output: 5 + 3 = 8
   ```

2. **Subtração (-)**:

   ```javascript
   console.log("10 - 6 =", 10 - 6); // Output: 10 - 6 = 4
   ```

3. **Multiplicação (\*)**:

   ```javascript
   console.log("4 * 3 =", 4 * 3); // Output: 4 * 3 = 12
   ```

4. **Divisão (/)**:

   ```javascript
   console.log("8 / 2 =", 8 / 2); // Output: 8 / 2 = 4
   ```

5. **Resto da Divisão (%)**:

   ```javascript
   console.log("7 % 2 =", 7 % 2); // Output: 7 % 2 = 1
   ```

6. **Exponenciação (\*\*)**:

   ```javascript
   console.log("2 ** 3 =", 2 ** 3); // Output: 2 ** 3 = 8
   ```

---

## Operadores Relacionais

1. **Igual (==)**: Compara valor, não o tipo.

   ```javascript
   let valorA = 10;
   let valorB = "10";
   console.log("valorA == valorB:", valorA == valorB); // Output: valorA == valorB: true
   ```

2. **Estritamente Igual (===)**: Compara valor e tipo.

   ```javascript
   console.log("valorA === valorB:", valorA === valorB); // Output: valorA === valorB: false
   ```

3. **Diferente (!=)**: Compara valor, não o tipo.

   ```javascript
   let valorC = 20;
   console.log("valorA != valorC:", valorA != valorC); // Output: valorA != valorC: true
   ```

4. **Maior que (>)**:

   ```javascript
   console.log("valorA > valorC:", valorA > valorC); // Output: valorA > valorC: false
   ```

---

## Estruturas Condicionais

1. **If, Else If, Else**:

   ```javascript
   let idadeUsuario2 = 16;

   if (idadeUsuario2 < 18) {
     console.log("Menor de idade.");
   } else if (idadeUsuario2 === 18) {
     console.log("Tem 18 anos.");
   } else {
     console.log("Maior de idade.");
   }
   // Output: Menor de idade.
   ```

2. **Operador Ternário**:

   ```javascript
   let permissao = idadeUsuario2 >= 18 ? "Permitido" : "Proibido";
   console.log("Permissão:", permissao); // Output: Permissão: Proibido
   ```

---

## Laços de Repetição (Loops)

1. **For**: Número conhecido de iterações.

   ```javascript
   for (let i = 0; i < 3; i++) {
     console.log(`Iteração ${i}`);
   }
   // Output:
   // Iteração 0
   // Iteração 1
   // Iteração 2
   ```

2. **While**: Repetição enquanto a condição é verdadeira.

   ```javascript
   let contador2 = 0;
   while (contador2 < 3) {
     console.log(`Contador: ${contador2}`);
     contador2++;
   }
   // Output:
   // Contador: 0
   // Contador: 1
   // Contador: 2
   ```

3. **Do...While**: Garante ao menos uma execução.

   ```javascript
   let numeroTeste = 3;
   do {
     console.log(`Número: ${numeroTeste}`);
     numeroTeste--;
   } while (numeroTeste > 0);
   // Output:
   // Número: 3
   // Número: 2
   // Número: 1
   ```

4. **For...Of**: Itera sobre elementos de coleções iteráveis.

   ```javascript
   let listaNumeros = [1, 2, 3];
   for (const num of listaNumeros) {
     console.log(num);
   }
   // Output:
   // 1
   // 2
   // 3
   ```

5. **For...In**: Itera sobre as propriedades enumeráveis de um objeto.

   ```javascript
   let pessoaInfo = { nome: "Carlos", idade: 29 };
   for (const propriedade in pessoaInfo) {
     console.log(`${propriedade}: ${pessoaInfo[propriedade]}`);
   }
   // Output:
   // nome: Carlos
   // idade: 29
   ```

6. **Controle de Loops: Break e Continue**

   ```javascript
   for (let i = 0; i < 5; i++) {
     if (i === 3) break; // Sai do loop quando i é 3
     if (i % 2 === 0) continue; // Pula números pares
     console.log(i);
   }
   // Output:
   // 1
   ```

   **Explicação**:

   - `continue`: Pula para a próxima iteração se a condição for verdadeira.
   - `break`: Interrompe o loop imediatamente.

---

## Conclusão

Este estudo básico apresenta os principais conceitos de JavaScript, incluindo tipos de valores, formas de declarar variáveis, operadores, estruturas condicionais e laços de repetição. Compreender esses fundamentos é essencial para o desenvolvimento de aplicações eficientes e funcionais.

---

**Nota**: Todas as correções necessárias foram feitas para garantir que os exemplos funcionem corretamente.