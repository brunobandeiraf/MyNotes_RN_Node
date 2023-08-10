const { Router } = require("express")
const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")

// Sessions
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

// Responsável pelo upload
const multer = require("multer")
const uploadConfig = require("../configs/upload")
const upload = multer(uploadConfig.MULTER)

const usersRoutes = Router()

// Controllers
const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

// Rotas
usersRoutes.post("/", usersController.create);

// Precisa estar autenticado e não precisa passar o id do usuário
//usersRoutes.put("/:id", usersController.update)
usersRoutes.put("/", ensureAuthenticated, usersController.update)

// patch para atualizar um campo específico
// Salvar a imagem em uma pasta e armazenar a referência
// upload.single - apenas um arquivo
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

// Exporta
module.exports = usersRoutes