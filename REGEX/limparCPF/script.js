const cpfs = document.querySelectorAll('.cpf');


function elementsInnertext(elements) {
  return Array.from(elements).map(element => element.innerText);
}

const arrayCpfs = elementsInnertext(cpfs);


limparCPF = (cpf) => cpf.replace(/\D/g, '');

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}


const formatarCPFs = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF);
}

console.log(formatarCPFs(elementsInnertext(cpfs)));

const substituirCPFs = (cpfsElements) => {
    const cpfs = elementsInnertext(cpfsElements);
    const cpfsFormatados = formatarCPFs(cpfs);
    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index];
    });
}