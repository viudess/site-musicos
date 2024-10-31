import mongoose from "mongoose";

// Abaixo está sendo criado um schema para o artista, que será utilizado para criar um modelo de artista.
const artistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    bio: {type: String},
    genres: [{type: String, required: true}], // Array de gêneros musicais
    albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'albums'}], // Referência aos álbuns
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}], // Referência aos seguidores (usuários)
    image: {type: String}, // URL da imagem do artista
    created_at: {type: Date, default: Date.now}
}, {versionKey: false});

// Abaixo está sendo criado um modelo de artista, que será utilizado para realizar operações no banco de dados. Os parâmetros são o nome da coleção e o schema.
const artistas = mongoose.model('artistas', artistaSchema);

export default artistas;
