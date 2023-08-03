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
