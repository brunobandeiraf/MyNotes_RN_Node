const { Router } = require("express")

const userRouters = require("./users.routes")

const routes = Router()

routes.use("/users", userRouters)

module.exports = routes