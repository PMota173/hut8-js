function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));

// rest: pega o resto dos argumentos e transforma em um array
// arguments: pega todos os argumentos e transforma em um array-like


// spread: pega todos os itens de um array e transforma em argumentos

const frutas = ['banana', 'uva', 'morango'];
const legumes = ['cenoura', 'batata', 'abóbora'];

const comidas = [...frutas,'Pizza', ...legumes];

console.log(comidas);


const numeroMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.max(...numeroMax));


const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

console.log(btnsArray);

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];

console.log(fraseArray);

