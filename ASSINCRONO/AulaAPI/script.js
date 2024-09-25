fetch('https://pokeapi.co/api/v2/pokemon/4')
.then(r => r.json())
.then(json => { 
    console.log(json.name)
    return json
});

const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
    method: 'GET',
}


fetch(url, options)
.then(response => response.json())
.then(json => {
    console.log(json.forEach(element => {
        if (element.userId == 10) {
            console.log(element.title)
        }
        else {
            console.log('Não é o usuário 1')
        }
    }))
    return json
});


// get
// puxa informacao, utilizado para pegar posts

// post
// envia informacao, utilizado para criar posts

// put
// atualiza informacao, utilizado para atualizar posts

// delete
// deleta informacao, utilizado para deletar posts

// head 
// puxa informacao, utilizado para pegar headers


// cors
// cross origin resource sharing - compartilhamento de recursos de origem cruzada
// é uma politica de segurança que impede que um site acesse recursos de outro site
// para permitir que um site acesse recursos de outro site, o site que está sendo acessado precisa permitir isso

