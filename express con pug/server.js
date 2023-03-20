const express = require('express');
const app = express();

app.listen(3000);
app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render("index");
});

app.get("/about", (req,res) => {
    res.render("about", {nombre: "Andrea", mensaje: "Hola"});
});

