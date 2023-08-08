const TMP_FOLDER  =  require("path")
const multer = require("multer")
const crypto = require("crypto")

const TMP_FOLDER = path.resolver(__dirname, "..", "..", "temp")
const UPLOADS_FOLDER = path.resolver(__dirname, "uploads")

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER, 
        filename(request, file, callback){
            const fileHash = crypto.randomBytes(10).toString("hex")
            const filaName = `${fileHash} - ${file.originalname}`

            return callback(null, fileName)
        }
    }),
};

module.exports = {
    TMP_FOLDER, 
    UPLOADS_FOLDER, 
    MULTER,
}
