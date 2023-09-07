// criando um objeto literal
let user = {
  name: 'Pablo',
  age: 26,
  email: 'pablo@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de Frango', '4 receitas de purê de batata'],
  login: () => {
    console.log('Usuário logado');
  },
  logout: () => {
    console.log('Usuário deslogado');
  }
}

user.login();
user.logout();