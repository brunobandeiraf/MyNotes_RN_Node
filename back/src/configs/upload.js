const path  =  require("path")

const multer = require("multer")
const crypto = require("crypto")

const TMP_FOLDER = path.resolver(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.resolver(__dirname, "uploads")

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
