const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const userRouters = Router()

// Controllers
const usersControllers = new UsersControllers()

// Rotas
userRouters.post("/", usersControllers.create)
userRouters.put("/:id", usersControllers.update)
userRouters.post("/", usersControllers.list)

// Exporta
module.exports = userRouters