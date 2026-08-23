const Joi = require("joi");

const loginSchema = Joi.object({
    email : Joi.string().email().required().messages({
        'string.email' : 'incorrect email',
        'string.required' : 'This field is required.'
    }),
    password : Joi.string().min(8).max(20).required().messages({
        'string.min' : 'Password must be at least 8 characters',
        'string.max' : 'Password must be at most 30 characters',
        'string.empty': 'Password cannot be empty',
        'string.base': 'Password must be a string',
        'string.required' : 'This field is required.'
    })
})


module.exports = { loginSchema };