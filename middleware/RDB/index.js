const path = require('path');
const fs = require('fs').promises;

const RDB = async (req,res,next) => {
    try{
        const users = JSON.parse(await fs.readFile(path.join(__dirname,'..','..','DB','users.json'),'utf-8'));
        res.locals.users = users;
        next();
    }catch(err){
        res.status(500).json({error : err});
    }
}

module.exports = { RDB }