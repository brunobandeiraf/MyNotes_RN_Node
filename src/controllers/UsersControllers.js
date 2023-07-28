const AppError = require("../utils/AppError")

class UsersControllers {
    create (request, response){
        const { email, password } = request.body

        if(!email){
            throw new AppError("E-mail é obrigatório!")
        }

        response.status(201).json({ email, password })
    }
}

module.exports = UsersControllers

/*
    - index - GET para listar vários registros.
    - show - GET para exibir um registro específico.
    - create - POST para criar um registro.
    - update - PUT parta atualizar um registro.
    - delete - DELETE para excluir um registro.
*/