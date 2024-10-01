class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    informacao() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    informacao() {
        return `${super.informacao()}, Portas: ${this.portas}`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, motor) {
        super(marca, modelo, ano);
        this.motor = motor;
    }

    informacao() {
        return `${super.informacao()}, Motor: ${this.motor}`;
    }
}

const carro = new Carro('Toyota', 'Corolla', 2020, 4);
const moto = new Moto('Kawasaki', 'Ninja', 2020, '500cc');
