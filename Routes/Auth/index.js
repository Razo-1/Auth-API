const { signinRouter } = require("./Signin");
const { SignupRouter } = require("./Signup");
const { logoutRouter } = require("./Logout");
const { adminRouter } = require("./Admin");


module.exports = { signinRouter,SignupRouter,logoutRouter,adminRouter };