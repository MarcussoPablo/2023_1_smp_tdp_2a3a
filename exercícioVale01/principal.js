class Pessoa{
    constructor(pNome, pEndereco){
        this.nome = pNome
        this.endereco = pEndereco
    }

    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Endereco(){return this.Endereco}
    set Endereco(pEndereco) {this.nome = pEndereco}

}
var dadosPessoa = new Pessoa ("Paloma", "Jardim Robru")
console.log("O nome é : " + dadosPessoa.nome + " o Endereço é :" + dadosPessoa.endereco )

class Fisica extends Pessoa{
    constructor(pCpf, pDtNascimento,pNome , pEndereco){
        super(pNome, pEndereco)
        this.cpf = pCpf
        this.dtNascimento = pDtNascimento
    }

    get Cpf(){return this.cpf}
    set Cpf(pCpf){this.cpf = pCpf}

    get DataNascimento(){return this.dtNascimento}
    set DataNascimento(pDtNascimento){this.dtNascimento = pDtNascimento}
}
var dadosFisica = new Fisica ("254.789.687-00"," 28/08/1990")
console.log("O cpf é : " + dadosFisica.cpf +" a Data de nascimento é :" + dadosFisica.dtNascimento )


class Juridica extends Pessoa{
    constructor(pCnpj, pRazaoSocial,pNome , pEndereco){
        super(pNome, pEndereco)
        this.cnpj = pCnpj
        this.razaoSocial = pRazaoSocial
    }

    get Cnpj(){return this.cpf}
    set Cnpj(pCnpj){this.cnpj = pCnpj}

    get RazaoSocial(){return this.razaoSocial}
    set RazaoSocial(pRazaoSocial){this.razaoSocial = pRazaoSocial}
}

var dadosJuridica = new Juridica ("787/625/687/544-00"," 445655444")
console.log("O cnpj é : " + dadosJuridica.cnpj +" a Razão social é :" + dadosJuridica.RazaoSocial )