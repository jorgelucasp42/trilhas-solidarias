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


app.get("/usuarios/:id", (req, res) => {
    const index = buscaUsuario(req.params.id);
    if (index !== -1) {
        res.status(200).json(usuarios[index]);
    } else {
        res.status(404).send("Usuario não encontrado");
    }
});

app.post("/usuarios", (req, res) => {
    const novoUsuario = req.body;
    // Validação para evitar IDs duplicados
    const idExiste = usuarios.some(usuario => usuario.id === novoUsuario.id);
    if (idExiste) {
        res.status(400).send("ID de usuario já existe");
    } else {
        usuario.push(novoUsuario);
        res.status(201).send("Usuario cadastrado com sucesso");
    }
});

app.put("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    const index = buscaUsuario(id);
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...req.body };  // Atualiza o usuário mantendo o ID
        res.status(200).send("Usuario atualizado com sucesso");
    } else {
        res.status(404).send("Usuario não encontrado");
    }
});

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

app.patch("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    const index = buscaUsuario(id);
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...req.body };  // Atualiza os campos fornecidos
        res.status(200).send("Usuario atualizado parcialmente com sucesso");
    } else {
        res.status(404).send("Usuario não encontrado");
    }
});
export default app;
