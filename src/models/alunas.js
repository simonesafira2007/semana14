const mongoose = require("mongoose");

const alunasSchema = new mongoose.Schema(
{  
    
    id: { type : Number },
    nome: { type : String },
    idade: { type : Number },
    estadoCivil : { type : String },
    numeroDeFilhos : { type : Number },
    grauEscolaridade : { type : String },
    cursoFormacaoAcademica : { type : String },
    experienciaEmProgramacaoAntesReprograma : { type : Boolean },
    atividadeRemunerada : { type : Boolean },
    tempoForaMercadoTrabalho : { type : String }
},  
{    
 versionKey: false,   
}
);

// atribuindo o esquema a uma collection
// definindo o nome da collection que irei salvar no banco
const alunas = mongoose.model("alunas", alunasSchema)

// exportar o model para ser utilizado
module.exports = alunas;

