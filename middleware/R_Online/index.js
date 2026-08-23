const path = require('path');
const fs = require('fs').promises;

const readLogin = async (req,res,next) => {
    try{
        const login = JSON.parse(await fs.readFile(path.join(__dirname,'..','..','DB','login.json'),'utf-8'));
        res.locals.login = login;
        next();
    }catch(err){
        res.status(500).json({error : err});
    }
}

module.exports = { readLogin }