const express = require('express');
const { verification } = require('../../../middleware');
const path = require('path');
const fs = require('fs').promises;

const SignupRouter = express.Router();

SignupRouter.post('/sign-up',verification,async (req,res) => {
    const { users } = res.locals
    const { repeatPassword,...body } = req.body;
    body.id = Date.now();
    body.isActive = false;    
    try{
        users.push(body);
        await fs.writeFile(path.join(__dirname,'..','..','..','DB','users.json'),JSON.stringify(users,null,2),'utf-8');
        res.status(201).json({message : 'new user added!'});
    }catch(error){
        res.status(500).json({error})
    }
})


module.exports = { SignupRouter }