const doc = fetch('https://viacep.com.br/ws/96090180/json/');

doc
.then((response) => response.json()
.then(text => {
    const div = document.querySelector('div');
    div.innerText = text.cep;
}));