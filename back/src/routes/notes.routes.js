const { Router } = require("express")

const NotesControllers = require("../controllers/NotesController")
// Middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const notesRouters = Router()

// Controllers
const notesControllers = new NotesControllers()

// notesRouters em todas as rotas
notesRouters.use(ensureAuthenticated)

// Rotas
notesRouters.post("/", notesControllers.create)
//notesRouters.post("/:user_id", notesControllers.create)
notesRouters.get("/", notesControllers.index)
notesRouters.delete("/:id", notesControllers.delete)
notesRouters.get("/:id", notesControllers.show)

// Exporta
module.exports = notesRouters
