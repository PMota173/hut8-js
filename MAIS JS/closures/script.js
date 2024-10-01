let item1 = 1;
function funcao1() {
    let item2 = 2;
    console.log(item1);
    console.log(item2);
    function funcao2() {
        let item3 = 3;
        console.log(item1);
        console.log(item2);
        console.log(item3);
    }
    funcao2();
}


function contagem() {
    let contador = 0;
    return function() {
        contador++;
        console.log(contador);
    }
}

const incrementar = contagem();
incrementar();
incrementar();
incrementar();


const incrementar2 = contagem();
incrementar2();
incrementar2();
incrementar2();
incrementar2();