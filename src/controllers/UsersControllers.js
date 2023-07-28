class UsersControllers {
/*
    - index - GET para listar vários registros.
    - show - GET para exibir um registro específico.
    - create - POST para criar um registro.
    - update - PUT parta atualizar um registro.
    - delete - DELETE para excluir um registro.
*/

    create (request, response){
        const { email, password } = request.body

        response.status(201).json({ email, password })
    }
}

module.exports = UsersControllers