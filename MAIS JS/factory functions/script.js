function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    
    return {
        text,
        element,
    };
}


const comprarBtn = createButton('Comprar');
console.log(comprarBtn);

function criarPessoa(nomeCompleto) {
    const nome = nomeCompleto.split(' ')[0];
    const sobrenome = nomeCompleto.split(' ')[1];
    return Object.freeze({ 
        nomeCompleto,
        nome,
        sobrenome
    });
}

const pesssoa = criarPessoa('Luiz Otávio');
console.log(pesssoa);