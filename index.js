require('dotenv').config();
const express = require('express');
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, (err) => err ? console.log(err) : console.log(`The server is running on ${PORT} port.`))