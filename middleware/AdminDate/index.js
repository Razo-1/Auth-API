const { adminSchema } = require('../../Schema');

require('dotenv').config();

const adminLoginVerification = async (req,res,next) => {
    const {body} = req;
    try{
        await adminSchema.validateAsync(body);
        next();
    }catch(err){
        res.status(400).json({error})
    }
}

const adminConfigCheck = async (req,res,next) => {
    const {email,password,pin} = req.body;
    const confEmail = process.env.EMAIL;
    const confPassword = process.env.PASSWORD;
    const confPin = process.env.PIN;

    if(email !== confEmail){
        return res.status(400).json({error : 'wrong email'});
    }
    if(password !== confPassword){
        return res.status(400).json({error : 'wrong password'});
    }
    if(pin !== confPin){
        return res.status(400).json({error : 'wrong pin'});
    }
    next();
}


const adminLogin = [ adminLoginVerification,adminConfigCheck ];

module.exports = { adminLogin }