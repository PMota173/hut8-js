function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const andre = new Pessoa("andre", "silva", 19);
console.log(andre);

Pessoa.prototype.imprimirPessoa = function() {
    console.log(this.nome + " " + this.sobrenome + " " + this.idade);
}
