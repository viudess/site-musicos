import mongoose from "mongoose";

// Abaixo está sendo criado um schema para o artista, que será utilizado para criar um modelo de artista.
const generosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
});

// Abaixo está sendo criado um modelo de artista, que será utilizado para realizar operações no banco de dados. Os parâmetros são o nome da coleção e o schema.
const genero = mongoose.model('generos', generosSchema);

export default genero;
