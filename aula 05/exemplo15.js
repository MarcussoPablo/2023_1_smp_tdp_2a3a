class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco) {this.nome = pPreco}
}

var obj_Livro1 = new Livro ("Use a cabeça Java",200)
console.log("Nome do Livro: " + obj_Livro1.nome + "custa :" + obj_Livro1.preco + "reais")