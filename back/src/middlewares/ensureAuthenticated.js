const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next){
    const authHeader = request.headers.authorization
    

    if(!authHeader){
        throw new AppError("JWT Token não informado", 401)
    }

    // primeiro o bare e depois o token. 
    // pegando somente o token
    const [,token] = authHeader.split(" ")

    try{
        // Verifica se o token é um JWT válido
        // sub é desestruturado do usado o alias para renomear
        const { sub: user_id }=  verify(token, authConfig.jwt.secret)

        request.user = {
            id: Number(user_id),
        }
        // next - chama a próxima função
        return next()
    }catch{
        throw new AppError("JWT Token inválido", 401)
    }
}

module.exports = ensureAuthenticated