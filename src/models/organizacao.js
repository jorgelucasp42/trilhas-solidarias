import mongoose from "mongoose";

const organizacaoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: {
        rua: { type: String, required: true },
        numero: { type: String, required: true },
        complemento: { type: String, required: false },
        cidade: { type: String, required: true },
        estado: { type: String, required: true },
        cep: { type: String, required: true }
    },
    dataRegistro: { type: Date, default: Date.now },
    website: { type: String, required: false },
    setoresAtuacao: [{ type: String, required: true }],
    logo: { type: String, required: false }
});

const Organizacao = mongoose.model('organizacoes', organizacaoSchema);

export default Organizacao;
