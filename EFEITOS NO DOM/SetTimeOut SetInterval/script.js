

// mude a cor da tela para azul e depois para vermelho a cada 2s
const body = document.body;

setInterval(() => {
    body.classList.toggle('active');
}, 2000);



// crie um cronometro utilizando o setInterval, deve ser possivel
// iniciar, pausar e resetar

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const time = document.querySelector('#timer');

let i = 0;
let timer;

function iniciarTempo() { 
    timer = setInterval(() => {
        time.innerText = i++;
    }, 1000);
}

function pausarTempo() {
    clearInterval(timer);
}

function resetarTempo() {
    time.innerText = 0;
    i = 0;
    clearInterval(timer);
}

start.addEventListener('click', iniciarTempo);
stop.addEventListener('click', pausarTempo);
reset.addEventListener('click', resetarTempo);


