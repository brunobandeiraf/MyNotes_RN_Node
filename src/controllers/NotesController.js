const knex = require("../database/knex")

class NotesController{

    async show(request, response){
        const { id } = request.params

        // returnar os dados da nota pelo id
        const note = await knex("notes").where({ id }).first()
        // returnar as tags baseada pelo id e ordenada pelo name
        const tags = await knex("tags").where({ note_id: id  }).orderBy("name")
        // returnar os links baseada pelo id e ordenados pela data de criação
        const links = await knex("links").where({ note_id: id  }).orderBy("created_at")
        
        return response.json({
            ...note, //todas as informações da notas
            tags, 
            links
        })
    }

    async create(request, response){
        const { title, description, tags, links } = request.body
        const { user_id } = request.params

        // Inserir tags
        const [note_id] = await knex("notes").insert({
            title, description, user_id
        })

        // Recuperar os links pelo código note_id
        const linksInsert = link.map(link => {
            return {
                note_id,
                url: link
            }
        })
        // Inserir links 
        await knex("links").insert(linksInsert)

         // Recuperar as tags pelo código note_id
         const tagsInsert = tags.map(name => {
            return {
                note_id,
                name, 
                user_id
            }
        })

        // Inserir tags
        await knex("tags").insert(tagsInsert)

        response.json()
    }
}

module.exports = NotesController