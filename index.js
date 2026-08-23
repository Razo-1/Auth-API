require('dotenv').config();
const express = require('express');
const { signinRouter,SignupRouter,logoutRouter,adminRouter } = require('./Routes/Auth');

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use('/auth',signinRouter);
app.use('/auth',SignupRouter);
app.use('/auth',logoutRouter);
app.use('/auth',adminRouter);

app.listen(PORT, (err) => err ? console.log(err) : console.log(`The server is running on ${PORT} port.`));