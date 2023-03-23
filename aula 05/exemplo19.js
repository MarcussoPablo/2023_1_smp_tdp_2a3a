class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco) {this.preco = pPreco}

    calcularDesconto(pDesconto){
        this.preco = this.preco - ((this.preco  * pDesconto) /100)
    }

}

var obj_Livro1 = new Livro ("Use a cabeça Java",200)
var obj_Livro2 = new Livro ("use cabeça C#",170)

var lista = []

lista.push(obj_Livro1)
lista.push(obj_Livro2)

console.log(lista)