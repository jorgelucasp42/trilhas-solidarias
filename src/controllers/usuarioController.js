import usuario from "../models/usuario.js";

class UsuarioController{

    static async listarLivros (req,res){
        try {
            const listaUsuarios = await usuario.find({});
            res.status(200).json(listaUsuarios);
        } catch (error) {
            res.status(500).send("Erro ao buscar usuários");
        }
    }
    static async listarUsuarioPorId (req, res) {
        try {
          const id = req.params.id;
          const usuarioEncontrado = await usuario.findById(id);
          res.status(200).json(usuarioEncontrado);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na requisição do usuario` });
        }
      };

    static async cadastrarUsuario(req,res){
        try{
            const novoUsuario = await usuario.create(req.body);
            res.status(201).json({message:"criado com sucesso", usuario: novoUsuario});
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuario` });
        }
    }

    static async atualizarUsuario (req, res) {
        try {
          const id = req.params.id;
          await usuario.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "Usuario atualizado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - Falha na atualização` });
        }
      };

      static async excluirUsuario (req, res) {
        try {
          const id = req.params.id;
          await usuario.findByIdAndDelete(id);
          res.status(200).json({ message: "Usuario excluído com sucesso" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - Falha na exclusão` });
        }
      };

}


export default UsuarioController;