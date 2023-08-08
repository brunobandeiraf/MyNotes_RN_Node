const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
// Middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const notesRouter = Router()

// Controllers
const notesController = new NotesController()

// notesRouter em todas as rotas
notesRouter.use(ensureAuthenticated)

// Rotas
notesRouter.post("/", notesController.create)
//notesRouters.post("/:user_id", notesController.create)
notesRouter.get("/", notesController.index)
notesRouter.delete("/:id", notesController.delete)
notesRouter.get("/:id", notesController.show)

// Exporta
module.exports = notesRouter
