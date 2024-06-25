import express from "express";
import UsuarioController from "../controllers/usuarioController.js";
import authenticate from "../middleware/auth.js";

const routes = express.Router();

routes.get("/usuarios", UsuarioController.listarUsuarios);
routes.post("/usuarios", authenticate, UsuarioController.cadastrarUsuario);
routes.post("/login", authenticate, UsuarioController.loginUsuario);

export default routes;
