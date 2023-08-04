// Strings são encadeamento de caracteres que estejam dentro de aspas, podendo ser letras ou numeros.
console.log('hello world');

const email = 'pablo@google.com';
console.log(email);

// Podem haver concatenação de Strings, quando você quer juntar strings
const firstName = 'Pablo';
const lastName = 'Tokuo';
// String que contem espaço em branco no meio, dando assim um espaço entre o nome
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// Também podemos acessar um caracter especifico de uma String
// Usando [] no final da variavel, e passando o valor correspodente
// da letra que você gostaria.
// Lembrando que o JS é uma linguagem ZERO BASE, em vez de começar a contagem por 1 começamos por 0.

console.log(fullName[0]); // Acessar a letra P

// Podemos também saber o comprimento de uma String
// usando o metodo Length

console.log(lastName.length);

// Temos diversos tipos de métodos de strings, quando chamado, deve finalizar com () no final. Quando chamado ira executar uma funcionalidade especifica sua. Assim executando a função ou método.

console.log(fullName.toUpperCase());

// Na maioria das vezes, o metodo não ira alterar a string original

const result = fullName.toLowerCase();
console.log(result);

// Alguns metodos é necessário passar um ARGUMENTO dentro dos ().
const index = email.indexOf('@');
console.log(index);

// Metodos comuns de Strings
// Abaixo são alguns metodos mais comuns para usar em strings, um deles é o lastIndexOf(Argumento)
// Com esse metodo, você consegue pegar o ultimo argumento da string
const fruit = 'Banana';

const lastIndexOf = fruit.lastIndexOf('n');
console.log(lastIndexOf);

// Proximo metodo é o Slice, com ele você consegue pegar uma parte de uma string.
// O primeiro argumento é o da onde você quer começar a pegar um Slice
// Já o segundo é até onde você quer pegar uma parte da string.

const emailAnime = 'narutouzumaki@naruto.com';
const sliceEmail = emailAnime.slice(6, 13);
console.log(sliceEmail);

// O metodo replace, ele recebe dois argumentos
// O primeiro argumento, é o que você quer trocar da string
// Já o segundo argumento, é o que você quer colocar no lugar do primeiro argumento

const emailReplace = emailAnime.replace('naruto', 'boruto');
console.log(emailReplace, emailAnime);

// Todos os metodos não substituem o metodo principal.

// Variaveis contendo numeros inteiros e decimais
const radius = 10;
const pi = 3.14;

// Nos metodos aritmeticos, o que vai prevalecer na ordem em que a operacao vai ocorrer
// é parenteses
// expoentes ou raizes
// multiplicacao e divisao
// adicao e subtracao

const area = pi * radius ** 2;

/* quando der o log de area
   a ordem em que sera executado, vai ser primeiro
   radius e expoentes, e logo apos
   o resultado * pi
*/
console.log(area);

/* 
  Outro exemplo de uma operacao artimetica, seguindo a ordem
*/

const crazyOperation = 2 * (10 - 2) ** 2;
console.log(crazyOperation);

// Operadores de incremento e decremento
// Você quer fazer o incremento em um numero
// usamos o ++;
let postLikes = 10;

postLikes++;
console.log(postLikes);
// Para decrementar usamos o --;

// Podemos tambem usar para outros operadores e incrementar um valor maior
// usando *= | /= | += | -= | %=
postLikes += 10;
console.log(postLikes);

// O atributo % na programação é conhecido como RESTO
// Resto da divisão
let total = 10 % 3;
console.log(total);
// O resto da divisao de 10 por 3 é 1

// NaN = not a number
// Quanto tentamos fazer uma operacao usando / ou * ou - com
// strings e numero
// o resultado sera NaN

let quantidadeMouse = 10;
console.log(quantidadeMouse - 'mouse');

// concatenacao de string com numero
console.log('meu post tem no total ' + postLikes + ' de likes');
// O javascript por baixo dos panos, transformou postLikes em string

// Template Strings
const postTitle = 'É bolacha ou biscoito?';
const postAuthor = 'Matheus Saad';
const postComments = 15;

// usando concatenacao
// const postMessage =
//   'O post "' +
//   postTitle +
//   '", do ' +
//   postAuthor +
//   ', tem ' +
//   postComments +
//   ' comentarios';

// A concatenacao deixa ilegivel o codigo dependendo do tamanho da string
// Por isso que é melhor usar o template string
// como no exemplo abaixo

// template string
const postMessage = `O post ${postTitle}, do ${postAuthor}, tem ${postComments} comentarios`;
console.log(postMessage);

// Com JS é possível adicionar codigo HTML pelo JS
// utilizando o template HTML
const html = `
  <h2>${postTitle}</h2>
  <p>Author: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`;

console.log(html);
