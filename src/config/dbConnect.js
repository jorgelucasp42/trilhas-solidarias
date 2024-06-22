import mongoose from "mongoose";

async function conectaNaDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 3000  // Adiciona um tempo limite de 3 segundos
        });
        console.log("Conexão com o banco feita com sucesso");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro de conexão:", error);
        throw error;
    }
}

export default conectaNaDatabase;



