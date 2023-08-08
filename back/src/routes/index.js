const { Router } = require("express");

const usersRoutes = require("./users.routes.js")
const notesRoutes = require("./notes.routes.js")
const tagsRouters = require("./tags.routes.js")


const routes = Router()

const sessionsRouter = require("./sessions.routes")
routes.use("/sessions", sessionsRouter)

routes.use("/users", usersRoutes)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRouters)


module.exports = routes