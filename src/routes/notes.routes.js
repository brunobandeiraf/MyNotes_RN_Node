const { Router } = require("express")

const NotesControllers = require("../controllers/NotesController")

const notesRouters = Router()

// Controllers
const notesControllers = new NotesControllers()

// Rotas
notesRouters.post("/:user_id", notesControllers.create)
notesRouters.get("/:id", notesControllers.show)
notesRouters.delete("/:id", notesControllers.delete)

// Exporta
module.exports = notesRouters