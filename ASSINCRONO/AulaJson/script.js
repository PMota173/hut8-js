fetch('./dados.json')
.then(r => r.json())
.then(json => { 
    console.log(json)
    return json
});

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript"
}

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));