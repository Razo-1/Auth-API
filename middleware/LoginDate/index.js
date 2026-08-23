const { loginSchema } = require('../../Schema/LoginSchem.js');
const { readLogin } = require('../R_Online');
const { RDB } = require('../RDB');

const login_Verification = async (req,res,next) => {
    try{
        await loginSchema.validateAsync(req.body);
        next();
    }catch(err){
        res.status(500).json({err});
    }
}

const checkUserExists = (req,res,next) => {
    const { users } = res.locals;
    const { email } = req.body;
    const checkUser = users.find(el => el.email === email);

    if(!checkUser){
        return res.status(404).json({error : 'email not found'});
    }
    next();
}

const verifyCredentials = (req,res,next) => {
    const { users } = res.locals;
    const { email,password } = req.body;
    const checkData = users.find(el => el.email === email && el.password === password);

    if(!checkData){
        return res.status(400).json({error : 'incorrect data'});
    }
    next();
}

const userIsOnline = (req,res,next) => {
    const { login } = res.locals;
    const { email } = req.body;

    const checkOnline = login.find(el => el.email === email);

    if(checkOnline){
        return res.status(409).json({error : 'user is online'});
    }
    next();
}

const loginVerification = [ RDB,readLogin,login_Verification,checkUserExists,verifyCredentials,userIsOnline ];


module.exports = { loginVerification };