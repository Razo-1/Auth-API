require('dotenv').config();
const express = require('express');
const { authRouter } = require('./Routes/Auth');
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use('/',authRouter);

app.listen(PORT, (err) => err ? console.log(err) : console.log(`The server is running on ${PORT} port.`))