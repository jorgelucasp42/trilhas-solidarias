//import mongoose from "mongoose";

// async function conectaNaDatabase() {
//     try {
//         await mongoose.connect(process.env.DB_CONNECT_STRING, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 3000  // Adiciona um tempo limite de 3 segundos
//         });
//         console.log("Conexão com o banco feita com sucesso");
//         return mongoose.connection;
//     } catch (error) {
//         console.error("Erro de conexão:", error);
//         throw error;
//     }
// }

// export default conectaNaDatabase;

import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECT_STRING);
  return mongoose.connection;
};

export default conectaNaDatabase;


// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();  // Certifique-se de que as variáveis de ambiente estão carregadas

// async function conectaNaDatabase() {
//     try {
//         await mongoose.connect(process.env.DB_CONNECT_STRING, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Conexão com o banco feita com sucesso");
//         return mongoose.connection;
//     } catch (error) {
//         console.error("Erro de conexão", error);
//         throw error;
//     }
// };

// export default conectaNaDatabase;

