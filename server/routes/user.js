import express from "express";
import usercontrols from '../controllers/usercontrols.js';

const router = express.Router();
console.log("Reached Router")
router.post('/addError', usercontrols.addError);

export default router;
