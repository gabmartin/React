const express = require("express");
const app = express();
require('./routes')(app);

app.listen(3000, function (){
    console.log("Servidor funcionando");
});


