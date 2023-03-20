const db = require("../models");
const Company = db.company;

// Criação de nova empresa
exports.create = (req, res) => {

    // Validação da requisição
    if (!req.body.businessName || !req.body.cnpj || !req.body.address) {
      res.status(400).send({
        message: "Todos os campos devem ser preenchidos"
      });
      return;
    }
    
    const businessName = req.body.businessName
    const cnpj = req.body.cnpj
    const address = req.body.address
    
    // Criação do objeto
    const company = {
      businessName: businessName,
      cnpj: cnpj,
      address: address
    };
  
    // Salva empresa no banco de dados
    Company.create(company)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro no cadastro da empresa."
      });
    });
};

// Retorna todas as empresas
exports.findAll = (req, res) => {

    const query = `SELECT * FROM public.companies`;

    Company.sequelize.query(query)
        .then(data => {
            if(data[0][0]) {
                res.status(200).send(data[0]);
            } else {
                res.status(404).send({ title: 'Nenhuma empresa localizada'})
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Nenhum empresa localizada."
            });
        });
};

// Atualiza uma empresa utilizando seu id
exports.update = (req, res) => {
    const id = req.params.id;

    Company.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Empresa atualizada com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não foi possível localizar e atualizar a empresa com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar a empresa de id=" + id
      });
    });
};

// Apaga uma empresa pelo id
exports.delete = (req, res) => {
    var id = req.params.id;

    Company.destroy({
      where: { id: id}
    })
    .then(num => {
      if (num == 1) {
        console.log(num)
        res.status(200).send({
          message: "Empresa apagada com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não foi possível localizar e apagar a empresa de id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao deletar a empresa de id=" + id
      });
    });
};
