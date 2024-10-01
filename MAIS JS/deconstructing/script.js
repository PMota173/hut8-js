const cliente = {
    nome: 'Alexandre',
    compras: 10, 
}

const { nome, compras } = cliente;


const frutas = ['banana', 'uva', 'morango'];

const [primeira, segunda, terceira] = frutas;


const [primeiro, segundo, terceiro] =  ['banana', 'uva', 'morango'];


document.addEventListener('keydown', ({ key, keyCode }) => { 
    console.log(key + ' ' + keyCode);
});



let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];


