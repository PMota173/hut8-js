// function.call(this,arg1,arg2,...)

//  apply(this, [arg1,arg2, ...])


// apply vs. call
// Aray.prototype.filter.call(li, itemPossuiClasse);
// Aray.prototype.filter.apply(li, [itemPossuiClasse]);


// bind 
// preserva o this


const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)

console.log(totalCaracteres);
console.log(paragrafos);


function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

console.log(criarElemento('ul', 'azul', 'aaaaaaaaasdsadasda'))


const criah1 = criarElemento.bind(null, 'h1', 'titulo')