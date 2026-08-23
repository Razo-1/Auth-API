const { authSchema } = require("../../Schema");
const { RDB } = require('../RDB');

const data_verification = async (req,res,next) => {
    try{
        await authSchema.validateAsync(req.body);
        next();
    }catch(err){
        res.status(400).json({err});
    }
};

const email_verification = async (req,res,next) => {
    const { users } = res.locals;
    const { email } = req.body;

    const checkEmail = users.find(el => el.email === email);

    if(checkEmail){
        return res.status(409).json({error : 'The email is already registered'});
    }
    next();
}

const verification = [ RDB,data_verification,email_verification];

module.exports = { verification }