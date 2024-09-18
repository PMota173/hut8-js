const numeros = document.querySelectorAll('[data-numero]');

console.log(numeros);

function animaNumeros() {  
  numeros.forEach((numero) => { 
        const total = +numero.innerText;
        let start = 0;
        const interval = setInterval(() => {
            start += Math.floor(total / 100);
            numero.innerText = start;
            if(start > total) {
                clearInterval(interval);
                numero.innerText = total;
            }
        }, 25 * Math.random());
  });
}

function handleMutation(mutation) {
  if (mutation[0].target.classList.contains('ativo')) {
    observer.disconnect();
    animaNumeros();
  }
}


window.addEventListener('scroll', () => {
  const numerosSection = document.querySelector('.numeros');
  const numerosSectionRect = numerosSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (numerosSectionRect.top < windowHeight && numerosSectionRect.bottom >= 0) {
    numerosSection.classList.add('ativo');
  } else if (numerosSection.classList.contains('ativo')) {
    numerosSection.classList.remove('ativo');
  }
});

const observerTarget = document.querySelector('.numeros');

const observer = new MutationObserver(handleMutation);

observer.observe(observerTarget, { attributes: true });