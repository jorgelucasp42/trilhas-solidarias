import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    usuario: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    idade: { type: Number, required: true },
    genero: { type: String, required: true },
    cidadeEstado: { type: String, required: true },
    escolaridade: { type: String, required: true },
    estadoCivil: { type: String, required: true },
    telefone: { type: String, required: true },
    fotoPerfil: { type: String, required: false }, // Não é obrigatório
    aceitaTermos: { type: Boolean, required: true },
    assinaturaNewsletter: { type: Boolean, required: true },
    data: { type: Date, default: Date.now }
});

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;
