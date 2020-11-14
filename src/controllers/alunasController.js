const alunas = require("../models/alunas")

// método GET - rota a ser chamada no Postman (localhost:3000/alunas)
// exibe o registro de todas as alunas 
const getAllStudents = (req, res) => {
    console.log(req.url)
    alunas.find(function (err, alunas) {
    res.status(200).send(alunas)
    });
   
} 


// Método GET by Id
// Requisição no Postman (localhost:3000/alunas/id)
const getStudentById = (req, res) => {
  const id = req.params.id;
  // Find sempre retorna uma lista
  // FindOne retorna um único documento
  alunas.find({ id }, function (err, alunas) {
    if (err) {
      res.status(500).send({message: err.message})
    } else
    res.status(200).send(alunas);
  });
};
  


// Método GET
// Exibe alunas com campo específico : atividadeRemunerada = true 
// Endpoint: localhost:3000/alunas/id/atividaderemunerada
const getAtividadeRemunerada = (req, res) => {
  alunas.find({ atividadeRemunerada: true }, function (err, alunas) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send(alunas)
      }
  })
}
   

//daqui
  

// Método GET
// Exibe alunas com campo específico :  experienciaEmProgramacaoAntesReprograma = false 
// Endpoint: localhost:3000/alunas/id/experience
const getExperience = (req, res) => {
  alunas.find({ experienciaEmProgramacaoAntesReprograma: false }, function (err, alunas) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send(alunas)
      }
  })
}
//cá

 // método POST - rota a ser chamada no Postman: (localhost:3000/alunas)
 // adicionando uma nova aluna no banco Alunas
 // Endpoint (localhost:3000/alunas)
 const createStudent = (req, res) => {
    console.log(req.body);
  
    let aluna = new alunas(req.body);
  
    aluna.save(function(err){
      if(err) { 
        res.status(500).send({ message: err.message })
      }
      res.status(201).send(aluna.toJSON());
    })

  };

  

  // método DELETE - 
  // Endpoint a ser usado no Postman: (localhost:3000/alunas/id)
  // removendo um registro de aluna por id no banco Alunas
  const deleteStudent = (req, res) => {
    const id = req.params.id
    alunas.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Aluna removida com sucesso"})
        }
    })
}
  
  // método PUT - 
  // Endpoint a ser usado no Postman: (localhost:3000/alunas/id)
  // atualiza um registro de aluna por id no banco Alunas
const updateStudent = (req, res) => {
  const id = req.params.id
  alunas.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message : "Aluna atualizada com sucesso"})
      }
  })
}







  module.exports = {
    getAllStudents,
    getStudentById,
    getExperience,
    createStudent,
    deleteStudent,
    updateStudent,
    getAtividadeRemunerada,
  }



