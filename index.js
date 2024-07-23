//configuracion aplicable para SERVIDOR

const fs = require('fs');
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const path = require("path");
const bp = require("body-parser");
const cors = require('cors');

const rl = require('./server/controlador/pedido'); // Ruta al controlador correcto
const dCtrl = require('./server/controlador/pedido'); // Ruta al controlador correcto

const app = express();
const hostname = 'localhost';
const port = 2000;

app.use(morgan('dev'));
app.use(bp.json());
app.use(cors());
//configuramos el directorio donde express debe tomar los archivos
app.use(express.static(path.join(__dirname, 'public')));

//definimos las rutas
app.get('/api/pedidos', rl.getAllPedidos);
app.post('/api/pedidos', rl.nPedido);
app.get('/api/pedidos/:pedId', rl.rPedido);
app.put('/api/pedidos/:pedId', rl.uPedido);
app.delete('/api/pedidos/:pedId', dCtrl.dPedido);
app.post('/api/setLibro', rl.setLibro);

//configurar rutas adicionales desde archivos externos
require('./server/rutas/pedido')(app);

//Middleware de respuesta para rutas no definidas
app.use((req, res, next) => {
    console.log("Cabecera:" + req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Respuesta del servidor express</h1></body></html>');

});
//iniciar el servidor
//const server = http.createServer(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});