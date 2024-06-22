import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import Usuario from "./models/usuario.js";

const app = express();
app.use(express.json());

async function startServer() {
    try {
        const conexao = await conectaNaDatabase();

        conexao.on("error", (erro) => {
            console.error("Erro de conexão", erro);
        });

        conexao.once("open", () => {
            console.log("Conexão com o banco feita com sucesso");
        });

        app.get("/", (req, res) => {
            res.status(200).send("Trilhas Solidarias.js");
        });

        app.get("/usuarios", async (req, res) => {
            try {
                const listaUsuarios = await Usuario.find({});
                res.status(200).json(listaUsuarios);
            } catch (error) {
                res.status(500).send("Erro ao buscar usuários");
            }
        });

        app.get("/usuarios/:id", async (req, res) => {
            try {
                const usuario = await Usuario.findById(req.params.id);
                if (usuario) {
                    res.status(200).json(usuario);
                } else {
                    res.status(404).send("Usuario não encontrado");
                }
            } catch (error) {
                res.status(500).send("Erro ao buscar usuário");
            }
        });

        app.post("/usuarios", async (req, res) => {
            try {
                const novoUsuario = new Usuario(req.body);
                await novoUsuario.save();
                res.status(201).send("Usuario cadastrado com sucesso");
            } catch (error) {
                res.status(400).send("Erro ao cadastrar usuário");
            }
        });

        app.put("/usuarios/:id", async (req, res) => {
            try {
                const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (usuarioAtualizado) {
                    res.status(200).send("Usuario atualizado com sucesso");
                } else {
                    res.status(404).send("Usuario não encontrado");
                }
            } catch (error) {
                res.status(400).send("Erro ao atualizar usuário");
            }
        });

        app.delete("/usuarios/:id", async (req, res) => {
            try {
                const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);
                if (usuarioDeletado) {
                    res.status(200).send("Usuario removido com sucesso");
                } else {
                    res.status(404).send("Usuario não encontrado");
                }
            } catch (error) {
                res.status(400).send("Erro ao remover usuário");
            }
        });

        app.patch("/usuarios/:id", async (req, res) => {
            try {
                const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (usuarioAtualizado) {
                    res.status(200).send("Usuario atualizado parcialmente com sucesso");
                } else {
                    res.status(404).send("Usuario não encontrado");
                }
            } catch (error) {
                res.status(400).send("Erro ao atualizar usuário");
            }
        });

        const PORT = 3000;
        app.listen(PORT, () => {
            console.log("Servidor escutando na porta", PORT);
        });

    } catch (error) {
        console.error("Não foi possível iniciar o servidor:", error);
    }
}

startServer();

export default app;
