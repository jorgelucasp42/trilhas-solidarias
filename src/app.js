import express from "express";

const app = express();
app.use(express.json());

const usuarios = [
    {
        id: 1,
        nome: "Charles Xavier"
    },
    {
        id: 2,
        nome: "Erik Magnus"
    }
];

function buscaUsuario(id) {
    return usuarios.findIndex(usuario => {
        return usuario.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Trilhas Solidarias.js");
});

app.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios);
});

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
        usuarios.push(novoUsuario);
        res.status(201).send("Usuario cadastrado com sucesso");
    }
});

// Método PUT para atualizar um usuário existente
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

// Método DELETE para remover um usuário existente
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

// Método PATCH para atualização parcial de um usuário existente
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

//mongodb+srv://trilhassolidariasinova:<password>@cluster0.fixz9kx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0