const fs = require("fs")
const path = require("path")
const uploadConfig = require("../configs/upload")

// Quando o arquivo é carregado, ele é enviado para uma pasta temporária
class DiskStorage{
    async saveFile(file){
        // rename - renomear ou mover o arquivo
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
            // Retorna o status do arquivo
            await fs.promises.stat(filePath)
        }catch{
            return
        } 

        // Remover o arquivo
        await fs.promises.unlink(filePath)
    }
}

module.exports = DiskStorage