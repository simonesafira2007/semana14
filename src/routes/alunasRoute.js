const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")

router.get("/", controller.getAllStudents)
router.get("/:id", controller.getStudentById)
router.get("/:id/atividaderemunerada", controller.getAtividadeRemunerada)
router.get("/:id/experience", controller.getExperience)
router.post("/", controller.createStudent)
router.delete("/:id", controller.deleteStudent)
router.put("/:id", controller.updateStudent)

  
  
module.exports = router;

