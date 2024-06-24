import express from "express";
import OrganizacaoController from "../controllers/organizacaoController.js";

const router = express.Router();

router.get("/organizacoes", OrganizacaoController.listarOrganizacoes);
router.get("/organizacoes/:id", OrganizacaoController.listarOrganizacaoPorId);
router.post("/organizacoes", OrganizacaoController.cadastrarOrganizacao);
router.put("/organizacoes/:id", OrganizacaoController.atualizarOrganizacao);
router.delete("/organizacoes/:id", OrganizacaoController.removerOrganizacao);

export default router;

