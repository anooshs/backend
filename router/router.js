import express from "express";
const router = express.Router();

import CommonController from '../controllers/commonController.js';

const commonController = new CommonController();

router.get('/getTest', (req, res, next)=>{
    req.data = 5;
    req.startTime = new Date();
    next();
},commonController.getTestData);

router.get('/get', commonController.getTest);

export default router;