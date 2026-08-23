const Joi = require("joi");


const authSchema = Joi.object({
    name : Joi.string().alphanum().min(3).max(20).required().message({
        'string.alphanum' : 'Name can contain only letters',
        'string.min' : 'The name must consist of at least 3 letters',
        'string.max' : 'The name must consist of no more than 20 letters',
        'string.required' : 'This field is required.'
    }),
    email : Joi.string().email().required().message({
        'string.email' : 'incorrect email',
        'string.required' : 'This field is required.'
    }),
    age : Joi.number().min(18).max(100).required().message({
        'number.min' : 'Age must be at least 18',
        'number.max' : 'Age must be at more 100',
        'number.base' : 'Age must be a number',
        'any.required' : 'This field is required.',
    }),
    password : Joi.string().min(8).max(30).required().message({
        'string.min' : 'Password must be at least 8 characters',
        'string.max' : 'Password must be at most 30 characters',
        'string.empty': 'Password cannot be empty',
        'string.base': 'Password must be a string',
        'string.required' : 'This field is required.'
    }),
    reapetPassword : Joi.string().valid(Joi.ref('password')).required().message({
        'any.only': 'Passwords do not match',
        'any.required': 'Repeat password is required'
    }),
    gender : Joi.string().valid('male','female').required().message({
        'any.only': 'Gender must be male or female',
        'any.required': 'Gender is required',
        'string.base': 'Gender must be a string'
    })
})

