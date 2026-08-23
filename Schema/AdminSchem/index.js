const Joi = require("joi");

const adminSchema = Joi.object({
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
    }),
    pin: Joi.number().integer().min(100).max(999).required().messages({
        'number.base': 'PIN must be a number',
        'number.integer': 'PIN must be an integer',
        'number.min': 'PIN must be a 3-digit number (minimum 100)',
        'number.max': 'PIN must be a 3-digit number (maximum 999)',
        'any.required': 'PIN is required'
    })
})

module.exports = { adminSchema };