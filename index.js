const express = require('express');
const app = express();

// Middleware -> Agrego el atributo fechaSistema al request
app.use((req, res, next) => {
    req.fechaSistema = new Date().toLocaleString();
    next();
});

// Ruteo básico
/*app.get('/', (req, res) => res.send('Opcion: GET'));
app.post('/', (req, res) => res.send('Opcion: POST'));
app.put('/', (req, res) => res.send('Opcion: PUT'));
app.delete('/', (req, res) => res.send('Opcion: DELETE'));*/

// Ruteo encadenado
app.route('/')
    .get((req, res) => res.send(`Opcion: ${req.method} Fecha: ${req.fechaSistema}`))
    .post((req, res) => res.send(`Opcion: ${req.method} Fecha: ${req.fechaSistema}`))
    .put((req, res) => res.send(`Opcion: ${req.method} Fecha: ${req.fechaSistema}`))
    .delete((req, res) => res.send(`Opcion: ${req.method} Fecha: ${req.fechaSistema}`));

// Capturo otros errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error inesperado!');
});

// Capturo 404
app.use((req, res, next) => {
    res.status(404).send('No existe la página solicitada');
});
  
const puerto = process.env.PORT || 3000;

app.listen(puerto, () => console.log(`Servidor web iniciado en el puerto ${puerto}`));
