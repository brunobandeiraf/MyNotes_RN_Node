const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRouters = Router()

// Controllers
const usersControllers = new UsersControllers()

// Rotas
userRouters.post("/", usersControllers.create)

// Precisa estar autenticado e não precisa passar o id do usuário
userRouters.put("/", ensureAuthenticated, usersControllers.update)

// Exporta
module.exports = userRouters