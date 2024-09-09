const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrao'];


// remover primeiro valor de comidas e coloque em uma variavel
// remova o ultimo e coloque em uma variavel
// adicione arroz no final
// adicione peixe e batata ao inicio

const primeiro = comidas.shift();

const ultimo = comidas.pop();

comidas.push('Arroz');
comidas.unshift('Peixe','Batata')

console.log(comidas);



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

estudantes.sort();
estudantes.reverse();

console.log(estudantes);

console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))


let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`


console.log(html);

html = html.split('section');
console.log(html);
html = html.join('ul');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];


const carrosCopia = carros.slice();

carros.pop();

console.log(carros);
console.log(carrosCopia);