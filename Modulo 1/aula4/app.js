// Booleanos
// Booleanos em JS sao operadores de comparacoes
// Que retornam TRUE or FALSE
console.log(true, false);

// Operadores booleanos de comparação
const age = 26;
const name = 'Pablo';

// Dependendo do operador, pode se juntar a outros.
// == igual a
// ! não
// > maior que
// < menor que
// || ou
// && e
// != diferente
// >= maior ou igual a
// <= meno ou igual a

// console.log(age == 26); // true age é igual a 26
// console.log(age == 21); // false age não é igual a 21
// console.log(age != 26); // false age não é diferente de 26
// console.log(age > 27); // false age nao é maior que 27
// console.log(age < 28); // true age é menor que 28
// console.log(age >= 26); // true age é igual a 26
// console.log(age <= 27); // true age é menor que 27

console.log(name == 'pablo'); // false name é igual a string pablo;
console.log(name == 'Pablo'); // true name é igual a string Pablo
console.log(name > 'andre'); //false name é menor que andre, pq letra maiuscula é menor que letra minuscula no JS
console.log(name > 'Andre'); // true name é maior que Andre, pq a letra P vem depois que o A no alfabeto, e as ultimas letras prevalecem.

// operador 'igual a' e 'diferente de'
// Com esse operador, o JS ignora o tipo, e só olha para o valor
// Caso o valor como em baixo seja igual da variavel
// Resultara em true
console.log(age == 26); // true
console.log(age == '26'); //true

// operador 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'
// Ja com o operador que verifica o tipo de dado
// Ele não ignora o tipo e nem o valor
console.log(age === 26); // true
console.log(age === '26'); // false

// Conversao de Tipos
// é possivel transformar um tipo de dado em outro usando métodos
// também podemos descobrir o tipo de dado de uma variavel usando o typeof
let score = '100'; // string 100
score = Number(score); // transformar em numero

console.log(score + 1, typeof score); // 101

const convertedNumber = String(100);
console.log(convertedNumber, typeof convertedNumber);

// Transformar algum dado em Booleano
// Resultara em true or false
// Se o valor for diferente de falsy, resultara em true
/* 
  Falsy: 
  - false
  - 0
  - '', "", ``
  - null
  - undefined
  - NaN
*/
const booleanConverted = Boolean(10);
console.log(booleanConverted);

// Tentar transformar string em numero
// resultara em NaN

let fruit = 'Apple';
fruit = Number(fruit);
console.log(fruit);
