import express from "express";

const app = express ();

app.get("/", (req, res) => {
    res.status(200).send("Trilhas Solidarias.js");
  });

  export default app; 