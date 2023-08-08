const {Router} = require("express");

const usersRoutes = require("./users.routes.js")
const dishesRoutes = require("./dishes.routes.js")
const tagsRouters = require("./tags.routes.js")

const sessionsRouter = require("./sessions.routes")
routes.use("/sessions", sessionsRouter)

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/notes", dishesRoutes)
routes.use("/tags", tagsRouters)


module.exports = routes