const UserCreateService = require("./UserCreateService")

it("User should be create", () => {
    // Simula os dados de entrada do usuário
    const user = {
        name: "User Test",
        email: "user@test.com",
        password: "1234"
    }

    // Para testes é importante ter um repositório em memória para isolar o banco dos testes
    const userCreateService = new UserCreateService()
    // Passo o user test para o service do Usuário
    const userCreated = userCreateService.execute(user)

    // 
    expect(userCreated).toHaveProperty("id")

})

// it("Result of them sum of 2 + 2 must be 4", () =>{
//     const a = 2
//     const b = 2
//     const result = a + b
// toEqual ou toBe
//     expect(result).toEqual(4) // Espero que o resultado seja 4
// })