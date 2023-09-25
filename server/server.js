import express from "express";
import cors from 'cors';
import ConnectDB from './db/ConnectDB.js'
import user from './routes/user.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the path module
import path from 'path';

// Load environment variables from the dev.env file
dotenv.config({ path: path.join(__dirname, 'config', 'dev.env') });



const app = express();


const pass=process.env.PASS
const username=process.env.USER


app.use(express.json());
ConnectDB({pass,username});
app.use(cors());
app.use("/api", user);
app.listen(5000);
