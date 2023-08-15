const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const AppError = require("../utils/AppError")

describe("UserCreateService", () => {

    let userRepositoryInMemory = null // Banco simulado
    let userCreateService = null // Regra de negócio

    // beforeEach - antes de cada teste
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
    })


    it("User should be create", async () => {
        // Simula os dados de entrada do usuário
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        }
        // Ambiente de banco de dados simulado
        //const userRepositoryInMemory = new UserRepositoryInMemory()
    
        // Para testes é importante ter um repositório em memória para isolar o banco dos testes
        // Service recebe o repositório de armazenamento - Inversão de Dependências
        //const userCreateService = new UserCreateService(userRepositoryInMemory)
        
        // Passo o user test para o service do Usuário
        const userCreated = await userCreateService.create(user)
    
        // Espero que contenha um id
        expect(userCreated).toHaveProperty("id")
    
        // Espero que não contenha um id
        //expect(userCreated).not.toHaveProperty("id")
    
    })

    it("User not should be create with exists email", async () => {
        const user1 = {
            name: "User Test 1",
            email: "user@test.com",
            password: "1234"
        }
        const user2 = {
            name: "User Test 2",
            email: "user@test.com",
            password: "5678"
        }

        //const userRepository = new UserRepositoryInMemory()
        //const userCreateService = new UserCreateService(userRepository)

        // Cadastra o 1º usuário
        await userCreateService.create(user1)
        // Espero que o erro seja o mesmo do erro do AppError
        await expect(userCreateService.create(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."))

    })
    
})


describe("Examples Test", () => {
    it("Result of them sum of 2 + 2 must be 4", () =>{
        const a = 2
        const b = 2
        const result = a + b
        //toEqual ou toBe
        expect(result).toEqual(4) // Espero que o resultado seja 4
    })

    it("Other Example", () => {
        expect(1).toBe(1)
    })
})