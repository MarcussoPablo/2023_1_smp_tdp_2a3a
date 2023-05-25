const CarroService = require('../services/CarroService');

module.exports = {
    buscarTodos: async(req, res) =>{
        let json = {error:'', result:[]};

        
        let carros = await CarroService.buscarTodos();

        for (let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                modelo: carros[i].modelo,
                placa:  carros[i].placa,
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) =>{
        let json = {error:'', result:[]};

        
        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }
        res.json(json);
    },

    inserir: async(req, res) =>{
        let json = {error:'', result:[]};

        
        let modelo = req.body.modelo;
        let placa = req.body.placa;
     

        if(modelo && placa){
            let carroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: carroCodigo,modelo,placa
            };
        }else{
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },
      
    deletar: async (req, res) => {
        let json = { error: '', result: [] };
      
        try {
          const codigo = req.params.codigo;
          await CarroService.deletar(codigo);
          json.result = 'Carro deletado com sucesso';
        } catch (error) {
          json.error = 'Ocorreu um erro ao deletar o carro';
        }
      
        res.json(json);
      },

      alterar: async(req, res) =>{
        let json = {error:'', result:[]};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;
     

        if(codigo && modelo && placa){
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,modelo,placa
            };
        }else{
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },
}