class livro{
    constructor(pNome){
        this.nome = pNome
    }
    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}
}

var obj_livro1 = new livro("Use a cabeça Java")
console.log("Nome do livro: "+ obj_livro1.Nome)