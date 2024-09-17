//  const carro = new Object( {
//      propriedades do objeto
//  })

//  const honda = Object.create(carro);

//  Object.assign
//  faz com que o objeto recebe um prototipo 

//  tornando atributos de um objeto em imutaveis
//  Object.defineProperties(carro, {
//      value: 2,
//      configurable: false,
//      writable: true,  
//      enumerable: false,
//  })

//  get e set

//  freeze: nao permite mais mudancas em um objeto
//  seal: nao permite a adicao de novos atributos ao objeto, e impede que as atuais sejam deletadas
//  preventExtensions: previne adicoes de novas poropriedades

//  Obejct.prototype.toString.call(carro)
//  saber o tipo real de um objeto


// EXERCICIOS

function verificarDado(dado) {
    return  Object.prototype.toString.call(dado);
}



console.log(verificarDado(3));
console.log(verificarDado('dado'));
console.log(verificarDado({}));
console.log(verificarDado([]));

const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: false,
    }
})

console.log(quadrado);

const configuracao = {
    width: 300, 
    height: 500,
    background: '#333'
}
Object.freeze(configuracao);


console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));