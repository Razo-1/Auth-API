const { readLogin } = require('../R_Online');
const { RDB } = require('../RDB');

const verifEmail = async (req,res,next) => {
    const { login } = res.locals;
    const { email } = req.body;

    const checkOnline = login.find(el => el.email === email);

    if(!checkOnline){
        return res.status(400).json({error : 'wrong email'});
    }

    next();

};

const logoutVerif = [ RDB,readLogin,verifEmail ];


module.exports = { logoutVerif }