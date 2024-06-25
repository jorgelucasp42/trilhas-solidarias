import express from "express";
import usuarios from "./usuarioRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Trilhas Solidarias"));
    app.use(express.json(), usuarios);
};

export default routes;