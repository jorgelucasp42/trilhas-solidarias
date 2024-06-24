import express from "express";
import usuarioRoutes from "./usuarioRoutes.js";
import organizacaoRoutes from "./organizacaoRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Trilhas Solidarias"));

    app.use(express.json());
    app.use(usuarioRoutes);
    app.use(organizacaoRoutes);
};

export default routes;
