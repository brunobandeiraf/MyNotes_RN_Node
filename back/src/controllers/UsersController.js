const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {

    async create (request, response){
        const { name, email, password } = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso.")
        }

        // Criptografando a senha com bcrypt
        const hashedPassword = await hash(password, 8)

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?,?,?)", 
            [name, email, hashedPassword]
        )

        return response.status(201).json()
    }

    async update(request, response){
        const { name, email, password, old_password } = request.body
        //const { id } = request.params
        const user_id = request.user.id

        const database = await sqliteConnection()
        //const user = await database.get("SELECT * FROM users WHERE id = (?)", id)
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])

        if(!user){
            throw new AppError("Usuário não encontrado!")
        }

        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id){
            throw new AppError("Este e-mail já está em uso :).")
        }

        // Se existir valor dentro de name, usar essa variável, se não, usa user.name
        user.name = name ?? user.name
        user.email = email ?? user.email

        if(password && !old_password){
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha.")
        }

        if(password && old_password){
            // Compara a senha armazenada criptografada com a senha digitada (antiga)
            const checkOldPassword = await compare(old_password, user.password)
            
            // Se não for igual
            if(!checkOldPassword){
                throw new AppError("A senha antiga não confere.")
            }

            // Criptografa a nova senha a ser armazenada
            user.password = await hash(password, 8)
        }

        await database.run(`
            UPDATE users SET
                name = ?,
                email = ?,
                password = ?,
                updated_at = DATETIME('now')
                WHERE id = ?`,
            //[user.name, user.email, user.password, id]
            [user.name, user.email, user.password, user_id]
        
        )

        return response.json()
    }
}

module.exports = UsersController

/*
    - index - GET para listar vários registros.
    - show - GET para exibir um registro específico.
    - create - POST para criar um registro.
    - update - PUT parta atualizar um registro.
    - delete - DELETE para excluir um registro.
*/