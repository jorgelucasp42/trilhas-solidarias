import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);


app.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    const index = buscaUsuario(id);
    if (index !== -1) {
        usuarios.splice(index, 1);  // Remove o usuário da lista
        res.status(200).send("Usuario removido com sucesso");
    } else {
        res.status(404).send("Usuario não encontrado");
    }
});


export default app;
