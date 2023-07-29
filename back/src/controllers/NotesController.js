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

    async delete(request, response){
        const { id } = request.params

        await knex("notes").where({ id }).delete()

        return response.json()
    }

    async index(request, response){
        // user_id e title informados pelo usuário
        const { title, user_id, tags } = request.query

        let notes

        if(tags){ // Se existe a tag
            // Retorna as tags - separada por , e pega somente as tags
            const filterTags = tags.split(',').map(tag => tag.trim())

            // Retorna as tags pelo nome da busca
            notes = await knex("tags")
            .select([ // retorna esses campos da tabela Notes
                "notes.id",
                "notes.title",
                "notes.user_id",
            ])
            .where("notes.user_id", user_id) //  Quando notes.user = user.id
            .whereLike("notes.title", `%${title}%`) // filtrando a busca pelo título
            .whereIn("name", filterTags)  
            .innerJoin("notes", "notes.id", "tags.note_id") // inner join juntando as tabelas
            .orderBy("notes.title") // ordenar por título

            const userTags = await knex("tags").where({ user_id })
            const notesWithTags = notes.map(note => {
                const noteTags = userTags.filter(tag => tag.note_id === note.id)

                return {
                    ...note, 
                    tags: noteTags
                }
            })
            return response.json(notesWithTags)

        }else{
            // Busca pelo user_id e que tenha a palavra no title
            const notes = await knex("notes")
            .where({ user_id })
            .whereLike("title", `%${title}%`) // Like verifica antes e depois % da palavra %
            .orderBy("title")
        }
        return response.json(notes)
    }
}

module.exports = NotesController