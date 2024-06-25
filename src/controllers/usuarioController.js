import Usuario from "../models/Usuario.js";

class UsuarioController {

    // static async listarLivros(req, res) {
    //     try {
    //         const listaUsuarios = await usuario.find({});
    //         res.status(200).json(listaUsuarios);
    //     } catch (error) {
    //         res.status(500).send("Erro ao buscar usuários");
    //     }
    // }
    // static async listarUsuarioPorId(req, res) {
    //     try {
    //         const id = req.params.id;
    //         const usuarioEncontrado = await usuario.findById(id);
    //         res.status(200).json(usuarioEncontrado);
    //     } catch (erro) {
    //         res.status(500).json({ message: `${erro.message} - falha na requisição do usuario` });
    //     }
    // };

    // static async cadastrarUsuario(req, res) {
    //     try {
    //         const novoUsuario = await usuario.create(req.body);
    //         res.status(201).json({ message: "criado com sucesso", usuario: novoUsuario });
    //     } catch (erro) {
    //         res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuario` });
    //     }
    // }

    static listarUsuarios = async (req, res) => {
        try {
            const usuarios = await Usuario.find();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    static cadastrarUsuario = async (req, res) => {
        try {
            const usuario = new Usuario(req.body);
            await usuario.save();
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    static loginUsuario = async (req, res) => {
        try {
            const { email, senha } = req.body;
            const usuario = await Usuario.findOne({ email, senha });
            if (usuario) {
                res.status(200).json({ mensagem: "Login bem-sucedido", usuario });
            } else {
                res.status(401).json({ mensagem: "Credenciais inválidas" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

}

export default UsuarioController;