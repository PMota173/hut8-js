// remova o erro

const priceNumber = n => +n.replace(/\D/g, '.');
priceNumber('R$ 99,99'); 

// crie uma iife e isole o escopo
// de qualquer codigo js

(function() {
    const nome = 'Luiz';
    console.log(nome);
}
)();

// Como podemos utilizar a função abaixo?

const active = callback => callback();

active(() => {
    console.log('Hello World');
});



