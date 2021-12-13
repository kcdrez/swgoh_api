const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = 3000
const baseUrl = "https://swgoh.gg/api";

app.get('/', cors(), (req, res) => {
  res.end('Hello World!');
});
  
app.get("/player/:allycode", cors(), async (req, res) => {
  const response = await axios.get(`${baseUrl}/player/${req.params.allycode}`)
  res.json(response.data)
});

app.get("/gear", cors(), async (req, res) => {
  const response = await axios.get(`${baseUrl}/gear`)
  res.json(response.data)
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});