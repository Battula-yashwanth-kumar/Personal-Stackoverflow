import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import ConnectDB from './db/ConnectDB.js'
import user from './routes/user.js';
dotenv.config();

const app = express();

const DATABASE_URL=process.env.DATABASE_URL

app.use(express.json());
ConnectDB(DATABASE_URL);
app.use(cors());
app.use("/", user);
app.listen(5000);
