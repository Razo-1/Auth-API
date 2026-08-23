const express = require('express');
const { logoutVerif } = require('../../../middleware');
const path = require('path');
const fs = require('fs').promises;

const logoutRouter = express.Router();

logoutRouter.post('/logout',logoutVerif,async (req,res) => {
    const { email } = req.body;
    const { login,users } = res.locals;

    const logoutLogin = login.filter(el => el.email !== email);
    const logoutuser = users.find(el =>  el.email === email)
    logoutuser.isActive = false;

    try{
        await fs.writeFile(path.join(__dirname,'..','..','..','DB','login.json'),JSON.stringify(logoutLogin,null,2),'utf-8');
        await fs.writeFile(path.join(__dirname,'..','..','..','DB','users.json'),JSON.stringify(users,null,2),'utf-8');
        res.status(200).json({message : 'You have successfully signed out of your account.'})
    }catch(error){
        res.status(500).json({error})
    }

})

module.exports = { logoutRouter }