const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/sound/:name", (req, res) => {
    const { name } = req.params;
    if (name == "dog") {
        res.json({ 'sound': 'bowwow' })
    } else if (name == "cat") {
        res.json({ 'sound': 'miau' })
    } else if (name == "pig") {
        res.json({ 'sound': 'ggulggul' })
    } else if (name == "chicken") {
        res.json({ 'sound': 'cookcu' })
    } else {
        res.json({ 'sound': 'nope' })
    }
})

app.listen(3000, () => {
    console.log("Listen at PORT 3000");
})