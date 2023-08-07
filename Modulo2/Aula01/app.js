// Controle de Fluxo é um conceito muito utilizado no js
// quando nos precisamos verificar se alguma condicao é verdadeira
// nos executamos uma ação. Isso se chama de condicionais.
// Tambem podemos fazer loop para executar alguma ação repetitivamente, caso seja true
// Podemos utilizar um loop em um Array, para cada item do array
// nos usaremos o metodo toUpperCase.

// for loop
// contador; condicao; incremento ou decremento
for (let i = 0; i < 5; i++) {
  // console.log(i);
}

const names = ['Pablo', 'Ada', 'Tommy'];
// Enquanto I for menor que o tamanho da Array
// de names, o loop vai ocorrer, até que seja false a condicao
for (let i = 0; i < names.length; i++) {
  const HTMLTemplate = `<p>${names[i]}</p>`;
  // console.log(HTMLTemplate);
}

// while loop
// Diferente do for loop, o while loop, nos precisamos declarar a variavel fora do while e
// nos temos que utilizar o incremento ou decremento dentro do bloco
// do while, caso contrario, o loop sera infinito
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
