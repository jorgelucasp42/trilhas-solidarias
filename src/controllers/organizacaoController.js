import Organizacao from "../models/organizacao.js";

class OrganizacaoController {
    static listarOrganizacoes = async (req, res) => {
        try {
            const organizacoes = await Organizacao.find();
            res.status(200).json(organizacoes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static listarOrganizacaoPorId = async (req, res) => {
        try {
            const organizacao = await Organizacao.findById(req.params.id);
            if (!organizacao) {
                return res.status(404).json({ message: "Organização não encontrada" });
            }
            res.status(200).json(organizacao);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static cadastrarOrganizacao = async (req, res) => {
        try {
            const novaOrganizacao = new Organizacao(req.body);
            await novaOrganizacao.save();
            res.status(201).json(novaOrganizacao);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    static atualizarOrganizacao = async (req, res) => {
        try {
            const organizacaoAtualizada = await Organizacao.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!organizacaoAtualizada) {
                return res.status(404).json({ message: "Organização não encontrada" });
            }
            res.status(200).json(organizacaoAtualizada);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    static removerOrganizacao = async (req, res) => {
        try {
            const organizacaoRemovida = await Organizacao.findByIdAndDelete(req.params.id);
            if (!organizacaoRemovida) {
                return res.status(404).json({ message: "Organização não encontrada" });
            }
            res.status(200).json({ message: "Organização removida com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default OrganizacaoController;
