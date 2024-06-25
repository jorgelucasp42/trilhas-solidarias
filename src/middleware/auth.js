import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;

const authenticate = (req, res, next) => {
  const key = req.headers["apikey"];
  if (key && key === apiKey) {
    next();
  } else {
    res.status(401).json({ mensagem: "Acesso não autorizado" });
  }
};

export default authenticate;