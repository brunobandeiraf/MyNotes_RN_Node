const { Router } = require("express")

const userRouters = Router()

// Assume que já tenha o /users/
userRouters.post("/", (request, response) => {
    const { email, password } = request.body

    response.json({ name, password })
})

module.exports = userRouters