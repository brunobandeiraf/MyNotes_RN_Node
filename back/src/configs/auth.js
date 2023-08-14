module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default", // palavra secreta
        expiresIn: "1d" // tempo de expiração
    }
}