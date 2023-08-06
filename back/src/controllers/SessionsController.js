const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")

class SessionsController{
    async create(request, response){
        const { email, password } = request.body

        const user = await knex("users").where({ email }).first()

        // Se usuário não existe
        if(!user){
            throw new AppError("E-mail e/ou senha incorreta", 401)
        }

        // Usa o bcrypt para comparar as senhas
        const passwordMatched = await compare(password, user.password)
        // Se senha não confere com a senha cadastrada
        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401)
        }


        return response.json(user)
    }
}

module.exports = SessionsController;