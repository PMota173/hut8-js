// forEach
// retorna undefined

// array.forEach((item,index,array) => {
//      qualquer coisa
// )}

// map
// retorna uma array, e cada iteracao gera um item

// array.map(item, index, array)  


// reduce
//  oque for retornado ira para o acumulador

// array.reduce( (acumulador, atual, index, array) =>  {
//      return algo
// } valorInicial ) 

// reduceRight faz a iteracao do final para o inicio


// array.some()
// retorna true se para pelo menos uma iteracao o return for true

// array.every()
// retorna trmue se para todas iteracoes o return for true



// find e findIndex

// find: retorna o valor atual da primeira iteracao que retornar true
// findIndex: retorna o index atual da primeira iteracao que retornar true


// filter 
// igual ao find, mas retorna um array com os valores que retornarem true



// EXERCICIOS AULA

const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aula = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aula,
        horas,
    }
})

console.log(objetoCursos);

const numeros = [3,4,120,33,300,200,10,3321];
console.log(numeros.filter(n => n>=100))


const instrumentos = ['Guitarra', 'Baixo', 'Bateria']

console.log(instrumentos.some(instrumentos => instrumentos === 'Bateria'));


// some o preco de todos os itens

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]

const valorTotal = compras.reduce((acumulador,item,index,array) => {
    return acumulador + +compras[index].preco.slice(3).replace(',','.');
},0)

console.log(valorTotal);

