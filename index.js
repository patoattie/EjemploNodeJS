const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Opcion: GET'));
app.post('/', (req, res) => res.send('Opcion: POST'));
app.put('/', (req, res) => res.send('Opcion: PUT'));
app.delete('/', (req, res) => res.send('Opcion: DELETE'));

const puerto = process.env.PORT || 3000;

app.listen(puerto, () => console.log(`Servidor web iniciado en el puerto ${puerto}`));
