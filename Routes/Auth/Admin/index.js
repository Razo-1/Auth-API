const express = require('express');
const { adminLogin } = require('../../../middleware');

const adminRouter = express.Router();

adminRouter.post('/admin',adminLogin,async (req,res) => {
    res.status(200).json({message : "admin Online!"});
})

module.exports = { adminRouter };