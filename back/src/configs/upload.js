const path  =  require("path")

const multer = require("multer")
const crypto = require("crypto")

// Endereço de quem a imagem chega
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
// Endereço destino da imagem
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

const MULTER = {
    storage: multer.diskStorage({
        // Destino do armazenamento
        destination: TMP_FOLDER, 
        // Nome do arquivo
        // Hash crypto para garantir um nome único
        filename(request, file, callback){
            const fileHash = crypto.randomBytes(10).toString("hex")
            const fileName = `${fileHash} - ${file.originalname}`

            return callback(null, fileName)
        }
    }),
};

module.exports = {
    TMP_FOLDER, 
    UPLOADS_FOLDER, 
    MULTER,
}
