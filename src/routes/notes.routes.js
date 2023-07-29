const { Router } = require("express")

const NotesControllers = require("../controllers/NotesController")

const notesRouters = Router()

// Controllers
const notesControllers = new NotesControllers()

// Rotas
notesRouters.post("/", notesControllers.create)

// Exporta
module.exports = notesRouters