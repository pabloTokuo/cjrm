const books = [
  { name: "Código Limpo", price: 30 },
  { name: "O Milagre da Manhã", price: 5 },
  { name: "Alice no País das Maravilhas", price: 10 },
  { name: "Quem Pensa Enriquece", price: 50 },
  { name: "O Livro da Ciência", price: 40 },
];

const booksPriceAbove20 = books.filter(({ price }) => price > 20).map(({ name, price }) => {
  return `O preço do livro ${name}, caiu para ${price}`;
});

debugger