import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECT_STRING);
  return mongoose.connection;
};

export default conectaNaDatabase;
