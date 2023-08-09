const fs = require("fs")
const path = require("path")
const uploadConfig = require("../configs/upload")

// Quando o arquivo é carregado, ele é enviado para uma pasta temporária
class DiskStorage{
    async saveFile(file){
        await fs.promises.rename(
            // Busca a origem do arquivo salvo
            path.resolve(uploadConfig.TMP_FOLDER, file),
            // Envia para o novo destino do arquivo
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        )
        return file
    }


    async deleteFile(file){
        // Busca o arquivo na pasta upload
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

        try{
            await fs.promises.stat(filePath)
        }catch{
            return
        } 

        // Deletar o arquivo
        await fs.promises.unlink(filePath)
    }
}

module.exports = DiskStorage