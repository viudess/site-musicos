import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbPassword = process.env.REACT_DB_PASSWORD;

export default async function conectaNaDb(){
    mongoose.connect(`mongodb+srv://duduzinhochorro:duduchor1407@spotifydb.feiux.mongodb.net/?retryWrites=true&w=majority&appName=spotifydb`);

    return mongoose.connection;
}