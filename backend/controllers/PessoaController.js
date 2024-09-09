const { Pessoa } = require('../models');

exports.createPessoa = async (req, res) => {
    try{
        const { Nome, CPF, Telefone } = req.body;
        const novaPessoa = await Pessoa.create({
            Nome,
            CPF,
            Telefone,
        });

        res.status(201).json(novaPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message });
    }
};

exports.getAllPessoas = async (req, res) => {
    try {
        const Pessoas = await Pessoa.findAll();
        res.status(200).json(Pessoas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message});
    }
};

exports.getPessoaById = async (req, res) => {
    try {
        const { Id } = req.params;
        const Pessoa = await Pessoa.findByPk(Id);
        
        if(!Pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrado' });
        }

        res.status(200).json(Pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar determianda pessoa!', details: error.message});
    }
}

exports.updatePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const { Nome, CPF, Telefone, } = req.body;
        
        const Pessoa = await Pessoa.findByPk(Id);

        if (!Pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada! '});
        }

        Pessoa.Nome = Nome;
        Pessoa.CPF = CPF;
        Pessoa.Telefone = Telefone;

        await Pessoa.save();

        res.status(200).json(Pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pessoa! ', details: error.message });
    }
};

exports.deletePessoa = async (req, res) => {
    try {
        const { Id } = req.params;

        const Pessoa = await Pessoa.findByPk(Id);

        if(!Pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada! '});
        }

        await Pessoa.destroy();

        res.status(204).send(); 
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover pessoa! ', details: error.message });
    }
};





































