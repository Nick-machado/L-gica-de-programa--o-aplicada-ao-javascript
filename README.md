# Estudo de JavaScript: Tipos de Valores, Declaração de Variáveis e Operadores

Este repositório contém um estudo básico sobre JavaScript, abordando os tipos de valores, formas de declaração de variáveis e operadores matemáticos e relacionais. Abaixo, você encontrará explicações e exemplos simples para cada tópico.

## Índice

1. [Tipos de Valores](#tipos-de-valores)
   - [Primitivos](#primitivos)
   - [Não Primitivos (Referência)](#não-primitivos-referência)
2. [Formas de Declaração](#formas-de-declaração)
3. [Operadores Matemáticos](#operadores-matemáticos)
4. [Operadores Relacionais](#operadores-relacionais)

---

## Tipos de Valores

### Primitivos

1. **String**: Armazena textos.

   ```javascript
   let nome = "Nicholas"; // Exemplo de string
   console.log(nome); // Output: Nicholas
   ```

2. **Number**: Armazena números (inteiros ou decimais).

   ```javascript
   let idade = 34; // Exemplo de número inteiro
   let altura = 1.75; // Exemplo de número decimal
   console.log(idade, altura); // Output: 34 1.75
   ```

3. **BigInt**: Números inteiros de precisão arbitrária.

   ```javascript
   let grandeNumero = 12345678901234567890n; // Nota: 'n' no final indica BigInt
   console.log(grandeNumero); // Output: 12345678901234567890n
   ```

4. **Boolean**: Armazena verdadeiro ou falso.

   ```javascript
   let ativo = true; // Exemplo de boolean
   console.log(ativo); // Output: true
   ```

5. **Undefined**: Variável declarada, mas sem valor atribuído.

   ```javascript
   let indefinido;
   console.log(indefinido); // Output: undefined
   ```

6. **Null**: Representa ausência intencional de valor.

   ```javascript
   let vazio = null;
   console.log(vazio); // Output: null
   ```

7. **Symbol**: Valor único, usado como identificador.

   ```javascript
   let id = Symbol("id");
   console.log(id); // Output: Symbol(id)
   ```

### Não Primitivos (Referência)

1. **Object**: Estrutura com propriedades.

   ```javascript
   let pessoa = {
     nome: "Nicholas",
     idade: 34,
   };
   console.log(pessoa.nome); // Output: Nicholas
   ```

2. **Array**: Lista ordenada de valores.

   ```javascript
   let numeros = [1, 2, 3];
   console.log(numeros[0]); // Output: 1
   ```

3. **Function**: Blocos de código reutilizáveis.

   ```javascript
   function saudacao() {
     let x = 1 + 1;
     return `O valor é ${x}`;
   }
   console.log(saudacao()); // Output: O valor é 2
   ```

   **Nota**: A função foi corrigida para retornar a string corretamente usando template literals.

4. **Date**: Representa datas e horários.

   ```javascript
   let hoje = new Date();
   console.log(hoje); // Output: Data atual
   ```

5. **Map e Set**: Estruturas de dados especializadas.

   - **Map**: Coleção de pares chave-valor.

     ```javascript
     let mapa = new Map();
     mapa.set("chave", "valor");
     console.log(mapa.get("chave")); // Output: valor
     ```

   - **Set**: Coleção de valores únicos.

     ```javascript
     let conjunto = new Set([1, 2, 3]);
     console.log(conjunto.has(2)); // Output: true
     ```

---

## Formas de Declaração

1. **VAR**: Escopo de função, comportamento de hoisting.

   ```javascript
   var x = 10; // Declarada e inicializada
   if (true) {
     var x = 20; // Sobrescreve a variável no mesmo escopo
   }
   console.log(x); // Output: 20
   ```

2. **LET**: Escopo de bloco, não permite redeclaração no mesmo escopo.

   ```javascript
   let y = 30;
   if (true) {
     let y = 40; // Nova variável (escopo diferente)
     console.log(y); // Output: 40
   }
   console.log(y); // Output: 30
   ```

3. **CONST**: Escopo de bloco, valor constante (imutável).

   ```javascript
   const z = 50;
   // z = 60; // Erro: Não é permitido reatribuir const
   console.log(z); // Output: 50
   ```

   **Nota**: Objetos e arrays declarados com `const` podem ser modificados internamente.

   ```javascript
   const pessoaConst = { nome: "Ana" };
   pessoaConst.nome = "Carlos"; // Permitido, pois estamos alterando a propriedade
   console.log(pessoaConst.nome); // Output: Carlos
   ```

---

## Operadores Matemáticos

1. **Adição (+)**:

   ```javascript
   var x = 1 + 1;
   console.log(x); // Output: 2
   ```

2. **Subtração (-)**:

   ```javascript
   var x = 2 - 1;
   console.log(x); // Output: 1
   ```

3. **Multiplicação (\*)**:

   ```javascript
   var x = 2 * 2;
   console.log(x); // Output: 4
   ```

4. **Divisão (/)**:

   ```javascript
   var x = 6 / 3;
   console.log(x); // Output: 2
   ```

5. **Resto da Divisão (%)**:

   ```javascript
   var x = 6 % 4;
   console.log(x); // Output: 2
   ```

6. **Exponenciação (\*\*)**:

   ```javascript
   var x = 2 ** 2;
   console.log(x); // Output: 4
   ```

---

## Operadores Relacionais

1. **Igual (==)**: Compara valor, não o tipo.

   ```javascript
   var x = 1;
   var a = "1";

   if (x == a) {
     console.log(true); // Output: true
   } else {
     console.log(false);
   }
   ```

2. **Estritamente Igual (===)**: Compara valor e tipo.

   ```javascript
   var x = 1;
   var a = "1";

   if (x === a) {
     console.log(true);
   } else {
     console.log(false); // Output: false
   }
   ```

3. **Diferente (!=)**: Compara valor, não o tipo.

   ```javascript
   var x = 1;
   var a = "1";

   if (x != a) {
     console.log(true); // Output: false
   } else {
     console.log(false);
   }
   ```

4. **Estritamente Diferente (!==)**: Compara valor e tipo.

   ```javascript
   var x = 1;
   var a = "1";

   if (x !== a) {
     console.log(true); // Output: true
   } else {
     console.log(false);
   }
   ```

---

## Conclusão

Este estudo básico apresenta os principais tipos de valores, formas de declarar variáveis e operadores em JavaScript. Compreender esses conceitos é fundamental para o desenvolvimento de aplicações e scripts eficientes.

---

**Nota**: Todas as correções necessárias foram feitas para garantir que os exemplos funcionem corretamente.