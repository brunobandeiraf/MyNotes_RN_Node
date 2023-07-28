const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const userRouters = Router()

// Controllers
const usersControllers = new UsersControllers()

// Rotas
userRouters.post("/", usersControllers.create)

// Exporta
module.exports = userRouters