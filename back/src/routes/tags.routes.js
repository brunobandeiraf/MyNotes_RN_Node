const { Router } = require("express")

const TagsControllers = require("../controllers/TagsController")

const tagsRouters = Router()

// Controllers
const tagsControllers = new TagsControllers()

// Rotas
tagsRouters.index("/:user_id", tagsControllers.index)

// Exporta
module.exports = tagsRouters