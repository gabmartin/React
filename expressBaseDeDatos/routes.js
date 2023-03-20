module.exports = function (app){

    app.get('/', (req, res) => {
        res.json({'mensaje': 'Hola estoy en las rutas'});
    });

    app.post('/lenguajes', (req, res) => {
        const nuevoLenguaje = req.body;
        console.log(nuevoLenguaje);

        res.json({'mensaje': 'Se ha creado su lenguaje'});
    });

}