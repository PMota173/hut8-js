// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const form = document.querySelector('#buscaCep');
const input = document.querySelector('#cep');
const btnCep = document.querySelector('.btnCep');
const p = document.querySelector('p');

form.addEventListener('submit', handleClick);
btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = input.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(body => {
        p.innerText = body.logradouro;
        });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra do bitcoin and reais.
// atualize este valor a cada 30s

const btc = document.querySelector('.bitcoin');
(function fetchBtc() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(body => {
            btc.innerText = body.BRL.buy;
        });
        setInterval(fetchBtc, 1000 * 30);
})();



// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randômica do chucknorris, toda vez que clicar em próxima

const piadaBtn = document.querySelector('.piadaBtn');
const piadaText = document.querySelector('.textPiada');


(function handleClickPiada() {
    piadaBtn.addEventListener('click', handleClickPiada);
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(body => {
        piadaText.innerText = body.value;
        });
    })();



