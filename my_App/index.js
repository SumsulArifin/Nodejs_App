const express = require('express');
const phone = require('./phone.json')
const app = express();
var cors = require('cors')
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World from Imran")
})
app.get('/phone', (req, res) => {
    res.send(phone)
})
app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(`My ID${id}`);
    const phones = phone.find(phones => phones.id === id) || {}
    res.send(phones)


})
app.get('/home', (req, res) => {
    res.send("Hello from Imran Home")
})

app.listen(port, () => {
    console.log(`App Start with port:${port}`);

})
