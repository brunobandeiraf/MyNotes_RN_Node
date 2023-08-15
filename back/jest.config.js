module.exports = {
  bail: true, // Se encontrar uma falha para?
  coverageProvider: "v8",

  testMatch: [ //<rootDir>/src/ pular o node_modules
    "<rootDir>/src/**/*.spec.js" // Qual arquivo terá os testes?
  ],
}