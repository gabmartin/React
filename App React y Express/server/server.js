const express = require('express');
const app = express();
const users = require('./routes/users');

app.listen(3000);

app.get('/api', (req,res) => {
    res.send("Hola desde express");
});

app.use('/api/users', users);