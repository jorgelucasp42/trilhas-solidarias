import express from "express";

const app = express ();
app.use(express.json()); 

const usuario = [
    {
        id: 1,
        nome: "Xavier"
    },
    {
        id: 2,
        nome: "JMagneto"
    }
];



app.get("/", (req, res) => {
    res.status(200).send("Trilhas Solidarias.js");
  });

  export default app; 

