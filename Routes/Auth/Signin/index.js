const express = require('express');
const { loginVerification } = require('../../../middleware')
const path = require('path');
const fs = require('fs').promises;

const signinRouter = express.Router();

signinRouter.post('/sign-in',loginVerification,async (req,res) => {
    const { users,login } = res.locals
    const { email } = req.body;
    try{
        const userData = users.find(el => el.email === email);
        userData.isActive = true;
        login.push(userData);
        await fs.writeFile(path.join(__dirname,'..','..','..','DB','login.json'),JSON.stringify(login,null,2),'utf-8');
        await fs.writeFile(path.join(__dirname,'..','..','..','DB','users.json'),JSON.stringify(users,null,2),'utf-8');
        res.status(200).json({message : 'Success! You have logged in.'});
    }catch(error){
        res.status(500).json({error});
    }
});

module.exports = { signinRouter }