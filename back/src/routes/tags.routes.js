const { Router } = require("express")

const TagsControllers = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRouters = Router()

// Controllers
const tagsControllers = new TagsControllers()

// Rotas
//tagsRouters.get("/:user_id", tagsControllers.index)
tagsRouters.get("/", ensureAuthenticated, tagsControllers.index)

// Exporta
module.exports = tagsRouters
