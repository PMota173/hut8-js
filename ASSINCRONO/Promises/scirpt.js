// Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.



const login = new Promise((resolve) => { 
  setTimeout(() => {
    resolve('Usuário logado');
  }, 1000);
});

const dados = new Promise((resolve) => { 
  setTimeout(() => {
    resolve('Dados carregados');
  }, 500);
});

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});