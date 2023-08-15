const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")

// Cuida dq regra de negócio da aplicação
class UserCreateService {

    constructor(userRepository){
        this.userRepository = userRepository
    }

    async create({ name, email, password }){
        
        const checkUserExists = await this.userRepository.findByEmail(email)

        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso.")
        }

        // Criptografando a senha com bcrypt
        const hashedPassword = await hash(password, 8)

        // Cadastrando usuário 
        const userCreated = await this.userRepository.create({ name, email, password: hashedPassword })
        
        return userCreated
    }
}

module.exports = UserCreateService