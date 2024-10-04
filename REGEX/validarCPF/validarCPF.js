export default class validarCPF {
    constructor (element) {
        this.element = element;
    }
    limparCPF = (cpf) => cpf.replace(/\D/g, '');

    construirCPF = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    formatarCPF = (cpf) => {
        return this.construirCPF(this.limparCPF(cpf));
    }
    validarCPF(cpf) {
        const matchCPF = cpf.match(/(?:\d{3}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{2})/g);
        

        return (matchCPF && matchCPF[0] === cpf);
        
    }
    adicionarEvento() {
        this.element.addEventListener('change', () => {
            this.validarMudanca(this.element);
        });
    }
    validarMudanca(cpfElement) {    
        if (this.validarCPF(cpfElement.value)) {
            cpfElement.value = this.formatarCPF(cpfElement.value);
            cpfElement.classList.add('valido');
            cpfElement.classList.remove('invalido');
            cpfElement.nextElementSibling.classList.remove('ativo');
        } else {
            cpfElement.classList.add('invalido');
            cpfElement.classList.remove('valido');
            cpfElement.nextElementSibling.classList.add('ativo');
        }
    }
    adicinarErroSpan() {
        const erroElement = document.createElement('span');
        erroElement.classList.add('erro-text');
        erroElement.innerText = 'CPF inválido';
        this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
    }
    iniciar() {
        this.adicionarEvento();
        this.adicinarErroSpan();
        return this;
    }
}