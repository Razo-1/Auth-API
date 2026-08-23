const { RDB } = require("./RDB");
const { verification } = require("./RegitrationDate");
const { loginVerification } = require("./LoginDate");
const { logoutVerif } = require("./LogoutDate");
const { readLogin } = require("./R_Online");
const { adminLogin } = require("./AdminDate");

module.exports = {
    RDB,
    verification,
    loginVerification,
    logoutVerif,
    readLogin,
    adminLogin
}