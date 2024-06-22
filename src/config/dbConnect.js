import mongoose from "mongoose";

async function conectaNaDatabase() {
    try {
        await mongoose.connect("mongodb+srv://trilhassolidariasinova:Id1p91fY4OOU1d8J@cluster0.fixz9kx.mongodb.net/trilhas?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000  // Adiciona um tempo limite de 5 segundos
        });
        console.log("Conexão com o banco feita com sucesso");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro de conexão:", error);
        throw error;
    }
}

export default conectaNaDatabase;



