const knex = require("../database/knex")

class NotesController{
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