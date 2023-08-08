const { Router } = require("express")

const UsersController = require("../controllers/UsersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router()

// Controllers
const usersController = new UsersController()

// Rotas
usersRoutes.post("/", usersController.create);

// Precisa estar autenticado e não precisa passar o id do usuário
usersRoutes.put("/", ensureAuthenticated, usersController.update)

// Exporta
module.exports = usersRoutes