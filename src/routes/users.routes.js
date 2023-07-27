const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const userRouters = Router()

const usersControllers = new UsersControllers()

// Assume que já tenha o /users/
userRouters.post("/", usersControllers.create)

module.exports = userRouters