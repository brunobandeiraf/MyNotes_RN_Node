const { Router } = require("express")

const userRouters = require("./users.routes")
const notesRouters = require("./notes.routes")
const tagsRouters = require("./tags.routes")

const sessionsRouter = require("./sessions.routes")
routes.use("/sessions", sessionsRouter)

const routes = Router()
routes.use("/users", userRouters)
routes.use("/notes", notesRouters)
routes.use("/tags", tagsRouters)


module.exports = routes