// crie 4 lis na pagina
// Utilizando o loop
// adicione uma classe a cada li

const items = document.querySelectorAll('li');

for(const item of items) {
    item.classList.add('ativo');
}

// utilize o for in para listar todas as propriedades 
// e valores do objeto window

for(const prop in window) {
    console.log(prop, window[prop]);
}
