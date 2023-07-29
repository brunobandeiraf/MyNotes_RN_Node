const { Router } = require("express")

const userRouters = require("./users.routes")
const notesRouters = require("./notes.routes")

const routes = Router()
routes.use("/users", userRouters)
routes.use("/notes", notesRouters)

module.exports = routes