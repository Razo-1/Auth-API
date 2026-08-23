const { adminSchema } = require("./AdminSchem");
const { loginSchema } = require("./SigninSchema/LoginSchem");
const { authSchema } = require("./SignupSchema/AuthSchema");

module.exports = {
    adminSchema,
    loginSchema,
    authSchema
}