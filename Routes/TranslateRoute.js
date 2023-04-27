import express from  "express"
import {  translateData } from "../Controllers/TranslateController.js";

const router =express.Router();
router.post("/service",translateData)
export default router