const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")

const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

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

        // Criando o token
        const { secret, expireIn } = authConfig.jwt
        const token = sign({} , secret, {
            subject: String(user.id),
            expireIn
        }) 


        return response.json({ user, token })
    }
}

module.exports = SessionsController;